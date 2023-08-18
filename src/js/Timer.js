// Logica dos botoes de controle do Timer
import { elementsHTML } from "./elementsHTML.js";

const { playAndpause, playBtn, pauseBtn } = elementsHTML;

// Logica dos botões play/pause
export class Controlls {
  constructor() {
    playAndpause.onclick = () => {
      playBtn.classList.toggle("hidden");
      pauseBtn.classList.toggle("hidden");
    };
  }
}

export class Timer extends Controlls {
  constructor() {
    super();
  }
}
