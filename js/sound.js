export default function Sound() {
  const forest = new Audio('https://github.com/CaioGVM/focus_timer/blob/master/audios/forest.wav?raw=true')
  const rain = new Audio('https://github.com/CaioGVM/focus_timer/blob/master/audios/rain.wav?raw=true')
  const coffeehouse = new Audio('https://github.com/CaioGVM/focus_timer/blob/master/audios/coffehouse.wav?raw=true')
  const fireplace = new Audio('https://github.com/CaioGVM/focus_timer/blob/master/audios/fireplace.wav?raw=true')
  const buttonPressAudio = new Audio('https://github.com/CaioGVM/focus_timer/blob/master/audios/button-press.wav?raw=true')
  const kitchenTimer = new Audio("https://github.com/CaioGVM/focus_timer/blob/master/audios/kitchen-timer.mp3?raw=true")
  forest.loop = true
  rain.loop = true
  coffeehouse.loop = true
  fireplace.loop = true
  
  function playForest() {
    forest.play()
  }
  function playRain() {
    rain.play()
  }
  function playCoffeehouse() {
    coffeehouse.play()
  }
  function playFireplace() {
    fireplace.play()
  }
  function pauseForest() {
    forest.pause()
  }
  function pauseRain() {
    rain.pause()
  }
  function pauseCoffeehouse() {
    coffeehouse.pause()
  }
  function pauseFireplace() {
    fireplace.pause()
  }
  function pressButton() {
    buttonPressAudio.play()
  }
  function timeUp() {
    kitchenTimer.play()
  }
  return {
    forest,
    rain,
    coffeehouse,
    fireplace,
    playForest,
    playRain,
    playCoffeehouse,
    playFireplace,
    pauseForest,
    pauseRain,
    pauseCoffeehouse,
    pauseFireplace,
    pressButton,
    timeUp
  }
}