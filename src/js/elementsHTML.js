const main = document.querySelector("body");
const app = document.querySelector("#app");

// elements timer
const minutes = document.querySelector(".timer #minutes");
const seconds = document.querySelector(".timer #seconds");

// elements controller timer
const allControllers = document.querySelector(".Controlls");
const playAndpause = document.querySelector("#playAndpause");
const playBtn = document.querySelector("#playBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const stopBtn = document.querySelector("#stopBtn");
const addTimerBtn = document.querySelector("#addBtn");
const subtractTimerBtn = document.querySelector("#subtractBtn");

// elements mode ligth/dark
const modeBtn = document.querySelector("#modeBtn");
const lightModeBtn = document.querySelector("#lightMode-Btn");
const darkModeBtn = document.querySelector("#darkMode-Btn");
const cardsGroup = document.querySelectorAll(".card");
const slideVolumeGroup = document.querySelectorAll(".slide-volume");

// Cards Elements
const florestCard = document.querySelector("#florest-card");
const rainCard = document.querySelector("#rain-card");
const coffeCard = document.querySelector("#coffe-card");
const fireCard = document.querySelector("#fire-card");
const slideVolume = document.querySelectorAll(".slide-volume");
const florestSlide = document.querySelector("#florest-card-sound");
const rainSlide = document.querySelector("#rain-card-sound");
const coffeSlide = document.querySelector("#coffe-card-sound");
const fireSlide = document.querySelector("#fire-card-sound");

export const elementsHTML = {
  main,
  app,
  minutes,
  seconds,
  modeBtn,
  lightModeBtn,
  darkModeBtn,
  cardsGroup,
  slideVolumeGroup,
  allControllers,
  playAndpause,
  playBtn,
  pauseBtn,
  stopBtn,
  addTimerBtn,
  subtractTimerBtn,
  florestCard,
  rainCard,
  coffeCard,
  fireCard,
  slideVolume,
  florestSlide,
  rainSlide,
  coffeSlide,
  fireSlide,
};
