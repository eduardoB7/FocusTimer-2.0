// Arquivo que contem a logica do funcionamento dos cards
import { CardsSounds } from "./Sounds.js";
import { elementsHTML } from "./elementsHTML.js";

// elementos necessarios para as funcionalidades dos cards
const {
  cardsGroup,
  florestCard,
  rainCard,
  coffeCard,
  fireCard,
  slideVolume,
  florestSlide,
  rainSlide,
  coffeSlide,
  fireSlide,
  lightModeBtn,
} = elementsHTML;

// Classe que contem as funcionalidades dos cards
export class Cards extends CardsSounds {
  constructor() {
    super();
    this.florestCardBtn();
    this.rainCardBtn();
    this.coffeCardBtn();
    this.fireCardBtn();
    this.slideEventControll();
    this.slideVolumeControll();
  }

  // controle de versao de modo ligth/dark
  cardsModeControll() {
    cardsGroup.forEach((card) => {
      card.classList.remove("ligthMode-cardActive");
      if (card.classList.contains("playSound")) {
        card.classList.add("ligthMode-cardActive");
        card.classList.remove("darkmode-defaultColor-Cards");
      }
      if (
        !card.classList.contains("playSound") &&
        lightModeBtn.classList.contains("hidden")
      ) {
        card.classList.add("darkmode-defaultColor-Cards");
      }
    });
    slideVolume.forEach((slide) => {
      slide.classList.remove("slide-volume-ligthModeActive");
    });
  }

  // logica dos slides

  // logica que impede que o clicar dos slides ativem o card
  slideEventControll() {
    slideVolume.forEach((slide) => {
      slide.onclick = (ev) => {
        ev.stopPropagation();
      };
    });
  }

  // Controle de volume
  slideVolumeControll() {
    slideVolume.forEach((slide) => {
      slide.addEventListener("input", (ev) => {
        let volumeValue = ev.currentTarget.value;
        ev.value = volumeValue;

        this.setVolume(volumeValue, this.CardflorestSound);
        this.setVolume(volumeValue, this.CardRainSound);
        this.setVolume(volumeValue, this.CardCoffeSound);
        this.setVolume(volumeValue, this.CardFireSound);
      });
    });
  }

  // valor inicial dos slides
  slideResetValue() {
    slideVolume.forEach((slide) => {
      slide.value = "0";
    });
  }

  // valor padrao dos slides
  slideVolume(slide, card) {
    if (card.classList.contains("playSound")) {
      slide.value = "50";
    }
  }

  // remove de todos os cards a classe que controla o som
  playSound() {
    cardsGroup.forEach((card) => {
      card.classList.remove("playSound");
    });
  }

  // logica do card do som de floresta, ele permite dar play e pausar o som, alem disso, o usando o metodo 'playSound()', que gerencia a classe que permite o som tocar, garante que apenas um carde possa ser tocado vez.
  florestCardBtn() {
    florestCard.onclick = () => {
      if (florestCard.classList.contains("playSound")) {
        florestCard.classList.remove("playSound");
        this.allCardsPause();
        this.slideResetValue();
        this.cardsModeControll();
      } else {
        this.playSound();
        florestCard.classList.add("playSound");
        if (florestCard.classList.contains("playSound")) {
          this.cardsModeControll();
          florestSlide.classList.add("slide-volume-ligthModeActive");
          this.slideResetValue();
          this.slideVolume(florestSlide, florestCard);
          this.allCardsPause();
          this.florestCardSounds();
        }
      }
    };
  }

  // lógica do card Rain
  rainCardBtn() {
    rainCard.onclick = () => {
      if (rainCard.classList.contains("playSound")) {
        rainCard.classList.remove("playSound");
        this.allCardsPause();
        this.slideResetValue();
        this.cardsModeControll();
      } else {
        this.playSound();
        rainCard.classList.add("playSound");
        if (rainCard.classList.contains("playSound")) {
          this.cardsModeControll();
          rainSlide.classList.add("slide-volume-ligthModeActive");
          this.allCardsPause();
          this.slideResetValue();
          this.slideVolume(rainSlide, rainCard);
          this.rainCardSounds();
        }
      }
    };
  }

  // logica do card coffe
  coffeCardBtn() {
    coffeCard.onclick = () => {
      if (coffeCard.classList.contains("playSound")) {
        coffeCard.classList.remove("playSound");
        this.allCardsPause();
        this.slideResetValue();
        this.cardsModeControll();
      } else {
        this.playSound();
        coffeCard.classList.add("playSound");
        if (coffeCard.classList.contains("playSound")) {
          this.cardsModeControll();
          coffeSlide.classList.add("slide-volume-ligthModeActive");
          this.allCardsPause();
          this.slideResetValue();
          this.slideVolume(coffeSlide, coffeCard);
          this.coffeCardSounds();
        }
      }
    };
  }

  // Logica do card fire
  fireCardBtn = () => {
    fireCard.onclick = () => {
      if (fireCard.classList.contains("playSound")) {
        fireCard.classList.remove("playSound");
        this.allCardsPause();
        this.slideResetValue();
        this.cardsModeControll();
      } else {
        this.playSound();
        fireCard.classList.add("playSound");
        if (fireCard.classList.contains("playSound")) {
          this.cardsModeControll();
          fireSlide.classList.add("slide-volume-ligthModeActive");
          this.allCardsPause();
          this.slideResetValue();
          this.slideVolume(fireSlide, fireCard);
          this.fireCardSounds();
        }
      }
    };
  };
}
