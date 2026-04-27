export function getLegoImageUrl(subject: string): string {
  const prompt = `plastic building block built ${subject}, toy photography, colorful plastic bricks`;
  const seed = Math.floor(Math.random() * 1000000);
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=512&height=384&nologo=true&seed=${seed}&model=flux`;
}
