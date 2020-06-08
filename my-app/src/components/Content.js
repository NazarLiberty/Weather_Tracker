import React, { useState } from 'react';
import '../styles/Content.scss'
import Foreacast from './Forecast'
import CurrentTime from './Current'
import ForecastDaily from './ForecastDaily'

export default function Wrapper(props) {
    const [data, setData] = useState(null)
    const [loader, setLoader] = useState(false)
    const [clouds, setClouds] = useState(null)
    const [humidity, setHumidity] = useState(null)
    const [feel, setFeel] = useState(null)
    const [sunset, setSunset] = useState(null)
    const [hourly, setHourly] = useState(null)
    const [current, setCurrent] = useState(null)
    const [address, setAddress] = useState('')
    const [activeTab, setActiveTab] = useState(false)
    const [theme, setTheme] = useState(null)
    function themesList() {
        let atmosphere = ["Mist", "Smoke", "Haze", "Dust", "Fog", "Sand", "Dust", "Ash", "Squall", "Tornado"]
        let atmosphereCheck = atmosphere.filter(e => theme === e)
        if (atmosphereCheck.includes(theme))
            return {
                backgroundImage: "fog-bg",
                backgroundColor: "fog"
            }
        else if (theme === "Rain") return {
            backgroundImage: "rain-bg",
            backgroundColor: "rain"
        }
        else if (theme === "Clouds") return {
            backgroundImage: "clouds-bg",
            backgroundColor: "clouds"
        }
        else if (theme === "Thunderstorm") return {
            backgroundImage: "thunderstorm-bg",
            backgroundColor: "thunderstorm"
        }
        else return {
            backgroundImage: "sunny-bg",
            backgroundColor: "sunny"
        }
    }

    function actionGetData(data, address) {
        setLoader(false)
        setData(data)
        setClouds(data.current.clouds)
        setHumidity(data.current.humidity)
        setSunset(data.current.sunset)
        setFeel(data.current.feels_like)
        setHourly(data.hourly)
        setCurrent(data.current)
        setAddress(address)
        setTheme(data.current.weather[0].main)
    }

    function actionLoader() {
        setLoader(true)
    }
    function actionChangeTab() {
        setActiveTab(!activeTab)
    }
    return <div className="wrapper">
        <div className="weather">
            <CurrentTime
                theme={themesList()}
                actionChangeTab={actionChangeTab}
                activeTab={activeTab}
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
                theme={themesList()}
                activeTab={activeTab}
                loader={loader}
                status={data}
                current={current} />

            {hourly && <ForecastDaily
                theme={themesList()}
                activeTab={activeTab}
                hours={hourly}
            />}
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
