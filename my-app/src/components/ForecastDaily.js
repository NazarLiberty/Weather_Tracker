import React from 'react';
import '../styles/ForecastDaily.scss'
import '../styles/Content.scss'
import { setTime } from './Content'

export default function ForecastDaily(props) {
    let elClass = "forecast-daily animate__animated animate__fadeInRight"
    if (props.activeTab) elClass += " forecast-daily--active"
    let hoursCollection = []
    for (let i = 1; i <= 12; i++) {
        hoursCollection.push(<ForecastHourly
            time={setTime(props.hours[i].dt).hours + ":00"}
            key={i}
            temp={Math.round(props.hours[i].temp - 273.15)}
            icon={props.hours[i].weather[0].icon}
        />)
    }

    return <div className={elClass + " " + props.theme.backgroundColor}>
        {hoursCollection}
    </div>
}
function ForecastHourly(props) {
    return <div className="forecast-daily__hour">
        <div className="forecast-daily__time">{props.time}</div>
        <div className="forecast-daily__icon-b">
            <img src={"https://openweathermap.org/img/wn/" + props.icon + ".png"} alt="weather" className="forecast-daily__icon" />
        </div>
        <div className="forecast-daily__temp">{props.temp}°</div>

    </div>
}