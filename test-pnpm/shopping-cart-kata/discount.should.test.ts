describe('Discount should', () => {
  it('be created from a valid discount code', () => {
    const discount = Discount.fromCode('PROMO_5');
    expect(discount.code).toBe('PROMO_5');
    expect(discount.percentage).toBe(0.05);
  });
});
