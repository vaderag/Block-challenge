import type { GalleryEntry } from '../../types';
import { deleteEntry } from '../../services/galleryStorage';
import { useAppStore } from '../../store/appStore';

interface Props {
  entry: GalleryEntry;
}

export function GalleryThumbnail({ entry }: Props) {
  const setGallery = useAppStore(s => s.setGallery);
  const gallery = useAppStore(s => s.gallery);

  const date = new Date(entry.capturedAt);
  const label = date.toLocaleDateString(undefined, { day: 'numeric', month: 'short' });
  const time = date.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });

  function handleDelete() {
    deleteEntry(entry.id);
    setGallery(gallery.filter(e => e.id !== entry.id));
  }

  return (
    <div className="card-block overflow-hidden flex flex-col group">
      <div className="relative" style={{ aspectRatio: '4/3' }}>
        <img
          src={entry.imageDataUrl}
          alt={`Build of ${entry.challengeName}`}
          className="w-full h-full object-cover"
        />
        <button
          onClick={handleDelete}
          className="absolute top-2 right-2 w-7 h-7 rounded-full text-xs font-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: '#CC0000', color: 'white' }}
          aria-label="Delete photo"
        >
          ✕
        </button>
        {entry.mode === 'complicated' && (
          <span
            className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-xs font-black text-white"
            style={{ backgroundColor: '#FF6600' }}
          >
            🔥 Hard
          </span>
        )}
      </div>
      <div className="p-2">
        <p className="font-black text-sm truncate" style={{ color: '#1A1A1A' }}>{entry.challengeName}</p>
        <p className="text-xs opacity-50 font-bold" style={{ color: '#1A1A1A' }}>{label} · {time}</p>
      </div>
    </div>
  );
}
