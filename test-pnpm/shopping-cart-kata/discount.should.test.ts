import { Discount } from './discount';

describe('Discount should', () => {
  it('be created from a valid discount code', () => {
    const discount = Discount.fromCode('PROMO_5');

    expect(discount.code).toBe('PROMO_5');
    expect(discount.percentage).toBe(0.05);
  });

  it('return null for an unknown code', () => {
    const discount = Discount.fromCode('INVALID');

    expect(discount).toBeNull();
  });

  it('calculate a discount from a price', () => {
    const discount = Discount.fromCode('PROMO_10')!;
    expect(discount.applyTo(100)).toBe(90);
  });
});
