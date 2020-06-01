import React, { useState } from 'react';
import '../styles/Content.scss'
import LocationSearchInput from './Autoselect';

export default function Wrapper(props) {
    const [clouds, setClouds] = useState(null)
    const [humidity, setHumidity] = useState(null)
    const [feel, setFeel] = useState(null)
    const [sunset, setSunset] = useState(null)
    function actionGetData(data) {
        console.log(data.current)
        setClouds(data.current.clouds)
        setHumidity(data.current.humidity)
        setSunset(data.current.sunset)
        setFeel(data.current.feels_like)
    }
    return <div className="wrapper">
        <div className="weather">
            <CurrentTime action={actionGetData} clouds={clouds} humidity={humidity} sunset={setTime(sunset).hours + ":" + setTime(sunset).minutes} feel={Math.round(feel - 273.15)} />
            <div className="forecast">
            </div>
        </div>
    </div>
}

function setTime(unix) {
    var timestamp = unix;
    var a = new Date(timestamp * 1000);
    var daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December']
    var day = daysList[a.getDay()]
    var month = monthList[a.getMonth()]
    let dayNumber = a.getDate()
    let year = a.getFullYear()
    let fullDate = day + "," + " " + dayNumber + " " + month + " " + year;
    let hours = a.getHours()
    let minutes = a.getMinutes()
    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    return {
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
    function getData(data) {
        props.action(data)
    }
    return <div className="current">
        <div className="current__info-container">
            <div className="current__time">
                <p className="current__timestamp"> {setTime(Date.now() / 1000).hours}:{setTime(Date.now() / 1000).minutes} </p>
                <p className="current__day">
                    {setTime(Date.now() / 1000).fullDate}
                </p>
            </div>
            <div className="current__info">
                {!props.humidity && <CurrentInfoItem src="./question.png" text="Start searching your city!" />}
                {props.humidity &&
                    <>
                        <CurrentInfoItem src="./humidity.png" condition={props.humidity + "%"} text="humidity is" />
                        <CurrentInfoItem src="./cloud.png" condition={props.clouds + "%"} text="clouds is " />
                        <CurrentInfoItem src="./feeling.png" condition={props.feel + " C"} text="feels like " />
                        <CurrentInfoItem src="./sunset.png" condition={props.sunset} text="sunset is" />
                    </>}
            </div>
        </div>
        <div className="current__search">
            <LocationSearchInput action={getData} />
        </div>
    </div>

}
function CurrentInfoItem(props) {
    return <div className="current__item">
        <div className="current__icon-b">
            <img src={props.src} className="current__icon" alt="weather option" />
        </div>
        <div className="current__text"> {props.text} {props.condition} </div>
    </div>
}