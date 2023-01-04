import Controls from './controls.js'
import Timer from './timer.js'
import Sound from './sound.js'

const playButton = document.querySelector('.play')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')
const addButton = document.querySelector('.add')
const minusButton = document.querySelector('.minus')
const forestSoundButton = document.querySelector('.forest ')
const rainSoundButton = document.querySelector('.rain ')
const coffeehouseSoundButton = document.querySelector('.coffeehouse')
const fireplaceSoundButton = document.querySelector('.fireplace ')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const controls = Controls({
  playButton,
  pauseButton,
  forestSoundButton,
  rainSoundButton,
  coffeehouseSoundButton,
  fireplaceSoundButton
})
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
}) 
const sound = Sound()

playButton.addEventListener('click', () => {
  controls.play()
  timer.countdown()
  sound.pressButton()
})
pauseButton.addEventListener('click', () => {
  controls.reset()
  timer.pause()
  sound.pressButton()
})
stopButton.addEventListener('click', () => {
  controls.reset()
  timer.reset()
  sound.pressButton()
})
addButton.addEventListener('click', () => {
  timer.addMinutes()
  sound.pressButton()
})
minusButton.addEventListener('click', () => {
  timer.decreaseMinutes()
  sound.pressButton()
})

forestSoundButton.addEventListener('click', () => {
  sound.pressButton()
  if (forestSoundButton.classList.contains('off')) {
    controls.changeForestBG()
    sound.playForest()
  } else {
    controls.resetForestBG()
    sound.pauseForest()
  }
})
rainSoundButton.addEventListener('click', () => {
  sound.pressButton()
  if (rainSoundButton.classList.contains('off')) {
    controls.changeRainBG()
    sound.playRain()
  } else {
    controls.resetRainBG()
    sound.pauseRain()
  }
})
coffeehouseSoundButton.addEventListener('click', () => {
  sound.pressButton()
  if (coffeehouseSoundButton.classList.contains('off')) {
    controls.changeCoffeehouseBG()
    sound.playCoffeehouse()
  } else {
    controls.resetCoffeehouseBG()
    sound.pauseCoffeehouse()
  }
})
fireplaceSoundButton.addEventListener('click', () => {
  sound.pressButton()
  if (fireplaceSoundButton.classList.contains('off')) {
    controls.changeFireplaceBG()
    sound.playFireplace()
  } else {
    controls.resetFireplaceBG()
    sound.pauseFireplace()
  }
})