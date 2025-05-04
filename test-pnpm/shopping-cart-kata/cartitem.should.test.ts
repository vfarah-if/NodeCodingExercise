import { Product } from './product';
import { TaxRate } from './TaxRate';

describe('Adding Cart items should', () => {
  let product = new Product('Iceberg 🥬', 1.55, 0.15, TaxRate.Normal);
  test('calcultate the line total for one item', () => {
    const cartItem = new CartItem(product, 1);
    const expected = 2.17;

    expect(cartItem.LineTotal).toBe(expected);
  });
});
