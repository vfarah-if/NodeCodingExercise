export class Product {
  constructor(
    public name: string,
    public cost: number,
    public revenueMargin: number,
    public taxRate: number = 0,
  ) {}

  get pricePerUnit(): number {
    const price = this.cost * (1 + this.revenueMargin);
    return this.roundUp(price);
  }

  get finalPrice(): number {
    const price = this.pricePerUnit * (1 + this.taxRate);
    return this.roundUp(price);
  }

  private roundUp(value: number): number {
    return Math.ceil(value * 100) / 100;
  }
}
