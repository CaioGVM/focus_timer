export default function Controls({
  playButton,
  pauseButton,
  forestSoundButton,
  rainSoundButton,
  coffeehouseSoundButton,
  fireplaceSoundButton
}) {
  const forestButtonSVGColor = document.querySelector('.forest svg path')
  const rainButtonSVGColor = document.querySelector('.rain svg path')
  const coffeehouseButtonSVGColor = document.querySelector('.coffeehouse svg path')
  const fireplaceButtonSVGColor = document.querySelector('.fireplace svg path')

  function play() {
    playButton.classList.add('hide')
    pauseButton.classList.remove('hide')
  }
  function reset() {
    playButton.classList.remove('hide')
    pauseButton.classList.add('hide')
  }
  function changeForestBG() {
    forestSoundButton.style.backgroundColor = '#02799D'
    forestButtonSVGColor.style.fill = "#FFFFFF"
    forestSoundButton.style.boxShadow = 'inset 16px 16px 10px #026989, inset -16px -16px 10px #0289b1'
    toggleForestButton()
  }
  function changeRainBG() {
    rainSoundButton.style.backgroundColor = '#02799D'
    rainButtonSVGColor.style.fill = "#FFFFFF"
    rainSoundButton.style.boxShadow = 'inset 16px 16px 10px #026989, inset -16px -16px 10px #0289b1'
    toggleRainButton()
  }
  function changeCoffeehouseBG() {
    coffeehouseSoundButton.style.backgroundColor = '#02799D'
    coffeehouseButtonSVGColor.style.fill = "#FFFFFF"
    coffeehouseSoundButton.style.boxShadow = 'inset 16px 16px 10px #026989, inset -16px -16px 10px #0289b1'
    toggleCoffeehouseButton()
  }
  function changeFireplaceBG() {
    fireplaceSoundButton.style.backgroundColor = '#02799D'
    fireplaceButtonSVGColor.style.fill = "#FFFFFF"
    fireplaceSoundButton.style.boxShadow = 'inset 16px 16px 10px #026989, inset -16px -16px 10px #0289b1'
    toggleFireplaceButton()
  }
  function resetForestBG() {
    forestSoundButton.style.backgroundColor = '#E1E1E6'
    forestButtonSVGColor.style.fill = "#323238"
    forestSoundButton.style.boxShadow = '8px 8px 16px #b4b4b8, -8px -8px 16px #ffffff'
    toggleForestButton()
  }
  function resetRainBG() {
    rainSoundButton.style.backgroundColor = '#E1E1E6'
    rainButtonSVGColor.style.fill = "#323238"
    rainSoundButton.style.boxShadow = '8px 8px 16px #b4b4b8, -8px -8px 16px #ffffff'
    toggleRainButton()
  }
  function resetCoffeehouseBG() {
    coffeehouseSoundButton.style.backgroundColor = '#E1E1E6'
    coffeehouseButtonSVGColor.style.fill = "#323238"
    coffeehouseSoundButton.style.boxShadow = '8px 8px 16px #b4b4b8, -8px -8px 16px #ffffff'
    toggleCoffeehouseButton()
  }
  function resetFireplaceBG() {
    fireplaceSoundButton.style.backgroundColor = '#E1E1E6'
    fireplaceButtonSVGColor.style.fill = "#323238"
    fireplaceSoundButton.style.boxShadow = '8px 8px 16px #b4b4b8, -8px -8px 16px #ffffff'
    toggleFireplaceButton()
  }
  function toggleForestButton() {
    forestSoundButton.classList.toggle('off')
    forestSoundButton.classList.toggle('on')
  }
  function toggleRainButton() {
    rainSoundButton.classList.toggle('off')
    rainSoundButton.classList.toggle('on')
  }
  function toggleCoffeehouseButton() {
    coffeehouseSoundButton.classList.toggle('off')
    coffeehouseSoundButton.classList.toggle('on')
  }
  function toggleFireplaceButton() {
    fireplaceSoundButton.classList.toggle('off')
    fireplaceSoundButton.classList.toggle('on')
  }
  
  return {
    play,
    reset,
    changeForestBG,
    changeRainBG,
    changeCoffeehouseBG,
    changeFireplaceBG,
    resetForestBG,
    resetRainBG,
    resetCoffeehouseBG,
    resetFireplaceBG,
  }
}