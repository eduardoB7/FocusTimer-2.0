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
    this.timerOut = setInterval(() => {
      secondsCount--;
      if (secondsCount < 0) {
        secondsCount = 59;
        minutesCount--;
      }
      seconds.textContent = String(secondsCount).padStart(2, "0");
      minutes.textContent = String(minutesCount).padStart(2, "0");
    }, 1000);
  }

  // Método para pausar o contador
  pauseCountDown() {
    clearInterval(this.timerOut);
  }

  // Método para parar(stop) o contador
  stopCountDown() {
    this.resetCountdown();
    clearInterval(this.timerOut);
  }

  // Método que reseta os valores do contador
  resetCountdown() {
    seconds.textContent = "00";
    minutes.textContent = "25";
  }
}

// logica dos controles do Timer
export class Controlls extends Timer {
  constructor() {
    super();
    this.playAndpause();
    this.play();
    this.pause();
    this.stop();
  }

  //   metodo que alterna o botao play/pause
  playAndpause() {
    playAndpause.onclick = () => {
      playBtn.classList.toggle("hidden");
      pauseBtn.classList.toggle("hidden");
    };
  }

  //   metodo que da play no timer
  play() {
    playBtn.onclick = () => {
      this.countdown();
    };
  }

  pause() {
    pauseBtn.onclick = () => {
      this.pauseCountDown();
    };
  }

  //   metodos que aciona o stop do timer
  stop() {
    stopBtn.onclick = () => {
      if (playBtn.classList.contains("hidden")) {
        this.stopCountDown();
        playBtn.classList.remove("hidden");
        pauseBtn.classList.add("hidden");
      }
    };
  }
}
