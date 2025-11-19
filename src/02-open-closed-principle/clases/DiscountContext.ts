import { IDiscount } from "../interfaces/IDiscount";

export class DiscountContext {
  constructor(private discountStrategy: IDiscount) {}

  setStrategy(discount: IDiscount) {
    this.discountStrategy = discount;
  }

  apply(amount: number): number {
    return this.discountStrategy.apply(amount);
  }
}
