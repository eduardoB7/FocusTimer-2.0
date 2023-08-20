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
let secondsCount = parseFloat(seconds.textContent);

// Logica das funcionalidades do timer
export class Timer {
  constructor() {}

  // metodo do contador
  countdown() {
    this.timerOut = setInterval(() => {
      secondsCount--;
      if (secondsCount < 0 && minutesCount > 0) {
        secondsCount = 59;
        minutesCount--;
      }

      seconds.textContent = String(secondsCount).padStart(2, "0");
      minutes.textContent = String(minutesCount).padStart(2, "0");

      if (minutesCount === 0 && secondsCount < 0) {
        this.stopCountDown();
      }
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
    minutesCount = parseFloat(minutes.textContent);
    secondsCount = parseFloat(seconds.textContent);
    playBtn.classList.remove("hidden");
    pauseBtn.classList.add("hidden");
  }

  // Método que contem a logica de adicionar mais 5min no timer
  addCountdown() {
    let addMinute = (minutesCount += 5);
    minutes.textContent = String(addMinute).padStart(2, "0");
  }

  // Método que contem a logica de remover mais 5min no timer (Se possivel)
  removeCountdown() {
    if (minutesCount >= 5) {
      let removeMinute = (minutesCount -= 5);
      if (removeMinute >= 0) {
        minutes.textContent = String(removeMinute).padStart(2, "0");
      }
    }
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
    this.addTimer();
    this.removeTimer();
  }

  //   Método que alterna o botao play/pause
  playAndpause() {
    playAndpause.onclick = () => {
      playBtn.classList.toggle("hidden");
      pauseBtn.classList.toggle("hidden");
    };
  }

  //   Método que aciona play no timer
  play() {
    playBtn.onclick = () => {
      if (minutesCount >= 0 && secondsCount >= 0) {
        this.countdown();
      }
    };
  }

  // Método que aciona o pause o timer
  pause() {
    pauseBtn.onclick = () => {
      this.pauseCountDown();
    };
  }

  //   Método que aciona o stop do timer
  stop() {
    stopBtn.onclick = () => {
      this.stopCountDown();
      playBtn.classList.remove("hidden");
      pauseBtn.classList.add("hidden");
    };
  }

  // Método que aciona o botao de add mais 5 minutos ao timer
  addTimer() {
    addTimerBtn.onclick = () => {
      this.addCountdown();
    };
  }

  // Método que aciona o botao que remove 5 minutos do timer(se possivel)
  removeTimer() {
    subtractTimerBtn.onclick = () => {
      this.removeCountdown();
    };
  }
}
