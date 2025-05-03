import { Product } from './product';

describe('Product should', () => {
  it('calculate price per unit with revenue and rounding', () => {
    const product = new Product('Iceberg 🥬', 1.55, 0.15);
    expect(product.pricePerUnit).toBe(1.79);
  });
});
