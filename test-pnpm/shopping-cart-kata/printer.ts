import { CartItem } from './cartItem';
import { TABLE_CONSTANTS } from './constants';
import { Discount } from './discount';

export interface TablePrinter {
  printTotalPrice(items: CartItem[], discount: Discount | null): string;
  printProductCount(items: CartItem[]): string;
  printHeader(): string;
  printCartItem(item: CartItem): string;
  printPromotion(discount: Discount | null): string;
  printLineSeparator(): string;
  printHeaderFooter(): string;
}

export class DefaultTablePrinter implements TablePrinter {
  printHeader(): string {
    return [
      this.printLineSeparator(),
      `${TABLE_CONSTANTS.SEPARATORS.VERTICAL} Product name ${TABLE_CONSTANTS.SEPARATORS.VERTICAL} Price with VAT ${TABLE_CONSTANTS.SEPARATORS.VERTICAL} Quantity ${TABLE_CONSTANTS.SEPARATORS.VERTICAL}`,
      `${TABLE_CONSTANTS.SEPARATORS.VERTICAL} ${'-'.repeat(TABLE_CONSTANTS.COLUMN_WIDTHS.NAME)} ${TABLE_CONSTANTS.SEPARATORS.VERTICAL} ${'-'.repeat(TABLE_CONSTANTS.COLUMN_WIDTHS.PRICE)} ${TABLE_CONSTANTS.SEPARATORS.VERTICAL} ${'-'.repeat(TABLE_CONSTANTS.COLUMN_WIDTHS.QUANTITY)} ${TABLE_CONSTANTS.SEPARATORS.VERTICAL}`,
    ].join('\n');
  }

  printHeaderFooter(): string {
    return `${TABLE_CONSTANTS.SEPARATORS.VERTICAL}${'-'.repeat(TABLE_CONSTANTS.LINE_WIDTH - 2)}${TABLE_CONSTANTS.SEPARATORS.VERTICAL}`;
  }

  printCartItem(item: CartItem): string {
    const name = item.product.name.padEnd(TABLE_CONSTANTS.COLUMN_WIDTHS.NAME);
    const priceWithVat =
      `${this.formatPrice(item.product.finalPrice)} ${TABLE_CONSTANTS.CURRENCY}`.padEnd(
        TABLE_CONSTANTS.COLUMN_WIDTHS.PRICE,
      );
    const quantity = item.quantity.toString().padEnd(TABLE_CONSTANTS.COLUMN_WIDTHS.QUANTITY);

    return `${TABLE_CONSTANTS.SEPARATORS.VERTICAL} ${name} ${TABLE_CONSTANTS.SEPARATORS.VERTICAL} ${priceWithVat} ${TABLE_CONSTANTS.SEPARATORS.VERTICAL} ${quantity} ${TABLE_CONSTANTS.SEPARATORS.VERTICAL}`;
  }

  printLineSeparator(): string {
    return TABLE_CONSTANTS.SEPARATORS.HORIZONTAL.repeat(TABLE_CONSTANTS.LINE_WIDTH);
  }

  printPromotion(discount: Discount | null): string {
    const promotionDescription = this.formatPromotionDescription(discount);
    return [
      this.printHeaderFooter(),
      `${TABLE_CONSTANTS.SEPARATORS.VERTICAL} ${promotionDescription.padEnd(TABLE_CONSTANTS.PADDING_WIDTH)} ${TABLE_CONSTANTS.SEPARATORS.VERTICAL}`,
    ].join('\n');
  }

  printProductCount(items: CartItem[]): string {
    const totalItems = this.calculateTotalItems(items);
    return `${TABLE_CONSTANTS.SEPARATORS.VERTICAL} Total products: ${totalItems.toString().padEnd(24)} ${TABLE_CONSTANTS.SEPARATORS.VERTICAL}`;
  }

  printTotalPrice(items: CartItem[], discount: Discount | null): string {
    const totalPrice = this.calculateTotalPrice(items);
    const discountedAmount = discount ? discount.applyTo(totalPrice) : totalPrice;
    const description = `Total price: ${this.formatPrice(discountedAmount)} ${TABLE_CONSTANTS.CURRENCY}`;

    return `${TABLE_CONSTANTS.SEPARATORS.VERTICAL} ${description.padEnd(TABLE_CONSTANTS.PADDING_WIDTH)} ${TABLE_CONSTANTS.SEPARATORS.VERTICAL}`;
  }

  private formatPromotionDescription(discount: Discount | null): string {
    if (discount == null) {
      return 'Promotion:';
    }

    const percentage = Math.round(discount.percentage * 100);
    return `Promotion: ${percentage}% off with code ${discount.code}`;
  }

  private calculateTotalItems(items: CartItem[]): number {
    return items.reduce((total, item) => total + item.quantity, 0);
  }

  private calculateTotalPrice(items: CartItem[]): number {
    return items.reduce((total, item) => total + item.LineTotal, 0);
  }

  private formatPrice(price: number): string {
    return price.toFixed(2);
  }
}
