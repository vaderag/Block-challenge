import type { Challenge } from '../types';

export const CHALLENGES: Challenge[] = [
  // Animals
  { id: 'penguin', simple: 'Penguin', complicated: 'Robot Penguin', searchTerm: 'penguin', complicatedSearchTerm: 'robot penguin toy' },
  { id: 'cat', simple: 'Cat', complicated: 'Space Cat', searchTerm: 'cat', complicatedSearchTerm: 'cat astronaut space suit' },
  { id: 'dog', simple: 'Dog', complicated: 'Superhero Dog', searchTerm: 'dog', complicatedSearchTerm: 'dog superhero costume' },
  { id: 'shark', simple: 'Shark', complicated: 'Laser Shark', searchTerm: 'shark', complicatedSearchTerm: 'shark submarine underwater' },
  { id: 'owl', simple: 'Owl', complicated: 'Wizard Owl', searchTerm: 'owl', complicatedSearchTerm: 'owl wizard hat magic' },
  { id: 'elephant', simple: 'Elephant', complicated: 'Mecha Elephant', searchTerm: 'elephant', complicatedSearchTerm: 'elephant robot mecha armour' },
  { id: 'giraffe', simple: 'Giraffe', complicated: 'Giraffe Tower', searchTerm: 'giraffe', complicatedSearchTerm: 'giraffe tall tower neck' },
  { id: 'octopus', simple: 'Octopus', complicated: 'Pirate Octopus', searchTerm: 'octopus', complicatedSearchTerm: 'octopus pirate ship sea' },
  { id: 'turtle', simple: 'Turtle', complicated: 'Ninja Turtle', searchTerm: 'turtle', complicatedSearchTerm: 'ninja turtle shell' },
  { id: 'butterfly', simple: 'Butterfly', complicated: 'Cyber Butterfly', searchTerm: 'butterfly', complicatedSearchTerm: 'butterfly colourful wings macro' },
  { id: 'crab', simple: 'Crab', complicated: 'Armoured Crab', searchTerm: 'crab', complicatedSearchTerm: 'crab armour claws battle' },
  { id: 'lion', simple: 'Lion', complicated: 'King Lion Throne', searchTerm: 'lion', complicatedSearchTerm: 'lion king throne crown' },
  { id: 'fox', simple: 'Fox', complicated: 'Arctic Fox', searchTerm: 'fox', complicatedSearchTerm: 'arctic fox snow white' },
  { id: 'frog', simple: 'Frog', complicated: 'Rocket Frog', searchTerm: 'frog', complicatedSearchTerm: 'frog rocket launch' },

  // Vehicles
  { id: 'car', simple: 'Car', complicated: 'Flying Car', searchTerm: 'car', complicatedSearchTerm: 'flying car wings futuristic' },
  { id: 'train', simple: 'Train', complicated: 'Time-Travel Train', searchTerm: 'train', complicatedSearchTerm: 'steam train vintage locomotive' },
  { id: 'rocket', simple: 'Rocket', complicated: 'Moon Base Rocket', searchTerm: 'rocket launch', complicatedSearchTerm: 'rocket moon base space' },
  { id: 'submarine', simple: 'Submarine', complicated: 'Deep Sea Submarine', searchTerm: 'submarine', complicatedSearchTerm: 'submarine deep sea underwater' },
  { id: 'helicopter', simple: 'Helicopter', complicated: 'Combat Helicopter', searchTerm: 'helicopter', complicatedSearchTerm: 'helicopter rescue mission' },
  { id: 'bicycle', simple: 'Bicycle', complicated: 'Robot Bicycle', searchTerm: 'bicycle', complicatedSearchTerm: 'bicycle robot futuristic rider' },
  { id: 'boat', simple: 'Boat', complicated: 'Pirate Ship', searchTerm: 'boat', complicatedSearchTerm: 'pirate ship sails sea' },
  { id: 'tractor', simple: 'Tractor', complicated: 'Giant Farm Tractor', searchTerm: 'tractor', complicatedSearchTerm: 'tractor farm field large' },

  // Buildings
  { id: 'house', simple: 'House', complicated: 'Haunted House', searchTerm: 'house', complicatedSearchTerm: 'haunted house spooky ghost' },
  { id: 'castle', simple: 'Castle', complicated: 'Underwater Castle', searchTerm: 'castle', complicatedSearchTerm: 'underwater castle ruins ocean' },
  { id: 'lighthouse', simple: 'Lighthouse', complicated: 'Space Lighthouse', searchTerm: 'lighthouse', complicatedSearchTerm: 'lighthouse tower coast' },
  { id: 'bridge', simple: 'Bridge', complicated: 'Dragon Bridge', searchTerm: 'bridge', complicatedSearchTerm: 'bridge dragon fantasy' },
  { id: 'skyscraper', simple: 'Skyscraper', complicated: 'Future City Tower', searchTerm: 'skyscraper', complicatedSearchTerm: 'futuristic city tower skyline' },
  { id: 'windmill', simple: 'Windmill', complicated: 'Steampunk Windmill', searchTerm: 'windmill', complicatedSearchTerm: 'steampunk windmill gears' },
  { id: 'pyramid', simple: 'Pyramid', complicated: 'Pyramid with Traps', searchTerm: 'pyramid egypt', complicatedSearchTerm: 'pyramid egypt ancient traps' },
  { id: 'igloo', simple: 'Igloo', complicated: 'Polar Research Station', searchTerm: 'igloo', complicatedSearchTerm: 'polar research station arctic base' },
  { id: 'treehouse', simple: 'Treehouse', complicated: 'Multi-Level Treehouse', searchTerm: 'treehouse', complicatedSearchTerm: 'treehouse multi-level tree' },

  // Characters
  { id: 'knight', simple: 'Knight', complicated: 'Dragon-Slayer Knight', searchTerm: 'medieval knight armour', complicatedSearchTerm: 'knight dragon battle medieval' },
  { id: 'astronaut', simple: 'Astronaut', complicated: 'Astronaut on Moon', searchTerm: 'astronaut', complicatedSearchTerm: 'astronaut moon surface space' },
  { id: 'pirate', simple: 'Pirate', complicated: 'Pirate Captain & Crew', searchTerm: 'pirate', complicatedSearchTerm: 'pirate captain crew ship' },
  { id: 'wizard', simple: 'Wizard', complicated: 'Wizard Tower', searchTerm: 'wizard', complicatedSearchTerm: 'wizard tower magic spells' },
  { id: 'robot', simple: 'Robot', complicated: 'Giant Battle Robot', searchTerm: 'robot', complicatedSearchTerm: 'giant battle robot mech' },
  { id: 'ninja', simple: 'Ninja', complicated: 'Ninja Fortress', searchTerm: 'ninja', complicatedSearchTerm: 'ninja fortress dojo' },
  { id: 'chef', simple: 'Chef', complicated: 'Chef with Kitchen', searchTerm: 'chef cook', complicatedSearchTerm: 'chef kitchen restaurant cooking' },

  // Objects & Scenes
  { id: 'guitar', simple: 'Guitar', complicated: 'Rock Stage with Guitar', searchTerm: 'guitar music', complicatedSearchTerm: 'guitar stage concert rock' },
  { id: 'telescope', simple: 'Telescope', complicated: 'Space Observatory', searchTerm: 'telescope', complicatedSearchTerm: 'telescope observatory space stars' },
  { id: 'volcano', simple: 'Volcano', complicated: 'Erupting Volcano Base', searchTerm: 'volcano', complicatedSearchTerm: 'volcano erupting lava' },
  { id: 'lantern', simple: 'Lantern', complicated: 'Lantern Festival Scene', searchTerm: 'lantern', complicatedSearchTerm: 'lantern festival light sky' },
  { id: 'clock-tower', simple: 'Clock Tower', complicated: 'Clock Tower with Bells', searchTerm: 'clock tower', complicatedSearchTerm: 'clock tower big ben bells' },
  { id: 'throne', simple: 'Throne', complicated: 'Dragon Throne Room', searchTerm: 'throne', complicatedSearchTerm: 'throne room dragon king fantasy' },
  { id: 'spaceship', simple: 'Spaceship', complicated: 'Battle Cruiser', searchTerm: 'spaceship', complicatedSearchTerm: 'battle cruiser starship space' },
  { id: 'dragon', simple: 'Dragon', complicated: 'Flying Fire Dragon', searchTerm: 'dragon', complicatedSearchTerm: 'dragon fire flying fantasy' },
  { id: 'dinosaur', simple: 'Dinosaur', complicated: 'T-Rex Attack Scene', searchTerm: 'dinosaur', complicatedSearchTerm: 't-rex dinosaur attack scene' },
  { id: 'snowflake', simple: 'Snowflake', complicated: 'Ice Crystal Palace', searchTerm: 'snowflake ice crystal', complicatedSearchTerm: 'ice crystal palace frozen' },
  { id: 'ferris-wheel', simple: 'Ferris Wheel', complicated: 'Full Fairground', searchTerm: 'ferris wheel', complicatedSearchTerm: 'fairground amusement park rides' },
  { id: 'flower', simple: 'Flower', complicated: 'Flower Garden', searchTerm: 'flower', complicatedSearchTerm: 'flower garden botanical colourful' },
];

export function getRandomChallenge(excludeId?: string): Challenge {
  const pool = excludeId ? CHALLENGES.filter(c => c.id !== excludeId) : CHALLENGES;
  return pool[Math.floor(Math.random() * pool.length)];
}
