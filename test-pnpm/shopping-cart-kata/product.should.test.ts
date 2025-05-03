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
      cost: 0.52,
      revenueMargin: 0.15,
      expected: 0.6,
    },
    {
      name: 'Chicken 🍗',
      cost: 1.34,
      revenueMargin: 0.12,
      expected: 1.51,
    },
    {
      name: 'Bread 🍞',
      cost: 0.71,
      revenueMargin: 0.12,
      expected: 0.8,
    },
    {
      name: 'Corn 🌽',
      cost: 1.21,
      revenueMargin: 0.12,
      expected: 1.36,
    },
  ])(
    'calculate price per unit for $name to be $expected',
    ({ name, cost, revenueMargin, expected }) => {
      const product = new Product(name, cost, revenueMargin);
      expect(product.pricePerUnit).toBe(expected);
    },
  );
});
