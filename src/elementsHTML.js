const main = document.querySelector("body");
const app = document.querySelector("#app");

// elements timer
const minutes = document.querySelector(".timer #minutes");
const seconds = document.querySelector(".timer #seconds");

// elements controller timer
const allControllers = document.querySelector(".Controlls");

// elements mode
const modeBtn = document.querySelector("#modeBtn");
const lightModeBtn = document.querySelector("#lightMode-Btn");
const darkModeBtn = document.querySelector("#darkMode-Btn");
const cardsGroup = document.querySelectorAll(".card");
const slideVolumeGroup = document.querySelectorAll(".slide-volume");

export const elementsHTML = {
  main,
  app,
  minutes,
  seconds,
  allControllers,
  modeBtn,
  lightModeBtn,
  darkModeBtn,
  cardsGroup,
  slideVolumeGroup,
};
