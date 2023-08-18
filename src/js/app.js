// arquivo que roda as classes e faz todo o app funcionar

import { Mode } from "./Mode.js";
import { Controlls } from "./controlls.js";

// Funcionalidade do modo Ligth/Dark
export class App {
  constructor() {
    new Mode();
    new Controlls();
  }
}
