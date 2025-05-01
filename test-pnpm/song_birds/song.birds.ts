export function countUniqueSongs(birds: Array<string>): number {
  if (!birds || birds.length === 0) return 0;
  if (birds.length === 1) {
    const birdCombos = [['A']]; // 1 bird
    const branchCombos = [['1'], ['2'], ['3']]; // each possible branch
    return birdCombos.length * branchCombos.length; // 1 * 3 = 3
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
  if (birds.length === 3) {
    const permutationsOfBirds = [
      ['A', 'B', 'C'],
      ['A', 'C', 'B'],
      ['B', 'A', 'C'],
      ['B', 'C', 'A'],
      ['C', 'A', 'B'],
      ['C', 'B', 'A'],
    ];
    const permutationsOfBranches = [
      ['1', '2', '3'],
      ['1', '3', '2'],
      ['2', '1', '3'],
      ['2', '3', '1'],
      ['3', '1', '2'],
      ['3', '2', '1'],
    ];
    return permutationsOfBirds.length * permutationsOfBranches.length;
  }
}

function factorial(n: number): number {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
