import React from 'react';
import '../styles/ForecastDaily.scss'
import '../styles/Content.scss'
import { setTime } from './Content'

export default function ForecastDaily(props) {
    let elClass = "forecast-daily"
    if (props.activeTab) elClass += " forecast-daily--active"
    let hoursCollection = []
    for (let i = 1; i <= 12; i++) {
        hoursCollection.push(<ForecastHourly
            time={setTime(props.hours[i].dt).hours + ":00"}
            key={i}
            temp={Math.round(props.hours[i].temp - 273.15)}
        />)
    }

    return <div className={elClass + " sunny"}>
        {hoursCollection}
    </div>
}
function ForecastHourly(props) {
    return <div className="forecast-daily__hour">
        <div className="forecast-daily__time">{props.time}</div>
        <div className="forecast-daily__icon-b">
            <img src="https://openweathermap.org/img/wn/10d.png" alt="weather" className="forecast-daily__icon" />
        </div>
        <div className="forecast-daily__temp">{props.temp}°</div>

    </div>
}