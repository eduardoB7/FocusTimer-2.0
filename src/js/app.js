// arquivo que roda as classes e faz todo o app funcionar

import { Mode } from "./Mode.js";
import { Timer } from "./Timer.js";
export class App {
  constructor() {
    new Mode();
    new Timer();
  }
}
