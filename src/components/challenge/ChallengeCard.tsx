import { useAppStore } from '../../store/appStore';
import { ChallengeImage } from './ChallengeImage';
import { ActionButtons } from './ActionButtons';

export function ChallengeCard() {
  const active = useAppStore(s => s.active);

  const displayName = active
    ? (active.mode === 'complicated' ? active.challenge.complicated : active.challenge.simple)
    : null;


  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-6 gap-6">
      <div className="w-full max-w-md flex flex-col gap-4">

        {/* Challenge name or prompt */}
        <div className="text-center">
          {displayName ? (
            <>
              {active?.mode === 'complicated' && (
                <span
                  className="inline-block mb-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-white"
                  style={{ backgroundColor: '#FF6600' }}
                >
                  🔥 Complicated!
                </span>
              )}
              <h1
                className="text-4xl sm:text-5xl font-black leading-tight"
                style={{ color: '#1A1A1A', textShadow: '3px 3px 0 rgba(255,255,255,0.4)' }}
              >
                {displayName}
              </h1>
              <p className="mt-1 text-sm font-bold opacity-60" style={{ color: '#1A1A1A' }}>
                Build it out of blocks!
              </p>
            </>
          ) : (
            <div className="py-2">
              <p
                className="text-2xl sm:text-3xl font-black"
                style={{ color: '#1A1A1A', textShadow: '2px 2px 0 rgba(255,255,255,0.4)' }}
              >
                What will you build?
              </p>
              <p className="mt-2 text-sm font-bold opacity-60" style={{ color: '#1A1A1A' }}>
                Press the button to get a random block challenge!
              </p>
            </div>
          )}
        </div>

        {/* Image area */}
        <div className="card-block p-3">
          {active ? (
            <ChallengeImage
              imageUrl={active.imageUrl}
              imageLoading={active.imageLoading}
              imageError={active.imageError}
              challengeId={active.challenge.id}
              challengeName={displayName ?? ''}
            />
          ) : (
            <div
              className="w-full rounded-xl flex flex-col items-center justify-center gap-4 py-12"
              style={{ aspectRatio: '4/3', backgroundImage: 'url(/brick-pattern.svg)', backgroundRepeat: 'repeat', backgroundSize: '60px 30px', backgroundColor: '#f5f0e8' }}
            >
              <div className="text-6xl animate-pulse-glow">🧱</div>
              <p className="font-black text-base opacity-50" style={{ color: '#1A1A1A' }}>Your build idea will appear here</p>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <ActionButtons />
      </div>
    </div>
  );
}
