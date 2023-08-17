import { elementsHTML } from "./elementsHTML.js";

const {
  main,
  lightModeBtn,
  darkModeBtn,
  minutes,
  seconds,
  allControllers,
  cardsGroup,
  slideVolumeGroup,
} = elementsHTML;

// classe da logica do modo ligth/dark
export class Mode {
  constructor(element) {
    element.onclick = () => {
      // logica do icone de ligth/dark
      lightModeBtn.classList.toggle("hidden");
      darkModeBtn.classList.toggle("hidden");

      // logica da versao dark mode do timer
      main.classList.toggle("backgroundDark");
      minutes.classList.toggle("darkmode-defaultColor");
      seconds.classList.toggle("darkmode-defaultColor");

      // logica da versao dark mode dos icones dos controles do timer
      allControllers.classList.toggle("darkmode-defaultColor-Btns");

      // logica da versao dark mode dos cards(backgroud e icones)
      cardsGroup.forEach((card) => {
        card.classList.toggle("darkmode-defaultColor-Cards");
        card.classList.toggle("darkmode-defaultColor-Cards-svg");
      });

      // logica da versao dark mode do slide
      slideVolumeGroup.forEach((slide) => {
        if (!darkModeBtn.classList.contains("hidden")) {
          slide.classList.remove("slide-volume");
          slide.classList.add("slide-volume-darkMode");
        }
        if (darkModeBtn.classList.contains("hidden")) {
          slide.classList.add("slide-volume");
          slide.classList.remove("slide-volume-darkMode");
        }
      });
    };
  }
}
