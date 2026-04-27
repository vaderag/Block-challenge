/**
 * Returns candidate curated image URLs to try in order for a given challenge.
 * Supports both numbered ({id}-1.jpg) and unnumbered ({id}.jpg) naming, jpg and png.
 * The component tries each in sequence and falls back to Pollinations if none exist.
 *
 * For challenges with multiple images, list extras here for random selection:
 */
export const CURATED_EXTRAS: Record<string, string[]> = {
  // penguin: ['/images/challenges/penguin-2.jpg', '/images/challenges/penguin-3.jpg'],
};

export function getCuratedBlockImageCandidates(challengeId: string): string[] {
  const base = [
    `/images/challenges/${challengeId}-1.jpg`,
    `/images/challenges/${challengeId}.jpg`,
    `/images/challenges/${challengeId}-1.png`,
    `/images/challenges/${challengeId}.png`,
  ];
  const extras = CURATED_EXTRAS[challengeId] ?? [];
  return [...base, ...extras];
}
