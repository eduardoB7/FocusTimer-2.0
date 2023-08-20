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
} = elementsHTML;

// Classe que contem as funcionalidades dos cards
export class Cards extends CardsSounds {
  constructor() {
    super();
    this.florestCardBtn();
    this.rainCardBtn();
    this.coffeCardBtn();
    this.fireCardBtn();
  }

  // logica dos slides
  slideGroup() {
    slideVolume.forEach((slide) => {
      slide.value = "0";
    });
  }
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
        this.slideGroup();
      } else {
        this.playSound();
        florestCard.classList.add("playSound");
        if (florestCard.classList.contains("playSound")) {
          this.slideGroup();
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
        this.slideGroup();
      } else {
        this.playSound();
        rainCard.classList.add("playSound");
        if (rainCard.classList.contains("playSound")) {
          this.allCardsPause();
          this.slideGroup();
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
        this.slideGroup();
      } else {
        this.playSound();
        coffeCard.classList.add("playSound");
        if (coffeCard.classList.contains("playSound")) {
          this.allCardsPause();
          this.slideGroup();
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
        this.slideGroup();
      } else {
        this.playSound();
        fireCard.classList.add("playSound");
        if (fireCard.classList.contains("playSound")) {
          this.slideGroup();
          this.slideVolume(fireSlide, fireCard);
          this.allCardsPause();
          this.fireCardSounds();
        }
      }
    };
  };
}
