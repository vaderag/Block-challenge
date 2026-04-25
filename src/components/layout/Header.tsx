import { useAppStore } from '../../store/appStore';

export function Header() {
  const view = useAppStore(s => s.view);
  const setView = useAppStore(s => s.setView);
  const gallery = useAppStore(s => s.gallery);

  return (
    <header className="relative z-10 flex items-center justify-between px-4 py-3 sm:px-6">
      <button
        onClick={() => setView('home')}
        className="flex items-center gap-2 group"
        aria-label="Go to home"
      >
        <div className="flex gap-1">
          {['#CC0000', '#0057A8', '#00833D', '#FF6600'].map((color, i) => (
            <div
              key={i}
              className="w-5 h-5 rounded-sm shadow-sm group-hover:scale-110 transition-transform"
              style={{ backgroundColor: color, boxShadow: '0 3px 0 rgba(0,0,0,0.3)' }}
            />
          ))}
        </div>
        <span
          className="text-xl sm:text-2xl font-black tracking-tight"
          style={{ color: '#1A1A1A', textShadow: '2px 2px 0 rgba(255,255,255,0.5)' }}
        >
          BLOCK CHALLENGE
        </span>
      </button>

      <button
        onClick={() => setView('gallery')}
        className="relative flex items-center gap-2 px-3 py-2 rounded-xl font-black text-sm uppercase tracking-wide transition-all"
        style={{
          backgroundColor: view === 'gallery' ? '#1A1A1A' : 'rgba(0,0,0,0.15)',
          color: view === 'gallery' ? '#FFD700' : '#1A1A1A',
        }}
        aria-label="View gallery"
      >
        <span>📷</span>
        <span className="hidden sm:inline">Gallery</span>
        {gallery.length > 0 && (
          <span
            className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-xs flex items-center justify-center font-black text-white"
            style={{ backgroundColor: '#CC0000' }}
          >
            {gallery.length > 9 ? '9+' : gallery.length}
          </span>
        )}
      </button>
    </header>
  );
}
