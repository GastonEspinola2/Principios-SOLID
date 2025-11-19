export interface IDiscount {
  /**
   * Calcula el precio final aplicando el descuento a un monto base.
   */
  apply(amount: number): number;
}
