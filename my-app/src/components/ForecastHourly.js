import React from 'react'

export default function ForecastHourly(props) {
    return <div className="forecast-daily__hour">
        <div className="forecast-daily__time">{props.time}</div>
        <div className="forecast-daily__icon-b">
            <img src={"https://openweathermap.org/img/wn/" + props.icon + ".png"} alt="weather" className="forecast-daily__icon" />
        </div>
        <div className="forecast-daily__temp">{props.temp}°</div>

    </div>
}