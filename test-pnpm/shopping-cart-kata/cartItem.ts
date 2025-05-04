import { Product } from './product';

export class CartItem {
  constructor(
    public product: Product,
    public quantity: number,
  ) {}

  get LineTotal(): number {
    const price = this.product.finalPrice * this.quantity;
    return this.roundUp(price);
  }

  private roundUp(value: number): number {
    return Math.ceil(value * 100) / 100;
  }
}
