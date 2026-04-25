export function BrickBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        backgroundImage: 'url(/brick-pattern.svg)',
        backgroundRepeat: 'repeat',
        backgroundSize: '80px 40px',
        opacity: 0.08,
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}
