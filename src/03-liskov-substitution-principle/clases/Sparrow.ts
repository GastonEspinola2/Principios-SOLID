import { IFlyingBird } from "../interfaces/IFlyingBird";

export class Sparrow implements IFlyingBird {
  eat(): void {
    console.log("El gorrión está comiendo semillas.");
  }

  fly(): void {
    console.log("El gorrión está volando.");
  }
}
