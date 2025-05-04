import { Product } from './product';
import { roundUp } from './utility';

export class CartItem {
  constructor(
    public product: Product,
    public quantity: number,
  ) {}

  get LineTotal(): number {
    const price = this.product.finalPrice * this.quantity;
    return roundUp(price);
  }
}
