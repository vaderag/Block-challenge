import { useEffect } from 'react';
import { useAppStore } from './store/appStore';
import { loadGallery } from './services/galleryStorage';
import { Header } from './components/layout/Header';
import { BrickBackground } from './components/layout/BrickBackground';
import { ChallengeCard } from './components/challenge/ChallengeCard';
import { TimerOverlay } from './components/timer/TimerOverlay';
import { GalleryView } from './components/gallery/GalleryView';

export default function App() {
  const view = useAppStore(s => s.view);
  const setGallery = useAppStore(s => s.setGallery);

  useEffect(() => {
    setGallery(loadGallery());
  }, [setGallery]);

  return (
    <div className="relative min-h-screen flex flex-col" style={{ backgroundColor: '#FFD700' }}>
      <BrickBackground />
      <div className="relative z-10 flex flex-col flex-1">
        <Header />
        <main className="flex-1 flex flex-col">
          {view === 'home' && <ChallengeCard />}
          {view === 'timer' && <TimerOverlay />}
          {view === 'gallery' && <GalleryView />}
        </main>
      </div>
    </div>
  );
}
