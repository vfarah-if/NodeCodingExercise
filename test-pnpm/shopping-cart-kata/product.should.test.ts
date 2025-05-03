import { Product } from './product';

describe('Product should', () => {
  test.each([
    {
      name: 'Iceberg 🥬',
      cost: 1.55,
      revenueMargin: 0.15,
      expected: 1.79,
    },
    {
      name: 'Tomato 🍅',
      cost: 2.5,
      revenueMargin: 0.2,
      expected: 3,
    },
  ])(
    'calculate price per unit for $name to be $expected',
    ({ name, cost, revenueMargin, expected }) => {
      const product = new Product(name, cost, revenueMargin);
      expect(product.pricePerUnit).toBe(expected);
    },
  );
});
