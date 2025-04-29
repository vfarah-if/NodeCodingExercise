export function sum(...values: Array<number>): number {
  return values.reduce((acc, value) => acc + value, 0);
}
