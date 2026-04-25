import type { Challenge } from '../types';

export const CHALLENGES: Challenge[] = [
  // Animals
  { id: 'penguin', simple: 'Penguin', complicated: 'Robot Penguin', searchTerm: 'lego penguin', complicatedSearchTerm: 'lego robot penguin' },
  { id: 'cat', simple: 'Cat', complicated: 'Space Cat', searchTerm: 'lego cat', complicatedSearchTerm: 'lego space cat astronaut' },
  { id: 'dog', simple: 'Dog', complicated: 'Superhero Dog', searchTerm: 'lego dog', complicatedSearchTerm: 'lego superhero dog' },
  { id: 'shark', simple: 'Shark', complicated: 'Laser Shark', searchTerm: 'lego shark', complicatedSearchTerm: 'lego shark submarine' },
  { id: 'owl', simple: 'Owl', complicated: 'Wizard Owl', searchTerm: 'lego owl', complicatedSearchTerm: 'lego wizard owl' },
  { id: 'elephant', simple: 'Elephant', complicated: 'Mecha Elephant', searchTerm: 'lego elephant', complicatedSearchTerm: 'lego mecha elephant robot' },
  { id: 'giraffe', simple: 'Giraffe', complicated: 'Giraffe Tower', searchTerm: 'lego giraffe', complicatedSearchTerm: 'lego giraffe tall tower' },
  { id: 'octopus', simple: 'Octopus', complicated: 'Pirate Octopus', searchTerm: 'lego octopus', complicatedSearchTerm: 'lego octopus pirate' },
  { id: 'turtle', simple: 'Turtle', complicated: 'Ninja Turtle', searchTerm: 'lego turtle', complicatedSearchTerm: 'lego ninja turtle' },
  { id: 'butterfly', simple: 'Butterfly', complicated: 'Cyber Butterfly', searchTerm: 'lego butterfly', complicatedSearchTerm: 'lego butterfly colorful' },
  { id: 'crab', simple: 'Crab', complicated: 'Armoured Crab', searchTerm: 'lego crab', complicatedSearchTerm: 'lego crab armour battle' },
  { id: 'lion', simple: 'Lion', complicated: 'King Lion Throne', searchTerm: 'lego lion', complicatedSearchTerm: 'lego lion king throne' },
  { id: 'fox', simple: 'Fox', complicated: 'Arctic Fox', searchTerm: 'lego fox', complicatedSearchTerm: 'lego fox arctic snow' },
  { id: 'frog', simple: 'Frog', complicated: 'Rocket Frog', searchTerm: 'lego frog', complicatedSearchTerm: 'lego frog rocket' },

  // Vehicles
  { id: 'car', simple: 'Car', complicated: 'Flying Car', searchTerm: 'lego car', complicatedSearchTerm: 'lego flying car wings' },
  { id: 'train', simple: 'Train', complicated: 'Time-Travel Train', searchTerm: 'lego train', complicatedSearchTerm: 'lego train steam vintage' },
  { id: 'rocket', simple: 'Rocket', complicated: 'Moon Base Rocket', searchTerm: 'lego rocket', complicatedSearchTerm: 'lego rocket moon base' },
  { id: 'submarine', simple: 'Submarine', complicated: 'Deep Sea Submarine', searchTerm: 'lego submarine', complicatedSearchTerm: 'lego submarine underwater' },
  { id: 'helicopter', simple: 'Helicopter', complicated: 'Combat Helicopter', searchTerm: 'lego helicopter', complicatedSearchTerm: 'lego helicopter rescue' },
  { id: 'bicycle', simple: 'Bicycle', complicated: 'Robot Bicycle', searchTerm: 'lego bicycle', complicatedSearchTerm: 'lego bicycle robot rider' },
  { id: 'boat', simple: 'Boat', complicated: 'Pirate Ship', searchTerm: 'lego boat', complicatedSearchTerm: 'lego pirate ship sail' },
  { id: 'tractor', simple: 'Tractor', complicated: 'Giant Farm Tractor', searchTerm: 'lego tractor', complicatedSearchTerm: 'lego tractor farm' },

  // Buildings
  { id: 'house', simple: 'House', complicated: 'Haunted House', searchTerm: 'lego house', complicatedSearchTerm: 'lego haunted house ghost' },
  { id: 'castle', simple: 'Castle', complicated: 'Underwater Castle', searchTerm: 'lego castle', complicatedSearchTerm: 'lego underwater castle' },
  { id: 'lighthouse', simple: 'Lighthouse', complicated: 'Space Lighthouse', searchTerm: 'lego lighthouse', complicatedSearchTerm: 'lego lighthouse tower' },
  { id: 'bridge', simple: 'Bridge', complicated: 'Dragon Bridge', searchTerm: 'lego bridge', complicatedSearchTerm: 'lego bridge dragon' },
  { id: 'skyscraper', simple: 'Skyscraper', complicated: 'Future City Tower', searchTerm: 'lego skyscraper', complicatedSearchTerm: 'lego skyscraper city' },
  { id: 'windmill', simple: 'Windmill', complicated: 'Steampunk Windmill', searchTerm: 'lego windmill', complicatedSearchTerm: 'lego windmill steampunk' },
  { id: 'pyramid', simple: 'Pyramid', complicated: 'Pyramid with Traps', searchTerm: 'lego pyramid', complicatedSearchTerm: 'lego pyramid egypt ancient' },
  { id: 'igloo', simple: 'Igloo', complicated: 'Polar Research Station', searchTerm: 'lego igloo', complicatedSearchTerm: 'lego igloo arctic base' },
  { id: 'treehouse', simple: 'Treehouse', complicated: 'Multi-Level Treehouse', searchTerm: 'lego treehouse', complicatedSearchTerm: 'lego treehouse tree build' },

  // Characters
  { id: 'knight', simple: 'Knight', complicated: 'Dragon-Slayer Knight', searchTerm: 'lego knight', complicatedSearchTerm: 'lego knight dragon battle' },
  { id: 'astronaut', simple: 'Astronaut', complicated: 'Astronaut on Moon', searchTerm: 'lego astronaut', complicatedSearchTerm: 'lego astronaut moon space' },
  { id: 'pirate', simple: 'Pirate', complicated: 'Pirate Captain & Crew', searchTerm: 'lego pirate', complicatedSearchTerm: 'lego pirate captain crew' },
  { id: 'wizard', simple: 'Wizard', complicated: 'Wizard Tower', searchTerm: 'lego wizard', complicatedSearchTerm: 'lego wizard tower magic' },
  { id: 'robot', simple: 'Robot', complicated: 'Giant Battle Robot', searchTerm: 'lego robot', complicatedSearchTerm: 'lego giant robot battle mech' },
  { id: 'ninja', simple: 'Ninja', complicated: 'Ninja Fortress', searchTerm: 'lego ninja', complicatedSearchTerm: 'lego ninja fortress dojo' },
  { id: 'chef', simple: 'Chef', complicated: 'Chef with Kitchen', searchTerm: 'lego chef cook', complicatedSearchTerm: 'lego chef kitchen restaurant' },

  // Objects & Scenes
  { id: 'guitar', simple: 'Guitar', complicated: 'Rock Stage with Guitar', searchTerm: 'lego guitar music', complicatedSearchTerm: 'lego guitar stage concert' },
  { id: 'telescope', simple: 'Telescope', complicated: 'Space Observatory', searchTerm: 'lego telescope', complicatedSearchTerm: 'lego telescope observatory space' },
  { id: 'volcano', simple: 'Volcano', complicated: 'Erupting Volcano Base', searchTerm: 'lego volcano', complicatedSearchTerm: 'lego volcano erupting lava' },
  { id: 'lantern', simple: 'Lantern', complicated: 'Lantern Festival Scene', searchTerm: 'lego lantern', complicatedSearchTerm: 'lego lantern festival light' },
  { id: 'clock-tower', simple: 'Clock Tower', complicated: 'Clock Tower with Bells', searchTerm: 'lego clock tower', complicatedSearchTerm: 'lego clock tower big ben' },
  { id: 'throne', simple: 'Throne', complicated: 'Dragon Throne Room', searchTerm: 'lego throne', complicatedSearchTerm: 'lego throne room dragon king' },
  { id: 'spaceship', simple: 'Spaceship', complicated: 'Battle Cruiser', searchTerm: 'lego spaceship', complicatedSearchTerm: 'lego battle cruiser starship' },
  { id: 'dragon', simple: 'Dragon', complicated: 'Flying Fire Dragon', searchTerm: 'lego dragon', complicatedSearchTerm: 'lego dragon fire flying' },
  { id: 'dinosaur', simple: 'Dinosaur', complicated: 'T-Rex Attack Scene', searchTerm: 'lego dinosaur', complicatedSearchTerm: 'lego t-rex dinosaur attack' },
  { id: 'snowflake', simple: 'Snowflake', complicated: 'Ice Crystal Palace', searchTerm: 'lego snowflake ice', complicatedSearchTerm: 'lego ice crystal palace frozen' },
  { id: 'ferris-wheel', simple: 'Ferris Wheel', complicated: 'Full Fairground', searchTerm: 'lego ferris wheel', complicatedSearchTerm: 'lego fairground amusement park' },
  { id: 'flower', simple: 'Flower', complicated: 'Flower Garden', searchTerm: 'lego flower', complicatedSearchTerm: 'lego flower garden botanical' },
];

export function getRandomChallenge(excludeId?: string): Challenge {
  const pool = excludeId ? CHALLENGES.filter(c => c.id !== excludeId) : CHALLENGES;
  return pool[Math.floor(Math.random() * pool.length)];
}
