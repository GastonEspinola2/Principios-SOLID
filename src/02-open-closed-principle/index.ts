import { DiscountContext } from "./clases/DiscountContext";
import { RegularDiscount } from "./clases/RegularDiscount";
import { StudentDiscount } from "./clases/StudentDiscount";
import { VipDiscount } from "./clases/VipDiscount";

export function demoDescuentosOCP(): void {
  const total = 100;
  const discountContext = new DiscountContext(new RegularDiscount());

  console.log(`Precio base: $${total}`);

  discountContext.setStrategy(new RegularDiscount());
  console.log(`Precio con cliente regular: $${discountContext.apply(total)}`);

  discountContext.setStrategy(new VipDiscount());
  console.log(`Precio con cliente VIP: $${discountContext.apply(total)}`);

  discountContext.setStrategy(new StudentDiscount());
  console.log(`Precio con cliente estudiante: $${discountContext.apply(total)}`);
}

// Ejecución de demo cuando se ejecuta este módulo directamente
demoDescuentosOCP();
