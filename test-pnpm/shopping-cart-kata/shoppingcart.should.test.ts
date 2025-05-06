import { CartItem } from './cartItem';
import { Discount } from './discount';
import { InMemoryLogger } from './logger';
import { Product } from './product';
import { InMemoryShoppingCart } from './shoppingCart';
import { TaxRate } from './taxRates';

describe('As a customer', () => {
  const iceberg = new Product('Iceberg 🥬', 1.55, 0.15, TaxRate.Normal);
  const tomato = new Product('Tomato 🍅', 0.52, 0.15, TaxRate.Normal);
  const chicken = new Product('Chicken 🍗', 1.34, 0.12, TaxRate.Normal);
  const bread = new Product('Bread 🍞', 0.71, 0.12, TaxRate.FirstNecessity);
  const corn = new Product('Corn 🌽', 1.21, 0.12, TaxRate.FirstNecessity);

  function addItemsToCart(cart: InMemoryShoppingCart) {
    cart.addItem(new CartItem(iceberg, 3));
    cart.addItem(new CartItem(tomato, 1));
    cart.addItem(new CartItem(chicken, 1));
    cart.addItem(new CartItem(bread, 2));
    cart.addItem(new CartItem(corn, 1));
  }

  test.skip('I want to add items to my shopping cart', () => {
    const logger = new InMemoryLogger();
    const cart = new InMemoryShoppingCart(logger);
    const expectedOutput = [
      '--------------------------------------------',
      '| Product name | Price with VAT | Quantity |',
      '| ------------ | -------------- | -------- |',
      '| Iceberg 🥬   | 2.17 €         | 3        |',
      '| Tomato 🍅    | 0.73 €         | 1        |',
      '| Chicken 🍗   | 1.83 €         | 1        |',
      '| Bread 🍞     | 0.89 €         | 2        |',
      '| Corn 🌽      | 1.50 €         | 1        |',
    ].join('\n');

    addItemsToCart(cart);

    cart.printShoppingCart();
    expect(logger.print()).toContain(expectedOutput);
  });

  test.skip('I want to create a promotion section for no promotions', () => {
    const logger = new InMemoryLogger();
    const cart = new InMemoryShoppingCart(logger);
    addItemsToCart(cart);
    const expectedOutput = [
      '|------------------------------------------|',
      '| Promotion:                               |',
      '--------------------------------------------',
    ].join('\n');

    cart.printShoppingCart();

    expect(logger.print()).toContain(expectedOutput);
  });

  test.skip('I want to create a promotion section for an actual promotion', () => {
    const logger = new InMemoryLogger();
    const cart = new InMemoryShoppingCart(logger);
    addItemsToCart(cart);
    const expectedOutput = [
      '|------------------------------------------|',
      '| Promotion: 10% off with code PROMO_10    |',
      '--------------------------------------------',
    ].join('\n');

    cart.applyDiscount(Discount.fromCode('PROMO_10'));
    cart.printShoppingCart();

    expect(logger.print()).toContain(expectedOutput);
  });

  test('I want a product count with final price', () => {
    const logger = new InMemoryLogger();
    const cart = new InMemoryShoppingCart(logger);
    addItemsToCart(cart);
    const expectedOutput = [
      '--------------------------------------------',
      '| Total products: 8                        |',
      '| Total price: 11.74 €                     |',
      '--------------------------------------------',
    ].join('\n');
    cart.applyDiscount(Discount.fromCode('PROMO_5'));

    cart.printShoppingCart();

    expect(logger.print()).toContain(expectedOutput);
  });

  test('I want to print an empty cart', () => {
    const logger = new InMemoryLogger();
    const cart = new InMemoryShoppingCart(logger);
    const expectedOutput = [
      '--------------------------------------------',
      '| Product name | Price with VAT | Quantity |',
      '| ------------ | -------------- | -------- |',
      '|------------------------------------------|',
      '| Promotion:                               |',
      '--------------------------------------------',
      '| Total products: 0                        |',
      '| Total price: 0.00 €                      |',
      '--------------------------------------------',
    ].join('\n');

    cart.printShoppingCart();

    expect(logger.print()).toBe(expectedOutput);
  });

  test('I want to print a full discounted list', () => {
    const logger = new InMemoryLogger();
    const cart = new InMemoryShoppingCart(logger);
    addItemsToCart(cart);
    cart.applyDiscount(Discount.fromCode('PROMO_10'));
    const expectedOutput = [
      '--------------------------------------------',
      '| Product name | Price with VAT | Quantity |',
      '| ------------ | -------------- | -------- |',
      '| Iceberg 🥬   | 2.17 €         | 3        |',
      '| Tomato 🍅    | 0.73 €         | 1        |',
      '| Chicken 🍗   | 1.83 €         | 1        |',
      '| Bread 🍞     | 0.89 €         | 2        |',
      '| Corn 🌽      | 1.50 €         | 1        |',
      '|------------------------------------------|',
      '| Promotion: 10% off with code PROMO_10    |',
      '--------------------------------------------',
      '| Total products: 8                        |',
      '| Total price: 11.12 €                     |',
      '--------------------------------------------',
    ].join('\n');

    cart.printShoppingCart();

    expect(logger.print()).toBe(expectedOutput);
  });
});
