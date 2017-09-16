const divWelcome = document.querySelector('.welcome')
const divClock = document.querySelector('.clock')
const divData = document.querySelector('.data')
const body = document.querySelector('.body')

divWelcome.addEventListener('onload', welcome())
function welcome(){
  const date = new Date()
  let hours = date.getHours()
  const name = prompt(`What's your name?`)
  const goodDay = ['Good Morning', 'Good Afternoon', 'Good Evening']
  function greeting(txt){
    if (hours > 5 && hours < 13) {
      divWelcome.innerHTML = goodDay[0] + txt
    }
    if (hours > 12 && hours < 18) {
     divWelcome.innerHTML = goodDay[1] + txt
    }
    if (hours > 17 || hours < 6) {
      divWelcome.innerHTML = goodDay[2] + txt
      divWelcome.style.color = '#1a1a1a'
    }
  }

  if (name === '' || name === ' ' || name === null) {
    greeting('!')
  } else {
    greeting(`, ${name}!`)
  }
}

divData.addEventListener('onload', data())
function data(){
  const date = new Date()
  let week = date.getDay()
  let day = date.getDate()
  let month = date.getMonth()
  let year = date.getFullYear()
  // Week name
  const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
  week = weekdays[week]
  // Month name
  const monthsOfTheYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  month = monthsOfTheYear[month]

  divData.innerHTML = `${week}, ${day} ${month} ${year}`
}


divClock.addEventListener('onload', clock())
function clock(){
  const date = new Date()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  if (hours > 17 | hours < 5) {
    body.classList.add('night')
    body.classList.remove('day')
  } else {
    body.classList.add('day')
    body.classList.remove('night')
  }

  function checkZero(element){
    if (!(element < 10)) {
      return `${element}`
    } else {
      return element = `0${element}`
    }
  }

  divClock.innerHTML = `${checkZero(hours)}:${checkZero(minutes)}:${checkZero(seconds)}`
}

setInterval('clock()', 1000)