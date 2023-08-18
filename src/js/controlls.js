// Logica dos botoes de controle do Timer
import { elementsHTML } from "./elementsHTML.js";

const {
  playAndpause,
  playBtn,
  pauseBtn,
  stopBtn,
  addTimerBtn,
  subtractTimerBtn,
} = elementsHTML;

export class Controlls {
  constructor() {
    playAndpause.onclick = () => {
      playBtn.classList.toggle("hidden");
      pauseBtn.classList.toggle("hidden");
    };
  }
}
