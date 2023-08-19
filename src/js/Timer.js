// Logica dos botoes de controle do Timer
import { elementsHTML } from "./elementsHTML.js";

// Elementos necessarios no controle/timer
const {
  playAndpause,
  playBtn,
  pauseBtn,
  stopBtn,
  addTimerBtn,
  subtractTimerBtn,
  minutes,
  seconds,
} = elementsHTML;
let minutesCount = parseFloat(minutes.textContent);

// Logica das funcionalidades do timer
export class Timer {
  constructor() {}
  // metodo do contador
  countdown() {
    let secondsCount = parseFloat(seconds.textContent);
    const timerOut = setInterval(() => {
      secondsCount--;
      if (secondsCount < 0) {
        secondsCount = 59;
        minutesCount--;
      }
      seconds.textContent = String(secondsCount).padStart(2, "0");
      minutes.textContent = String(minutesCount).padStart(2, "0");
    }, 1000);
  }
}

// logica dos controles do Timer
export class Controlls extends Timer {
  constructor() {
    super();
    this.play();
  }

  //   metodo que alterna o botao play/pause
  playAndpause() {}

  //   metodo que da play no timer
  play() {
    playBtn.onclick = () => {
      this.countdown();
    };
  }

  //   metodos que aciona o stop do timer
  stop() {}
}
