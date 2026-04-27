import { useState, useMemo } from 'react';
import { useAppStore } from '../../store/appStore';
import { useCountdown } from '../../hooks/useCountdown';
import { TimerDisplay } from './TimerDisplay';
import { TimerControls } from './TimerControls';
import { CameraModal } from '../camera/CameraModal';
import { ChallengeImage } from '../challenge/ChallengeImage';
import { getLegoImageUrl } from '../../services/pollinationsService';
import { getCuratedBlockImage } from '../../data/curatedImages';

export function TimerOverlay() {
  useCountdown();

  const active = useAppStore(s => s.active);
  const timer = useAppStore(s => s.timer);
  const pauseTimer = useAppStore(s => s.pauseTimer);
  const setView = useAppStore(s => s.setView);
  const [showCamera, setShowCamera] = useState(false);

  const challengeName = active
    ? (active.mode === 'complicated' ? active.challenge.complicated : active.challenge.simple)
    : 'Block Challenge';

  const generatedImageUrl = useMemo(() => {
    if (!active) return null;
    return getCuratedBlockImage(active.challenge.id) ?? getLegoImageUrl(challengeName);
  }, [active?.challenge.id, challengeName]);

  function handleBack() {
    pauseTimer();
    setView('home');
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-between px-4 py-6 gap-6">
      <div className="w-full max-w-md flex flex-col gap-6">

        {/* Back button + challenge name */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleBack}
            className="btn-blue px-4 py-2 text-sm"
          >
            ← Back
          </button>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-black uppercase tracking-wider opacity-50 truncate" style={{ color: '#1A1A1A' }}>
              Building:
            </p>
            <p className="font-black text-lg leading-tight truncate" style={{ color: '#1A1A1A' }}>
              {challengeName}
            </p>
          </div>
        </div>

        {/* Timer display */}
        <div className="card-block p-6 sm:p-8 flex flex-col items-center gap-4">
          <TimerDisplay remaining={timer.remaining} finished={timer.finished} />
          <TimerControls />
        </div>

        {/* Reference images */}
        {active && (
          <div className="card-block p-3">
            <ChallengeImage
              imageUrl={active.imageUrl}
              imageLoading={active.imageLoading}
              imageError={active.imageError}
              generatedImageUrl={generatedImageUrl}
              challengeName={challengeName}
            />
          </div>
        )}

        {/* Capture photo button */}
        <button
          onClick={() => setShowCamera(true)}
          className="btn-block w-full py-4 text-lg"
          style={{ backgroundColor: '#1A1A1A' }}
        >
          📷 Capture My Build!
        </button>

        {timer.finished && (
          <button
            onClick={() => setView('gallery')}
            className="btn-blue w-full py-3"
          >
            🖼 View Gallery
          </button>
        )}
      </div>

      {showCamera && (
        <CameraModal
          challengeName={challengeName}
          mode={active?.mode ?? 'simple'}
          onClose={() => setShowCamera(false)}
        />
      )}
    </div>
  );
}
