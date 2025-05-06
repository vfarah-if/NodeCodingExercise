import { CartItem } from './cartItem';
import { Discount } from './discount';
import { Logger } from './logger';
import { InMemoryTablePrinter, TablePrinter } from './printer';

export interface ShoppingCart {
  addItem(cartItem: CartItem): void;
  applyDiscount(discount: Discount): void;
  printShoppingCart(): void;
}

export class InMemoryShoppingCart implements ShoppingCart {
  private items: CartItem[] = [];
  private discounts: Discount[] = [];
  private printer: TablePrinter = new InMemoryTablePrinter();

  constructor(private logger: Logger) {
    this.logger.log(this.printer.printHeader());
  }

  addItem(cartItem: CartItem): void {
    this.items.push(cartItem);
    this.logger.log(this.printer.printCartItem(cartItem));
  }

  applyDiscount(discount: Discount): void {
    throw new Error('Method not implemented.');
  }
  printShoppingCart(): void {
    throw new Error('Method not implemented.');
  }
}
