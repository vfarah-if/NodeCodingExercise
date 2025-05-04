export class Discount {
  readonly code: string;
  readonly percentage: number;

  private constructor(code: string, percentage: number) {
    this.code = code;
    this.percentage = percentage;
  }

  static fromCode(code: string): Discount | null {
    const map: Record<string, number> = {
      PROMO_5: 0.05,
    };
    const value = map[code];
    return value ? new Discount(code, value) : null;
  }
}
