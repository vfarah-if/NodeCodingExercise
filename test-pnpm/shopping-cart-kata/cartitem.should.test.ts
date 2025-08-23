import { CartItem } from './cartItem';
import { Product } from './product';
import { TaxRate } from './taxRates';

describe('Adding Cart items should', () => {
  let product = new Product('Iceberg 🥬', 1.55, 0.15, TaxRate.Normal);
  
  test('calcultate the line total for one item', () => {
    const cartItem = new CartItem(product, 1);

    expect(cartItem.LineTotal).toBe(2.17);
  });

  test('calcultate the line total for multiple items', () => {
    const cartItem = new CartItem(product, 3);

    expect(cartItem.LineTotal).toBe(6.51);
  });
});
