import { create } from 'zustand';
import type { ActiveChallenge, TimerState, GalleryEntry } from '../types';

const TIMER_SECONDS = 1200;

interface AppState {
  active: ActiveChallenge | null;
  setActive: (a: ActiveChallenge | null) => void;
  setImageUrl: (url: string | null) => void;
  setImageLoading: (v: boolean) => void;
  setImageError: (v: boolean) => void;

  timer: TimerState;
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
  tickTimer: () => void;

  view: 'home' | 'timer' | 'gallery';
  setView: (v: 'home' | 'timer' | 'gallery') => void;

  gallery: GalleryEntry[];
  setGallery: (entries: GalleryEntry[]) => void;
  addGalleryEntry: (entry: GalleryEntry) => void;
}

export const useAppStore = create<AppState>((set) => ({
  active: null,
  setActive: (a) => set({ active: a }),
  setImageUrl: (url) =>
    set((s) => s.active ? { active: { ...s.active, imageUrl: url } } : {}),
  setImageLoading: (v) =>
    set((s) => s.active ? { active: { ...s.active, imageLoading: v } } : {}),
  setImageError: (v) =>
    set((s) => s.active ? { active: { ...s.active, imageError: v } } : {}),

  timer: { remaining: TIMER_SECONDS, running: false, finished: false },
  startTimer: () =>
    set((s) => ({ timer: { ...s.timer, running: true, finished: false } })),
  pauseTimer: () =>
    set((s) => ({ timer: { ...s.timer, running: false } })),
  resetTimer: () =>
    set({ timer: { remaining: TIMER_SECONDS, running: false, finished: false } }),
  tickTimer: () =>
    set((s) => {
      const next = s.timer.remaining - 1;
      if (next <= 0) return { timer: { ...s.timer, remaining: 0, running: false, finished: true } };
      return { timer: { ...s.timer, remaining: next } };
    }),

  view: 'home',
  setView: (v) => set({ view: v }),

  gallery: [],
  setGallery: (entries) => set({ gallery: entries }),
  addGalleryEntry: (entry) =>
    set((s) => ({ gallery: [entry, ...s.gallery] })),
}));
