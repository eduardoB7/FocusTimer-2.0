// Logica dos botoes de controle do Timer
import { elementsHTML } from "./elementsHTML.js";

const { playAndpause, playBtn, pauseBtn } = elementsHTML;

// Logica dos botões play/pause
export class Controlls {
  constructor() {
    playAndpause.onclick = () => {
      playBtn.classList.toggle("hidden");
      this.play();
      pauseBtn.classList.toggle("hidden");
    };
  }

  play() {
    if (playBtn.classList.contains("hidden")) {
      return console.log("contador play teste");
    }
    if (!playBtn.classList.contains("hidden")) {
      return console.log("contador pause teste");
    }
  }
}

export class Timer extends Controlls {
  constructor() {
    super();
  }
}
