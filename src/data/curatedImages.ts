/**
 * Curated block-style images stored in /public/images/challenges/.
 * Name files as {challenge-id}-1.jpg, {challenge-id}-2.png, etc.
 * Supports jpg and png.
 */
export const CURATED_BLOCK_IMAGES: Record<string, string[]> = {
  // Animals
  // penguin: ['/images/challenges/penguin-1.jpg'],
  // cat: ['/images/challenges/cat-1.jpg'],
  // dog: ['/images/challenges/dog-1.jpg'],
  // shark: ['/images/challenges/shark-1.jpg'],
  // owl: ['/images/challenges/owl-1.jpg'],
  // elephant: ['/images/challenges/elephant-1.jpg'],
  // giraffe: ['/images/challenges/giraffe-1.jpg'],
  // octopus: ['/images/challenges/octopus-1.jpg'],
  // turtle: ['/images/challenges/turtle-1.jpg'],
  // butterfly: ['/images/challenges/butterfly-1.jpg'],
  // crab: ['/images/challenges/crab-1.jpg'],
  // lion: ['/images/challenges/lion-1.jpg'],
  // fox: ['/images/challenges/fox-1.jpg'],
  // frog: ['/images/challenges/frog-1.jpg'],

  // Vehicles
  // car: ['/images/challenges/car-1.jpg'],
  // train: ['/images/challenges/train-1.jpg'],
  // rocket: ['/images/challenges/rocket-1.jpg'],
  // submarine: ['/images/challenges/submarine-1.jpg'],
  // helicopter: ['/images/challenges/helicopter-1.jpg'],
  // bicycle: ['/images/challenges/bicycle-1.jpg'],
  // boat: ['/images/challenges/boat-1.jpg'],
  // tractor: ['/images/challenges/tractor-1.jpg'],

  // Buildings
  // house: ['/images/challenges/house-1.jpg'],
  // castle: ['/images/challenges/castle-1.jpg'],
  // lighthouse: ['/images/challenges/lighthouse-1.jpg'],
  // bridge: ['/images/challenges/bridge-1.jpg'],
  // skyscraper: ['/images/challenges/skyscraper-1.jpg'],
  // windmill: ['/images/challenges/windmill-1.jpg'],
  // pyramid: ['/images/challenges/pyramid-1.jpg'],
  // igloo: ['/images/challenges/igloo-1.jpg'],
  // treehouse: ['/images/challenges/treehouse-1.jpg'],

  // Characters
  // knight: ['/images/challenges/knight-1.jpg'],
  // astronaut: ['/images/challenges/astronaut-1.jpg'],
  // pirate: ['/images/challenges/pirate-1.jpg'],
  // wizard: ['/images/challenges/wizard-1.jpg'],
  // robot: ['/images/challenges/robot-1.jpg'],
  // ninja: ['/images/challenges/ninja-1.jpg'],
  // chef: ['/images/challenges/chef-1.jpg'],

  // Objects & Scenes
  // guitar: ['/images/challenges/guitar-1.jpg'],
  // telescope: ['/images/challenges/telescope-1.jpg'],
  // volcano: ['/images/challenges/volcano-1.jpg'],
  // lantern: ['/images/challenges/lantern-1.jpg'],
  // 'clock-tower': ['/images/challenges/clock-tower-1.jpg'],
  // throne: ['/images/challenges/throne-1.jpg'],
  // spaceship: ['/images/challenges/spaceship-1.jpg'],
  // dragon: ['/images/challenges/dragon-1.jpg'],
  // dinosaur: ['/images/challenges/dinosaur-1.jpg'],
  // snowflake: ['/images/challenges/snowflake-1.jpg'],
  // 'ferris-wheel': ['/images/challenges/ferris-wheel-1.jpg'],
  // flower: ['/images/challenges/flower-1.jpg'],
};

export function getCuratedBlockImage(challengeId: string): string | null {
  const images = CURATED_BLOCK_IMAGES[challengeId];
  if (!images || images.length === 0) return null;
  return images[Math.floor(Math.random() * images.length)];
}
