export function countUniqueSongs(birds: Array<string>): number {
  if (!birds || birds.length === 0) return 0;

  const BRANCH_COUNT = 3;
  const birdCount = birds.length;

  const songCalculator = {
    1: () => BRANCH_COUNT, // One bird can perch on any of the 3 branches
    2: () => {
      const birdCombinations = 3; // Number of ways to choose 2 birds from the set
      const branchCombinations = 3; // Number of ways to choose 2 branches from 3
      const birdPermutations = factorial(2); // Number of ways to arrange 2 birds
      return birdCombinations * branchCombinations * birdPermutations; // 3 * 3 * 2 = 18
    },
    3: () => {
      const birdPermutations = factorial(3); // Number of ways to arrange 3 birds
      const branchPermutations = factorial(3); // Number of ways to arrange 3 branches
      return birdPermutations * branchPermutations; // 6 * 6 = 36
    },
  };

  return songCalculator[birdCount] ? songCalculator[birdCount]() : 0;
}

function factorial(n: number): number {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
