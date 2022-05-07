//buttons
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
const buttonPlay = document.querySelector('.play');
const buttonStop = document.querySelector('.stop');
const buttonAddTime = document.querySelector('.addtime');
const buttonSubTime = document.querySelector('.subtime');
const buttonFlorest = document.querySelector('.florest');
const buttonRain = document.querySelector('.rain');
const buttonCoffee = document.querySelector('.coffee');
const buttonFire = document.querySelector('.fire');
const buttonLight = document.querySelector('.sun');
const buttonDark = document.querySelector('.moon');
const chanceFillPlay = document.querySelector('.svgplay');
const chanceFillStop = document.querySelector('.svgstop');
const chanceFillAdd = document.querySelector('.svgadd');
const chanceFillSub = document.querySelector('.svgsub');
const chanceFillFlorest = document.querySelector('.svgflorest');
const chanceFillRain = document.querySelector('.svgrain');
const chanceFillFire = document.querySelector('.svgfire');
const chanceFillCoffee = document.querySelector('.svgcoffee');
const ThemeFlorest = document.querySelector('.florest');
const ThemeRain = document.querySelector('.rain');
const ThemeCoffee = document.querySelector('.coffee');
const ThemeFire = document.querySelector('.fire');
const changeSlider = document.querySelector('.slider1');
const changeSlider2 = document.querySelector('.slider2');
const changeSlider3 = document.querySelector('.slider3');
const changeSlider4 = document.querySelector('.slider4');
const changeTheme = document.body;

//sounds
const soundFlorest = new Audio("https://github.com/Paru369/focus-timer/blob/main/sounds/Floresta.wav?raw=true")
const soundRain = new Audio("https://github.com/Paru369/focus-timer/blob/main/sounds/Chuva.wav?raw=true")
const soundCoffee = new Audio("https://github.com/Paru369/focus-timer/blob/main/sounds/Cafeteria.wav?raw=true")
const soundFire = new Audio("https://github.com/Paru369/focus-timer/blob/main/sounds/Lareira.wav?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
//loops
soundFlorest.loop = true
soundRain.loop = true
soundCoffee.loop = true
soundFire.loop = true
//timer

let timerTimeOut

function updateDisplay(newMinutes, seconds) {
  newMinutes = newMinutes === undefined ? minutes : newMinutes;
  seconds = seconds === undefined ? 0 : seconds;
  minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
  secondsDisplay.textContent = String(seconds).padStart(2, '0')
}

function reset() {
  updateDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function addtime() {
  minutes = Number(minutesDisplay.textContent)
  seconds = Number(secondsDisplay.textContent)

  minutes = minutes + 5
  updateDisplay(minutes, seconds)
}

function subtime() {
  minutes = Number(minutesDisplay.textContent)
  seconds = Number(secondsDisplay.textContent)

  if (minutes >= 5) {
    minutes = minutes - 5
    updateDisplay(minutes, seconds)
  } else if (minutes <= 5) {
    minutes = 0
    updateDisplay(minutes, seconds)
  }
}

function countDown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateDisplay(minutes, 0)

    if (minutes <= 0 && seconds <= 0) {
      reset()
      updateDisplay()
      kitchenTimer.play()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      
      --minutes
    }

    updateDisplay(minutes, String(seconds - 1))

    countDown()
  }, 1000)
}

//events

/*let soundOn = false

function playFlorest() {
  if (soundOn == false) {
    soundOn = true
    buttonFlorest.classList.add('selected')
    soundFlorest.play()
  } else {
    soundOn = false
    buttonFlorest.classList.remove('selected')
    soundFlorest.pause()
  }
};
function playRain() {
  if (soundOn == false) {
    soundOn = true
    buttonRain.classList.add('selected')
    soundRain.play()
  } else {
    soundOn = false
    buttonRain.classList.remove('selected')
    soundRain.pause()
  }
};
function playCoffee() {
  if (soundOn == false) {
    soundOn = true
    buttonCoffee.classList.add('selected')
    soundCoffee.play()
  } else {
    soundOn = false
    buttonCoffee.classList.remove('selected')
    soundCoffee.pause()
  }
};
function playFire() {
  if (soundOn == false) {
    soundOn = true
    buttonFire.classList.add('selected')
    soundFire.play()
  } else {
    soundOn = false
    buttonFire.classList.remove('selected')
    soundFire.pause()
  }
};*/

