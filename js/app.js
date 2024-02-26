const clockContainer = document.querySelector('[data-js="clockContainer"]')

const oneSecond = 1000

const concatenateZero = unit => unit < 10 ? `0${unit}` : unit

const formatTimeUnits = units => units.map(concatenateZero)

const getClockHTML = ([hours, minutes, seconds]) => `
  <span class="bg-dark">${hours}</span> :
  <span class="bg-dark">${minutes}</span> :
  <span class="bg-dark">${seconds}</span>
`

const getTime = () => {
  const present = new Date()
  const hours = present.getHours()
  const minutes = present.getMinutes()
  const seconds = present.getSeconds()

  return [hours, minutes, seconds]
}

const updateClock = () => {
  const [hours, minutes, seconds] = getTime()
  const formattedTime = formatTimeUnits([hours, minutes, seconds])

  clockContainer.innerHTML = getClockHTML(formattedTime)
}

setInterval(() => updateClock(), oneSecond)