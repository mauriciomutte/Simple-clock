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
  if (week === 0) {
    week = 'Sun'
  } else if (week === 1){
    week = 'Mon'
  } else if (week === 2){
    week = 'Tues'
  } else if (week === 3){
    week = 'Wed'
  } else if (week === 4){
    week = 'Thurs'
  } else if (week === 5){
    week = 'Fri'
  } else if (week === 6){
    week = 'Sat'
  }
  // Month name
  if (month === 0){
    month = 'January'
  } else if (month === 1){
    month = 'February'
  } else if (month === 2){
    month = 'March'
  } else if (month === 3){
    month = 'April'
  } else if (month === 4){
    month = 'May'
  } else if (month === 5){
    month = 'June'
  } else if (month === 6){
    month = 'July'
  } else if (month === 7){
    month = 'August'
  } else if (month === 8){
    month = 'September'
  } else if (month === 9){
    month = 'October'
  } else if (month === 10){
    month = 'November'
  } else if (month === 11){
    month = 'December'
  }

  divData.innerHTML = `${week}, ${day} ${month} ${year}`
}


divClock.addEventListener('onload', clock())
function clock(){
  const date = new Date()
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()

  if (hours < 10) {
    hours = `0${hours}`
  }
  if (minutes < 10) {
    minutes = `0${minutes}`    
  }
  if (seconds < 10) {
    seconds = `0${seconds}`
  }

  divClock.innerHTML = `${hours}:${minutes}:${seconds}`
}

setInterval('clock()', 1000)