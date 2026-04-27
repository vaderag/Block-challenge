# Generate Block-Style Images — Agent Task

## Goal

Generate one block-style (plastic brick / lego aesthetic) image for each of the
50 challenges and save them into `public/images/challenges/`.

These images are displayed in the app when a user clicks "Generate a block style
idea". They are served statically from the repo so no API calls are made at
runtime.

---

## Image Requirements

| Property | Value |
|---|---|
| Style | Plastic building-block / lego brick toy photography |
| Prompt template | `lego and building block style {Name}, plastic brick toy photography, colorful blocks` |
| Format | JPG |
| Naming | `{challenge-id}.jpg` (e.g. `penguin.jpg`) |
| Size | 512 × 512 px minimum |
| Save to | `public/images/challenges/` |

---

## Challenges (50 total)

| ID | Display Name | ID | Display Name |
|---|---|---|---|
| penguin | Penguin | car | Car |
| cat | Cat | train | Train |
| dog | Dog | rocket | Rocket |
| shark | Shark | submarine | Submarine |
| owl | Owl | helicopter | Helicopter |
| elephant | Elephant | bicycle | Bicycle |
| giraffe | Giraffe | boat | Boat |
| octopus | Octopus | tractor | Tractor |
| turtle | Turtle | house | House |
| butterfly | Butterfly | castle | Castle |
| crab | Crab | lighthouse | Lighthouse |
| lion | Lion | bridge | Bridge |
| fox | Fox | skyscraper | Skyscraper |
| frog | Frog | windmill | Windmill |
| knight | Knight | pyramid | Pyramid |
| astronaut | Astronaut | igloo | Igloo |
| pirate | Pirate | treehouse | Treehouse |
| wizard | Wizard | guitar | Guitar |
| robot | Robot | telescope | Telescope |
| ninja | Ninja | volcano | Volcano |
| chef | Chef | lantern | Lantern |
| dragon | Dragon | clock-tower | Clock Tower |
| dinosaur | Dinosaur | throne | Throne |
| spaceship | Spaceship | snowflake | Snowflake |
| flower | Flower | ferris-wheel | Ferris Wheel |

---

## Method

### Option A — Pollinations (Free, no API key needed) ✅ Recommended

A ready-to-run script is included at `scripts/generate-images.mjs`.

**Requirements:** Node.js 18+

```bash
node scripts/generate-images.mjs
```

- Uses the Pollinations Flux model
- Adds a 3-second delay between requests to avoid rate limiting
- Skips any images that already exist
- Takes approximately 3–5 minutes total

---

### Option B — Nano Banana / Gemini API (Better quality, requires API key)

Use the Gemini image generation API (`gemini-3.1-flash-image-preview` model).
Requires a `GEMINI_API_KEY` environment variable set before running.

```bash
GEMINI_API_KEY=your_key_here node scripts/generate-images-gemini.mjs
```

See [Google AI Studio](https://aistudio.google.com/) to obtain a key.
Note: image generation requires billing enabled on your Google Cloud project.

---

## Steps

1. Clone the repo: `git clone https://github.com/vaderag/Block-challenge.git`
2. `cd Block-challenge`
3. Run the script: `node scripts/generate-images.mjs`
4. Review the generated images in `public/images/challenges/` — replace any that
   look wrong by deleting and re-running (the script skips existing files)
5. Commit and push:
   ```bash
   git add public/images/challenges/
   git commit -m "Add curated block-style images for all 50 challenges"
   git push
   ```
6. Mark the item complete in `TODO.md`

---

## Verification Checklist

- [ ] 50 `.jpg` files exist in `public/images/challenges/`
- [ ] Each image shows the subject in a block/brick toy style (not photographic)
- [ ] No images are broken or placeholder-sized (corrupt download)
- [ ] App loads images correctly when "Generate a block style idea" is clicked

---

## Notes

- The app tries `{id}.jpg` before `{id}-1.jpg` so the plain naming convention
  used by the script is correct
- If an image is missing or fails to load, the app falls back to Pollinations
  then Unsplash automatically — nothing breaks
- To add a second image for a challenge later, add it to `CURATED_EXTRAS` in
  `src/data/curatedImages.ts`
