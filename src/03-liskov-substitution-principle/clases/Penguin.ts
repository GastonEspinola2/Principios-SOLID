import { IBird } from "../interfaces/IBird";

export class Penguin implements IBird {
  eat(): void {
    console.log("El pingüino está comiendo pescado.");
  }

  swim(): void {
    console.log("El pingüino está nadando.");
  }
}
