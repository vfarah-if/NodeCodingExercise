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

  constructor(private logger: Logger) {}

  addItem(cartItem: CartItem): void {
    this.items.push(cartItem);
  }

  applyDiscount(discount: Discount | null): void {
    if (discount) {
      this.discounts.push(discount);
    }
  }

  printShoppingCart(): void {
    this.logger.clear();
    this.printCartItems();
    this.printDiscounts();
  }

  private printCartItems(): void {
    this.logger.log(this.printer.printHeader());
    this.items.forEach((cartItem) => {
      this.logger.log(this.printer.printCartItem(cartItem));
    });
  }

  private printDiscounts(): void {
    if (this.discounts.length > 0) {
      this.discounts.forEach((discount) => {
        this.logger.log(this.printer.printPromotion(discount));
      });
    } else {
      this.logger.log(this.printer.printPromotion(null));
    }
    this.logger.log(this.printer.printLineSeparator());
  }
}
