export function getLegoImageUrl(subject: string): string {
  const prompt = `lego and building block style ${subject}, plastic brick toy photography, colorful blocks`;
  const seed = Math.floor(Math.random() * 1000000);
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=512&height=384&nologo=true&seed=${seed}&model=flux`;
}
