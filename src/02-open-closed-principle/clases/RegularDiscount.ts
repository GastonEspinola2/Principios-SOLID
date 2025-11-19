import { IDiscount } from "../interfaces/IDiscount";

export class RegularDiscount implements IDiscount {
  apply(amount: number): number {
    const discount = amount * 0.1; // 10% de descuento
    return amount - discount;
  }
}
