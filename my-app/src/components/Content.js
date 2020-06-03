import React, { useState } from 'react';
import '../styles/Content.scss'
import Foreacast from './Forecast'
import CurrentTime from './Current'

export default function Wrapper(props) {
    const [data, setData] = useState(null)
    const [loader, setLoader] = useState(false)
    const [clouds, setClouds] = useState(null)
    const [humidity, setHumidity] = useState(null)
    const [feel, setFeel] = useState(null)
    const [sunset, setSunset] = useState(null)
    const [daily, setDaily] = useState(null)
    const [current, setCurrent] = useState(null)
    const [address, setAddress] = useState('')
    function actionGetData(data, address) {
        setLoader(false)
        setData(data)
        console.log(data)
        setClouds(data.current.clouds)
        setHumidity(data.current.humidity)
        setSunset(data.current.sunset)
        setFeel(data.current.feels_like)
        setDaily(data.daily)
        setCurrent(data.current)
        setAddress(address)

    }
    function actionLoader() {
        setLoader(true)
    }
    return <div className="wrapper">
        <div className="weather">
            <CurrentTime
                address={address}
                setLoader={actionLoader}
                loader={loader}
                status={data}
                action={actionGetData}
                clouds={clouds}
                humidity={humidity}
                sunset={setTime(sunset).hours + ":" + setTime(sunset).minutes} feel={Math.round(feel - 273.15)}
            />
            <Foreacast
                loader={loader}
                dataDaily={daily}
                status={data}
                current={current} />
        </div>
    </div>


}

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
