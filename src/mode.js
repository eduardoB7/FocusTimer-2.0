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
      lightModeBtn.classList.toggle("hidden");
      darkModeBtn.classList.toggle("hidden");
      // ...
      main.classList.toggle("backgroundDark");
      minutes.classList.toggle("darkmode-defaultColor");
      seconds.classList.toggle("darkmode-defaultColor");
      // ...
      allControllers.classList.toggle("darkmode-defaultColor-Btns");
      cardsGroup.forEach((card) => {
        card.classList.toggle("darkmode-defaultColor-Cards");
        card.classList.toggle("darkmode-defaultColor-Cards-svg");
      });
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
