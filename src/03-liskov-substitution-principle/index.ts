import { Penguin } from "./clases/Penguin";
import { Sparrow } from "./clases/Sparrow";

export function demoLiskov(): void {
  // Podemos usar gorriones allí donde se espere un ave voladora.
  const flyingBirds = [new Sparrow()];
  flyingBirds.forEach((bird) => {
    bird.eat();
    bird.fly();
  });

  // Los pingüinos no vuelan, pero siguen cumpliendo el contrato de ave.
  const penguins = [new Penguin()];
  penguins.forEach((penguin) => {
    penguin.eat();
    penguin.swim();
  });
}

// Ejecución de demo cuando se ejecuta el módulo directamente
demoLiskov();
