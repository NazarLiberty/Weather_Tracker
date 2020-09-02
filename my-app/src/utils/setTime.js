export function setTime(unix) {
    let timestamp = unix;
    let a = new Date(timestamp * 1000);
    let daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December']
    let day = daysList[a.getDay()]
    let month = monthList[a.getMonth()]
    let dayNumber = a.getDate()
    let year = a.getFullYear()
    let fullDate = day + ", " + dayNumber + " " + month + " " + year;
    let hours = a.getHours()
    let minutes = a.getMinutes()
    let seconds = a.getSeconds()
    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    return {
        seconds: seconds,
        minutes: minutes,
        hours: hours,
        day: day,
        month: month,
        year: year,
        dayNumber: dayNumber,
        fullDate: fullDate

    }
}
