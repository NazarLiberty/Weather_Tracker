import React, { useState } from 'react';
import '../styles/Content.scss'
import LocationSearchInput from './Autoselect';
import Foreacast from './Forecast'

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
function CurrentTime(props) {
    const [unix, setUnix] = useState(Date.now() / 1000)
    setInterval(function () {
        setUnix(Date.now() / 1000)
    }, 1000)
    function getData(data, address) {
        props.action(data, address)
    }
    return <div className="current">
        <div className="current__info-container">
            <div className="current__time">
                <p className="current__timestamp"> {setTime(unix).hours}:{setTime(unix).minutes}<span className="current__seconds">:{setTime(unix).seconds} </span></p>
                <p className="current__day">
                    {setTime(Date.now() / 1000).fullDate}
                </p>
            </div>
            <div className="current__info ">
                {props.loader && <div className="current__loading">
                    Loading...
                                <div className="current__icon-b ">
                        <img src='./loader.png' className="current__icon animate__animated  animate__rotateOut" alt="weather option" />
                    </div>
                </div>
                }
                {!props.loader && props.status &&
                    <>
                        <CurrentInfoItem src="./humidity.png" condition={props.humidity + "%"} text="humidity is" />
                        <CurrentInfoItem src="./cloud.png" condition={props.clouds + "%"} text="clouds is " />
                        <CurrentInfoItem src="./feeling.png" condition={props.feel + " C"} text="feels like " />
                        <CurrentInfoItem src="./sunset.png" condition={props.sunset} text="sunset is" />
                    </>}
            </div>
        </div>
        <div className="current__search">
            <LocationSearchInput action={getData} setLoader={props.setLoader} />
            <div className="current__address">
                {props.address}
            </div>
        </div>
    </div>

}
function CurrentInfoItem(props) {
    return <div className="current__item animate__animated  animate__bounceInLeft">
        <div className="current__icon-b ">
            <img src={props.src} className="current__icon" alt="weather option" />
        </div>
        <div className="current__text"> {props.text} {props.condition} </div>
    </div>
}