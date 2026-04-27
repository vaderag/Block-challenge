/**
 * Returns the conventional curated image URL for a challenge.
 * The app always tries this first — if the file doesn't exist it 404s
 * and the component falls back to Pollinations then Unsplash automatically.
 *
 * Naming convention: public/images/challenges/{challenge-id}-1.jpg (or .png)
 * For multiple images per challenge, add -2.jpg, -3.jpg etc. and list them here.
 */
export const CURATED_EXTRAS: Record<string, string[]> = {
  // Add extra images here when a challenge has more than one, e.g.:
  // penguin: ['/images/challenges/penguin-2.jpg', '/images/challenges/penguin-3.jpg'],
};

export function getCuratedBlockImageUrl(challengeId: string): string {
  const extras = CURATED_EXTRAS[challengeId] ?? [];
  const all = [`/images/challenges/${challengeId}-1.jpg`, ...extras];
  return all[Math.floor(Math.random() * all.length)];
}
