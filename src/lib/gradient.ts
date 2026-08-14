export function hashString(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function getGradientHues(seed: string) {
  const hash = hashString(seed);
  const hue1 = 185 + (hash % 45);
  const hue2 = hue1 + 60 + (hash % 25);
  return { hue1, hue2 };
}
