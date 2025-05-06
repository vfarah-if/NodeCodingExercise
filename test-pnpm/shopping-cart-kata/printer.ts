import { CartItem } from './cartItem';
import { Discount } from './discount';

export interface TablePrinter {
  printTotalPrice(items: CartItem[]): string;
  printProductCount(items: CartItem[]): string;
  printHeader(): string;
  printCartItem(item: CartItem): string;
  printPromotion(discount: Discount | null): string;
  printLineSeparator(): string;
  printHeaderFooter(): string;
}

export class InMemoryTablePrinter implements TablePrinter {
  printHeader(): string {
    return [
      '--------------------------------------------',
      '| Product name | Price with VAT | Quantity |',
      '| ------------ | -------------- | -------- |',
    ].join('\n');
  }

  printHeaderFooter(): string {
    return '|------------------------------------------|';
  }

  printCartItem(item: CartItem): string {
    const name = item.product.name.padEnd(12);
    const priceWithVat = `${item.product.finalPrice.toFixed(2)} €`.padEnd(14);
    const quantity = item.quantity.toString().padEnd(8);

    return `| ${name} | ${priceWithVat} | ${quantity} |`;
  }

  printLineSeparator(): string {
    return '--------------------------------------------';
  }

  printPromotion(discount: Discount | null): string {
    const promotionCode = discount?.code ?? '';
    const promotionDescription =
      discount != null
        ? `Promotion: ${discount?.percentage * 100}% off with code ${promotionCode}`
        : 'Promotion:';
    return [this.printHeaderFooter(), `| ${promotionDescription.padEnd(40)} |`].join('\n');
  }

  printProductCount(items: CartItem[]): string {
    const totalItems = items.reduce((total, item) => total + item.quantity, 0);
    return `| Total products: ${totalItems.toString().padEnd(24)} |`;
  }

  printTotalPrice(items: CartItem[]): string {
    const totalPrice = items.reduce((total, item) => total + item.LineTotal, 0);
    const description = `Total price: ${totalPrice.toFixed(2)} €`;
    return `| ${description.padEnd(40)} |`;
  }
}
