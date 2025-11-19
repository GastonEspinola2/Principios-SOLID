import { IDiscount } from "../interfaces/IDiscount";

export class VipDiscount implements IDiscount {
  apply(amount: number): number {
    const discount = amount * 0.2; // 20% de descuento
    return amount - discount;
  }
}
