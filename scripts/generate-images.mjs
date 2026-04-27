#!/usr/bin/env node
/**
 * Generates block-style images for all 50 challenges using Pollinations.ai.
 * Free, no API key required. Requires Node.js 18+.
 *
 * Usage: node scripts/generate-images.mjs
 *
 * - Saves images to public/images/challenges/{id}.jpg
 * - Skips any that already exist
 * - Waits 3s between requests to avoid rate limiting
 */

import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, '..', 'public', 'images', 'challenges');

const CHALLENGES = [
  // Animals
  { id: 'penguin',   name: 'Penguin' },
  { id: 'cat',       name: 'Cat' },
  { id: 'dog',       name: 'Dog' },
  { id: 'shark',     name: 'Shark' },
  { id: 'owl',       name: 'Owl' },
  { id: 'elephant',  name: 'Elephant' },
  { id: 'giraffe',   name: 'Giraffe' },
  { id: 'octopus',   name: 'Octopus' },
  { id: 'turtle',    name: 'Turtle' },
  { id: 'butterfly', name: 'Butterfly' },
  { id: 'crab',      name: 'Crab' },
  { id: 'lion',      name: 'Lion' },
  { id: 'fox',       name: 'Fox' },
  { id: 'frog',      name: 'Frog' },
  // Vehicles
  { id: 'car',        name: 'Car' },
  { id: 'train',      name: 'Train' },
  { id: 'rocket',     name: 'Rocket' },
  { id: 'submarine',  name: 'Submarine' },
  { id: 'helicopter', name: 'Helicopter' },
  { id: 'bicycle',    name: 'Bicycle' },
  { id: 'boat',       name: 'Boat' },
  { id: 'tractor',    name: 'Tractor' },
  // Buildings
  { id: 'house',       name: 'House' },
  { id: 'castle',      name: 'Castle' },
  { id: 'lighthouse',  name: 'Lighthouse' },
  { id: 'bridge',      name: 'Bridge' },
  { id: 'skyscraper',  name: 'Skyscraper' },
  { id: 'windmill',    name: 'Windmill' },
  { id: 'pyramid',     name: 'Pyramid' },
  { id: 'igloo',       name: 'Igloo' },
  { id: 'treehouse',   name: 'Treehouse' },
  // Characters
  { id: 'knight',    name: 'Knight' },
  { id: 'astronaut', name: 'Astronaut' },
  { id: 'pirate',    name: 'Pirate' },
  { id: 'wizard',    name: 'Wizard' },
  { id: 'robot',     name: 'Robot' },
  { id: 'ninja',     name: 'Ninja' },
  { id: 'chef',      name: 'Chef' },
  // Objects & Scenes
  { id: 'guitar',       name: 'Guitar' },
  { id: 'telescope',    name: 'Telescope' },
  { id: 'volcano',      name: 'Volcano' },
  { id: 'lantern',      name: 'Lantern' },
  { id: 'clock-tower',  name: 'Clock Tower' },
  { id: 'throne',       name: 'Throne' },
  { id: 'spaceship',    name: 'Spaceship' },
  { id: 'dragon',       name: 'Dragon' },
  { id: 'dinosaur',     name: 'Dinosaur' },
  { id: 'snowflake',    name: 'Snowflake' },
  { id: 'ferris-wheel', name: 'Ferris Wheel' },
  { id: 'flower',       name: 'Flower' },
];

const DELAY_MS = 3000;

function buildUrl(name) {
  const prompt = `lego and building block style ${name}, plastic brick toy photography, colorful blocks`;
  const seed = Math.floor(Math.random() * 999999);
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=512&height=512&nologo=true&model=flux&seed=${seed}`;
}

async function downloadImage(url, filepath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buffer = await res.arrayBuffer();
  writeFileSync(filepath, Buffer.from(buffer));
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function main() {
  mkdirSync(OUTPUT_DIR, { recursive: true });

  const total = CHALLENGES.length;
  let done = 0;
  let skipped = 0;
  let failed = 0;

  for (const { id, name } of CHALLENGES) {
    const filepath = join(OUTPUT_DIR, `${id}.jpg`);
    done++;

    if (existsSync(filepath)) {
      console.log(`⏭  [${done}/${total}] Skipping ${id} (already exists)`);
      skipped++;
      continue;
    }

    console.log(`🧱 [${done}/${total}] Generating ${name}...`);
    try {
      await downloadImage(buildUrl(name), filepath);
      console.log(`   ✓ Saved ${id}.jpg`);
    } catch (err) {
      console.error(`   ✗ Failed ${id}: ${err.message}`);
      failed++;
    }

    if (done < total) await sleep(DELAY_MS);
  }

  console.log(`\n✅ Complete — ${total - skipped - failed} generated, ${skipped} skipped, ${failed} failed`);
  if (failed > 0) {
    console.log('   Re-run the script to retry failed images (existing files are skipped).');
  }
}

main().catch(err => { console.error(err); process.exit(1); });
