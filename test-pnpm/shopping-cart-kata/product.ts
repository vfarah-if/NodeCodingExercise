export class Product {
  constructor(
    public name: string,
    public cost: number,
    public revenueMargin: number,
  ) {}

  get pricePerUnit(): number {
    const price = this.cost * (1 + this.revenueMargin);
    return this.roundUp(price);
  }

  private roundUp(value: number): number {
    return Math.ceil(value * 100) / 100;
  }
}
