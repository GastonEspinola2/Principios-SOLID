import { IDiscount } from "../interfaces/IDiscount";

export class StudentDiscount implements IDiscount {
  apply(amount: number): number {
    const discount = amount * 0.15; // 15% de descuento
    return amount - discount;
  }
}
