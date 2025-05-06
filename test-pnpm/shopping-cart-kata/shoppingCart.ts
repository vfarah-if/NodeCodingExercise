import { Discount } from './discount';
import { Product } from './product';

export interface ShoppingCart {
  addItem(product: Product): void;
  deleteItem(product: Product): void;
  applyDiscount(discount: Discount): void;
  printShoppingCart(): void;
}
