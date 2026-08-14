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
  const hue1 = 8 + (hash % 22);
  const hue2 = hue1 + 12 + (hash % 18);
  return { hue1, hue2 };
}
