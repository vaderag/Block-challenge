import { useEffect } from 'react';
import { useAppStore } from '../store/appStore';

export function useCountdown() {
  const running = useAppStore(s => s.timer.running);
  const finished = useAppStore(s => s.timer.finished);
  const tickTimer = useAppStore(s => s.tickTimer);

  useEffect(() => {
    if (!running || finished) return;
    const id = setInterval(() => tickTimer(), 1000);
    return () => clearInterval(id);
  }, [running, finished, tickTimer]);
}
