interface Props {
  remaining: number;
  finished: boolean;
}

function getTimerColor(remaining: number): string {
  if (remaining > 600) return '#00833D';
  if (remaining > 300) return '#CC8800';
  if (remaining > 120) return '#FF6600';
  return '#CC0000';
}

export function TimerDisplay({ remaining, finished }: Props) {
  const mins = Math.floor(remaining / 60);
  const secs = remaining % 60;
  const display = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  const color = getTimerColor(remaining);

  if (finished) {
    return (
      <div className="flex flex-col items-center gap-2 animate-pulse-glow">
        <div className="text-6xl">🎉</div>
        <p
          className="text-4xl sm:text-5xl font-black text-center"
          style={{ color: '#CC0000', textShadow: '3px 3px 0 rgba(0,0,0,0.2)' }}
        >
          Time&apos;s Up!
        </p>
        <p className="text-lg font-black opacity-60" style={{ color: '#1A1A1A' }}>
          Show off your build!
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-1">
      <p className="text-sm font-black uppercase tracking-widest opacity-50" style={{ color: '#1A1A1A' }}>
        Time Remaining
      </p>
      <div
        className="font-black tabular-nums transition-colors duration-500"
        style={{
          fontSize: 'clamp(4rem, 18vw, 7rem)',
          lineHeight: 1,
          color,
          textShadow: `4px 4px 0 rgba(0,0,0,0.15)`,
          letterSpacing: '-0.02em',
        }}
      >
        {display}
      </div>
      {remaining <= 60 && (
        <p className="text-sm font-black animate-shake" style={{ color: '#CC0000' }}>
          Almost out of time!
        </p>
      )}
    </div>
  );
}
