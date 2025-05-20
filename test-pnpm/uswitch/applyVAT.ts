export function applyVAT(amountInPence: number, vatRate: number): number {
  const vat = amountInPence * vatRate;
  return amountInPence + vat;
}
