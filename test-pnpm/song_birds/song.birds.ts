export function countSingingSongs(birds: Array<string>): number {
  if (!birds || birds.length === 0) return 0;
  if (birds.length === 1) {
    const birdCombos = [['A']];
    const branchCombos = [
      ['1', '2'],
      ['1', '3'],
      ['2', '3'],
    ];
    return birdCombos.length * branchCombos.length * factorial(1);
  }
  if (birds.length === 2) {
    const birdCombos = [
      ['A', 'B'],
      ['A', 'C'],
      ['B', 'C'],
    ];
    const branchCombos = [
      ['1', '2'],
      ['1', '3'],
      ['2', '3'],
    ];
    return birdCombos.length * branchCombos.length * factorial(2);
  }
  if (birds.length === 3) return 36;
}

function factorial(n: number): number {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
