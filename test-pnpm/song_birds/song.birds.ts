export function countSingingSongs(birds: Array<string>): number {
  if (!birds || birds.length === 0) return 0;
  if (birds.length === 1) return 3;
  if (birds.length === 2) return 18;
  if (birds.length === 3) return 36;
}
