import type { GalleryEntry } from '../types';

const KEY = 'block-challenge-gallery';

export function loadGallery(): GalleryEntry[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    return JSON.parse(raw) as GalleryEntry[];
  } catch {
    return [];
  }
}

export function saveEntry(entry: GalleryEntry): void {
  try {
    const existing = loadGallery();
    const updated = [entry, ...existing];
    localStorage.setItem(KEY, JSON.stringify(updated));
  } catch (e) {
    if (e instanceof DOMException && e.name === 'QuotaExceededError') {
      // Remove oldest entries until it fits
      const existing = loadGallery();
      const trimmed = existing.slice(0, Math.max(0, existing.length - 2));
      try {
        localStorage.setItem(KEY, JSON.stringify([entry, ...trimmed]));
      } catch {
        // Storage truly full — skip silently
      }
    }
  }
}

export function deleteEntry(id: string): void {
  const updated = loadGallery().filter(e => e.id !== id);
  localStorage.setItem(KEY, JSON.stringify(updated));
}
