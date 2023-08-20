// Esse arquivo contem toda a logica dos arquivos de audio presentes no app

// Função que contem o som do clicar dos botões (play, pause e stop)
export function SoundsBtnPress() {
  const BtnSound = new Audio("./sounds/button-press.wav");
  return BtnSound.play();
}

export function SoundFinishTimer() {
  const finishSound = new Audio("./sounds/kichen-timer.mp3");
  return finishSound.play();
}
