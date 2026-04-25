import { useAppStore } from '../../store/appStore';
import { getRandomChallenge } from '../../data/challenges';
import { fetchBlockImage } from '../../services/unsplashService';
import type { ChallengeMode } from '../../types';

export function ActionButtons() {
  const active = useAppStore(s => s.active);
  const setActive = useAppStore(s => s.setActive);
  const setImageUrl = useAppStore(s => s.setImageUrl);
  const setImageLoading = useAppStore(s => s.setImageLoading);
  const setImageError = useAppStore(s => s.setImageError);
  const resetTimer = useAppStore(s => s.resetTimer);
  const startTimer = useAppStore(s => s.startTimer);
  const setView = useAppStore(s => s.setView);

  async function loadImage(query: string) {
    setImageLoading(true);
    setImageError(false);
    try {
      const url = await fetchBlockImage(query);
      setImageUrl(url);
    } catch {
      setImageError(true);
      setImageUrl(null);
    } finally {
      setImageLoading(false);
    }
  }

  async function handleNewChallenge() {
    const challenge = getRandomChallenge(active?.challenge.id);
    setActive({ challenge, mode: 'simple', imageUrl: null, imageLoading: true, imageError: false });
    await loadImage(challenge.searchTerm);
  }

  async function handleComplicate() {
    if (!active || active.mode !== 'simple') return;
    const updated = { ...active, mode: 'complicated' as ChallengeMode, imageUrl: null, imageLoading: true, imageError: false };
    setActive(updated);
    await loadImage(active.challenge.complicatedSearchTerm);
  }

  function handleChallenge() {
    if (!active) return;
    resetTimer();
    setView('timer');
    startTimer();
  }

  const hasActive = !!active;
  const canComplicate = hasActive && active.mode === 'simple' && !active.imageLoading;

  return (
    <div className="flex flex-col gap-3">
      <button
        onClick={handleNewChallenge}
        disabled={active?.imageLoading}
        className="btn-green w-full py-4 text-lg"
      >
        {active ? '🔀 New Block!' : '🎲 Go! Pick a Block Challenge!'}
      </button>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={handleComplicate}
          disabled={!canComplicate}
          className="btn-orange py-3"
          title={active?.mode === 'complicated' ? 'Already complicated!' : ''}
        >
          {active?.mode === 'complicated' ? '🔥 Complicated!' : '⬆️ Complicate!'}
        </button>

        <button
          onClick={handleChallenge}
          disabled={!hasActive || active.imageLoading}
          className="btn-red py-3"
        >
          ⏱️ Challenge!
        </button>
      </div>
    </div>
  );
}