buttonFlorest.addEventListener('click',
function()
{
  soundFlorest.play()
}
);
buttonRain.addEventListener('click',
function()
{
  soundRain.play()
}
);
buttonCoffee.addEventListener('click',
function()
{
  soundCoffee.play()
}
);buttonFire.addEventListener('click',
function()
{
  soundFire.play()
}
);
buttonPlay.addEventListener('click', function () {
  countDown()
})

buttonStop.addEventListener('click', function () {
  reset()
  kitchenTimer.play()
})

buttonAddTime.addEventListener('click', function () {
  addtime()
})

buttonSubTime.addEventListener('click', function () {
  subtime()
});

//change color
buttonLight.addEventListener('click', function()
{
  buttonLight.classList.add('hide');
  ThemeFlorest.classList.add('darken');
  ThemeFlorest.classList.remove('light');
  ThemeRain.classList.add('darken');
  ThemeRain.classList.remove('light');
  ThemeCoffee.classList.add('darken');
  ThemeCoffee.classList.remove('light');
  ThemeFire.classList.add('darken');
  ThemeFire.classList.remove('light');
  changeTheme.classList.add('dark');
  chanceFillPlay.classList.add('dark');
  chanceFillStop.classList.add('dark');
  chanceFillAdd.classList.add('dark');
  chanceFillSub.classList.add('dark');
  chanceFillFlorest.classList.add('dark');
  chanceFillRain.classList.add('dark');
  chanceFillFire.classList.add('dark');
  chanceFillCoffee.classList.add('dark');
  minutesDisplay.classList.add('dark');
  secondsDisplay.classList.add('dark');
  buttonDark.classList.remove('hide');
  changeSlider.classList.add('sliderlight')
  changeSlider.classList.remove('sliderdark')
  changeSlider2.classList.add('sliderlight');
  changeSlider2.classList.remove('sliderdark');
  changeSlider3.classList.add('sliderlight');
  changeSlider3.classList.remove('sliderdark');
  changeSlider4.classList.add('sliderlight');
  changeSlider4.classList.remove('sliderdark');
}
);
buttonDark.addEventListener('click', function()
{
  buttonDark.classList.add('hide');
  ThemeFlorest.classList.remove('darken');
  ThemeFlorest.classList.add('light');
  ThemeRain.classList.remove('darken');
  ThemeRain.classList.add('light');
  ThemeCoffee.classList.remove('darken');
  ThemeCoffee.classList.add('light');
  ThemeFire.classList.remove('darken');
  ThemeFire.classList.add('light');
  changeTheme.classList.remove('dark');
  minutesDisplay.classList.remove('dark');
  chanceFillPlay.classList.remove('dark');
  chanceFillStop.classList.remove('dark');
  chanceFillAdd.classList.remove('dark');
  chanceFillSub.classList.remove('dark');
  chanceFillFlorest.classList.remove('dark');
  chanceFillRain.classList.remove('dark');
  chanceFillFire.classList.remove('dark');
  chanceFillCoffee.classList.remove('dark');
  secondsDisplay.classList.remove('dark');
  buttonLight.classList.remove('hide');
  changeSlider.classList.remove('sliderlight');
  changeSlider.classList.add('sliderdark');
  changeSlider2.classList.remove('sliderlight');
  changeSlider2.classList.add('sliderdark');
  changeSlider3.classList.remove('sliderlight');
  changeSlider3.classList.add('sliderdark');
  changeSlider4.classList.remove('sliderlight');
  changeSlider4.classList.add('sliderdark');
}
);
//volume
const volumeFlorest = document.querySelector('.volumeFlorest');
volumeFlorest.addEventListener('change', function(e)
{
  soundFlorest.volume = e.target.value / 100;
}
);
const volumeCoffee = document.querySelector('.volumeCoffee');
volumeCoffee.addEventListener('change', function(e)
{
  soundCoffee.volume = e.target.value / 100;
}
);
const volumeFire = document.querySelector('.volumeFire');
volumeFire.addEventListener('change', function(e)
{
  soundFire.volume = e.target.value / 100;
}
);

//slider color

