import { CartItem } from './cartItem';

export interface TablePrinter {
  printHeader(): string;
  printCartItem(item: CartItem): string;
  printLineSeparator(): string;
}

export class InMemoryTablePrinter implements TablePrinter {
  printHeader(): string {
    return [
      '--------------------------------------------',
      '| Product name | Price with VAT | Quantity |',
      '| ------------ | -------------- | -------- |',
    ].join('\n');
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
}
