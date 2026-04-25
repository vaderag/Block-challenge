import { useEffect } from 'react';
import { useCamera } from '../../hooks/useCamera';
import { useAppStore } from '../../store/appStore';
import { saveEntry } from '../../services/galleryStorage';
import type { ChallengeMode, GalleryEntry } from '../../types';

interface Props {
  challengeName: string;
  mode: ChallengeMode;
  onClose: () => void;
}

export function CameraModal({ challengeName, mode, onClose }: Props) {
  const addGalleryEntry = useAppStore(s => s.addGalleryEntry);
  const { videoRef, supported, permissionDenied, noCamera, startStream, stopStream, capturePhoto } = useCamera();

  useEffect(() => {
    startStream();
    return () => stopStream();
  }, [startStream, stopStream]);

  function handleCapture() {
    const dataUrl = capturePhoto();
    if (!dataUrl) return;

    const entry: GalleryEntry = {
      id: crypto.randomUUID?.() ?? Math.random().toString(36).slice(2),
      challengeName,
      mode,
      imageDataUrl: dataUrl,
      capturedAt: Date.now(),
    };

    saveEntry(entry);
    addGalleryEntry(entry);
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
    >
      <div className="card-block p-4 w-full max-w-sm flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="font-black text-lg" style={{ color: '#1A1A1A' }}>📷 Capture Your Build</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full font-black flex items-center justify-center"
            style={{ backgroundColor: '#f0f0f0', color: '#1A1A1A' }}
            aria-label="Close camera"
          >
            ✕
          </button>
        </div>

        {!supported && (
          <div className="text-center py-8">
            <p className="text-4xl mb-2">📵</p>
            <p className="font-bold" style={{ color: '#CC0000' }}>Camera not supported in this browser.</p>
          </div>
        )}

        {supported && permissionDenied && (
          <div className="text-center py-8">
            <p className="text-4xl mb-2">🚫</p>
            <p className="font-bold" style={{ color: '#CC0000' }}>Camera permission denied.</p>
            <p className="text-sm mt-1 opacity-60">Allow camera access in your browser settings.</p>
          </div>
        )}

        {supported && noCamera && (
          <div className="text-center py-8">
            <p className="text-4xl mb-2">🔍</p>
            <p className="font-bold" style={{ color: '#CC0000' }}>No camera found.</p>
          </div>
        )}

        {supported && !permissionDenied && !noCamera && (
          <>
            <div className="w-full rounded-xl overflow-hidden" style={{ aspectRatio: '4/3', border: '3px solid #1A1A1A' }}>
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
              />
            </div>
            <button
              onClick={handleCapture}
              className="btn-block w-full py-4 text-base"
              style={{ backgroundColor: '#CC0000' }}
            >
              📸 Take Photo
            </button>
          </>
        )}
      </div>
    </div>
  );
}
