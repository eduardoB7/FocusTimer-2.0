// arquivo que roda as classes e faz todo o app funcionar
import "../styles/index.css";
import { elementsHTML } from "./elementsHTML.js";
const { modeBtn } = elementsHTML;
import { Mode } from "./mode.js";

// Funcionalidade do modo Ligth/Dark
new Mode(modeBtn);
