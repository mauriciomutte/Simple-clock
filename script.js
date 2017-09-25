const divWelcome = document.querySelector('.welcome-title')
const editWelcome = document.querySelector('.welcome-edit')
const divClock = document.querySelector('.clock')
const divData = document.querySelector('.data')
const body = document.querySelector('.body')

divWelcome.addEventListener('onload', welcome())
function welcome(){
  const date = new Date()
  let hours = date.getHours()
  const goodDay = ['Good Morning', 'Good Afternoon', 'Good Evening']
  function greeting(txt) {
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

  if (typeof(Storage) !== 'undefined') {
    if (localStorage.name && localStorage.name !== 'null' && localStorage.name !== '') {
      greeting(`, ${localStorage.name}!`)
    } else {
      localStorage.name = prompt(`What's your name?`)
      location.reload()
    }
  } else {
    const name = prompt(`What's your name?`)
    greeting(`, ${name}!`)
  }
}

editWelcome.addEventListener('click', function (){
  localStorage.removeItem('name')
  location.reload()
})

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

  if (hours === 6 && minutes === 00 && seconds === 00) {
    location.reload()
  } else if (hours === 13 && minutes === 00 && seconds === 00) {
    location.reload()
  } else if (hours === 18 && minutes === 00 && seconds === 00) {
    location.reload()
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