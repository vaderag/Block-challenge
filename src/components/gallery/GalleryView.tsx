import { useAppStore } from '../../store/appStore';
import { GalleryThumbnail } from './GalleryThumbnail';

export function GalleryView() {
  const gallery = useAppStore(s => s.gallery);
  const setView = useAppStore(s => s.setView);

  return (
    <div className="flex-1 flex flex-col px-4 py-4 gap-4 max-w-2xl mx-auto w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-black" style={{ color: '#1A1A1A', textShadow: '2px 2px 0 rgba(255,255,255,0.4)' }}>
          My Builds
        </h2>
        <button onClick={() => setView('home')} className="btn-blue px-4 py-2 text-sm">
          ← Back
        </button>
      </div>

      {gallery.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
          <div className="text-6xl">📭</div>
          <p className="font-black text-xl" style={{ color: '#1A1A1A' }}>No builds yet!</p>
          <p className="font-bold opacity-60" style={{ color: '#1A1A1A' }}>
            Complete a challenge and capture a photo to save it here.
          </p>
          <button onClick={() => setView('home')} className="btn-green px-6 py-3 mt-2">
            Start a Challenge!
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {gallery.map(entry => (
            <GalleryThumbnail key={entry.id} entry={entry} />
          ))}
        </div>
      )}
    </div>
  );
}
