const clockContainer = document.querySelector('.clock-container')

const formatTimeUnit = unit => unit.length === 1 ? `0${unit}` : unit

const getClockHTML = (hours, minutes, seconds) => `
    <span>${hours}</span> :
    <span>${minutes}</span> :
    <span>${seconds}</span>
`

const updateClock = () => {
    const present = new Date()
    const hours = formatTimeUnit(String(present.getHours()))
    const minutes = formatTimeUnit(String(present.getMinutes()))
    const seconds = formatTimeUnit(String(present.getSeconds()))

    clockContainer.innerHTML = getClockHTML(hours, minutes, seconds)
}

setInterval(updateClock, 1000)