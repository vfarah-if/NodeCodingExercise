import { roundUp } from './utility';

export class Product {
  constructor(
    public name: string,
    public cost: number,
    public revenueMargin: number,
    public taxRate: number = 0,
  ) {}

  get pricePerUnit(): number {
    const price = this.cost * (1 + this.revenueMargin);
    return roundUp(price);
  }

  get finalPrice(): number {
    const price = this.pricePerUnit * (1 + this.taxRate);
    return roundUp(price);
  }
}
