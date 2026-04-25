import { useAppStore } from '../../store/appStore';

export function TimerControls() {
  const timer = useAppStore(s => s.timer);
  const startTimer = useAppStore(s => s.startTimer);
  const pauseTimer = useAppStore(s => s.pauseTimer);
  const resetTimer = useAppStore(s => s.resetTimer);

  return (
    <div className="flex gap-3 justify-center">
      {!timer.finished && (
        timer.running ? (
          <button onClick={pauseTimer} className="btn-orange px-6 py-3">
            ⏸ Pause
          </button>
        ) : (
          <button onClick={startTimer} className="btn-green px-6 py-3">
            ▶ {timer.remaining < 1200 ? 'Resume' : 'Start'}
          </button>
        )
      )}
      <button onClick={resetTimer} className="btn-blue px-6 py-3">
        🔄 Reset
      </button>
    </div>
  );
}
