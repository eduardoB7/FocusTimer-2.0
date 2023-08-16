import { elementsHTML } from "./elementsHTML.js";

const { lightModeBtn, darkModeBtn } = elementsHTML;

export class mode {
  constructor(element) {
    element.addEventListener("click", () => {
      lightModeBtn.classList.toggle("hidden");
      darkModeBtn.classList.toggle("hidden");
    });
  }
}
