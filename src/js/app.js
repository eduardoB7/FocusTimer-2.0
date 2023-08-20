// arquivo que roda as classes e faz todo o app funcionar
import { Mode } from "./Mode.js";
import { Controlls } from "./Timer.js";
import { Cards } from "./Cards.js";
export class App {
  constructor() {
    new Controlls();
    new Mode();
    new Cards();
  }
}
