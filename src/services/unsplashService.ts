const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY as string | undefined;

export async function fetchBlockImage(query: string): Promise<string> {
  if (!ACCESS_KEY) throw new Error('No Unsplash key');

  const url = `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&count=5`;
  const res = await fetch(url, {
    headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
  });

  if (!res.ok) throw new Error(`Unsplash ${res.status}`);

  const photos = await res.json();
  if (!Array.isArray(photos) || photos.length === 0) throw new Error('No photos');

  const photo = photos[Math.floor(Math.random() * photos.length)];
  return photo.urls.regular as string;
}
