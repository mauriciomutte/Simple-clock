const divClock = document.querySelector('.clock')
const divData = document.querySelector('.data')

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