import { useRef, useState, useCallback, useEffect } from 'react';

export interface UseCameraResult {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  supported: boolean;
  permissionDenied: boolean;
  noCamera: boolean;
  startStream: () => Promise<void>;
  stopStream: () => void;
  capturePhoto: () => string | null;
}

export function useCamera(): UseCameraResult {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [noCamera, setNoCamera] = useState(false);

  const supported = typeof navigator !== 'undefined' && !!navigator.mediaDevices?.getUserMedia;

  const stopStream = useCallback(() => {
    streamRef.current?.getTracks().forEach(t => t.stop());
    streamRef.current = null;
  }, []);

  const startStream = useCallback(async () => {
    setPermissionDenied(false);
    setNoCamera(false);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      if (err instanceof DOMException) {
        if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
          setPermissionDenied(true);
        } else if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
          setNoCamera(true);
        } else {
          setNoCamera(true);
        }
      }
    }
  }, []);

  const capturePhoto = useCallback((): string | null => {
    const video = videoRef.current;
    if (!video || !streamRef.current) return null;

    const MAX = 640;
    const w = video.videoWidth;
    const h = video.videoHeight;
    const scale = Math.min(1, MAX / Math.max(w, h));

    const canvas = document.createElement('canvas');
    canvas.width = Math.round(w * scale);
    canvas.height = Math.round(h * scale);
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL('image/jpeg', 0.5);
  }, []);

  // Stop stream on unmount
  useEffect(() => () => stopStream(), [stopStream]);

  return { videoRef, supported, permissionDenied, noCamera, startStream, stopStream, capturePhoto };
}
