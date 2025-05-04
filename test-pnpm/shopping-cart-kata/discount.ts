import { roundUp } from './utility';

export class Discount {
  readonly code: string;
  readonly percentage: number;

  private constructor(code: string, percentage: number) {
    this.code = code;
    this.percentage = percentage;
  }

  public applyTo(price: number): number {
    const discountAmount = price * this.percentage;
    const discountedPrice = price - discountAmount;
    return roundUp(discountedPrice);
  }

  static fromCode(code: string): Discount | null {
    const map: Record<string, number> = {
      PROMO_5: 0.05,
      PROMO_10: 0.1,
    };
    const value = map[code];
    return value ? new Discount(code, value) : null;
  }
}
