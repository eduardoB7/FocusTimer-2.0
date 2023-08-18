// Logica dos botoes de controle do Timer
import { elementsHTML } from "./elementsHTML.js";

const { playAndpause, playBtn, pauseBtn, stopBtn } = elementsHTML;

// Logica dos controles do timer
export class Controlls {
  constructor() {
    this.playAndpause();
    this.stop();
  }

  //   metodo que alterna o botao play/pause
  playAndpause() {
    playAndpause.onclick = () => {
      playBtn.classList.toggle("hidden");
      this.play();
      pauseBtn.classList.toggle("hidden");
    };
  }

  //   metodo que da play no timer
  play() {
    if (playBtn.classList.contains("hidden")) {
      return console.log("contador play teste");
    }
    if (!playBtn.classList.contains("hidden")) {
      return console.log("contador pause teste");
    }
  }

  //   metodos que aciona o stop do timer
  stop() {
    stopBtn.onclick = () => {
      if (!playBtn.classList.contains("hidden")) {
        console.log("stop clicado");
      } else {
        playBtn.classList.remove("hidden");
        pauseBtn.classList.add("hidden");
        console.log("timer resetado");
      }
    };
  }
}

export class Timer extends Controlls {
  constructor() {
    super();
  }
}
