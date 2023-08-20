// Esse arquivo contem toda a logica dos arquivos de audio presentes no app

// Função que contem o som do clicar dos botões (play, pause e stop)
export function SoundsBtnPress() {
  const BtnSound = new Audio("./sounds/button-press.wav");
  return BtnSound.play();
}

// Função que contem o som de alarme que toca quando o contador zera
export function SoundFinishTimer() {
  const finishSound = new Audio("./sounds/kichen-timer.mp3");
  return finishSound.play();
}

export class CardsSounds {
  constructor() {
    this.CardflorestSound = new Audio("./sounds/Floresta.wav");
    this.CardRainSound = new Audio("./sounds/Chuva.wav");
    this.CardCoffeSound = new Audio("./sounds/Cafeteria.wav");
    this.CardFireSound = new Audio("./sounds/Lareira.wav");
  }

  florestCardSounds() {
    this.CardflorestSound.loop = true;
    this.CardflorestSound.play();
  }

  rainCardSounds() {
    this.CardRainSound.loop = true;
    this.CardRainSound.play();
  }

  coffeCardSounds() {
    this.CardCoffeSound.loop = true;
    this.CardCoffeSound.play();
  }
  fireCardSounds() {
    this.CardFireSound.loop = true;
    this.CardFireSound.play();
  }

  allCardsPause() {
    this.CardflorestSound.pause();
    this.CardflorestSound.currentTime = 0;
    this.CardRainSound.pause();
    this.CardRainSound.currentTime = 0;
    this.CardCoffeSound.pause();
    this.CardCoffeSound.currentTime = 0;
    this.CardFireSound.pause();
    this.CardFireSound.currentTime = 0;
  }

  setVolume(volume, card) {
    card.volume = Number(volume) / 100;
  }
}
