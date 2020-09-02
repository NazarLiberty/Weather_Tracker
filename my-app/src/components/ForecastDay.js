import React from 'react';
import '../styles/ForecastDay.scss'
import { setTime } from '../utils/setTime'
import ForecastHourly from './ForecastHourly'

export default function ForecastDay(props) {
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
