import React from 'react';
import '../styles/Forecast.scss'
import '../styles/Content.scss'
import { setTime } from './Content'

export default function Forecast(props) {
    let week = [];
    let elClass = 'forecast '
    if (props.status) {
        if (!props.activeTab)
            elClass += ' forecast--active'
        props.status.daily.map((e, i) => {
            if (!props.loader) {
                if (i > 0 && i < 7) week.push(
                    <ForecastWeek
                        loader={props.loader}
                        day={setTime(e.dt).day.slice(0, 3)}
                        temp={Math.round(e.temp.day - 273.15)}
                        icon={e.weather[0].icon}
                        key={i}
                    />)
                else return null
            }
            else return null
            return null
        })

    }

    return <div className={elClass + " " + props.theme.backgroundColor}>
        {props.current &&
            <ForecastToday
                icon={props.current.weather[0].icon}
                temp={Math.round(props.current.temp - 273.15)}
            />}
        {week}
    </div>
}
function ForecastToday(props) {
    return <div className="forecast__today">
        <div className="forecast__icon forecast__icon-b--today">
            <img src={"https://openweathermap.org/img/wn/" + props.icon + "@2x.png"} className="forecast__icon" alt="weather" />
        </div>
        <div className="forecast__today-group">
            <div className="forecast__day forecast__day--today">
                Today
        </div>
            <div className="forecast__temp forecast__temp--today">
                {props.temp}°
            </div>
        </div>
    </div>
}
function ForecastWeek(props) {
    return <>
        {!props.loader &&
            <div className="forecast__week-item animate__animated  animate__backInDown">
                <div className="forecast__day">
                    {props.day}
                </div>
                <div className="forecast__icon-b">
                    <img src={"https://openweathermap.org/img/wn/" + props.icon + "@2x.png"} className="forecast__icon" alt="weather" />
                </div>
                <div className="forecast__temp">
                    {props.temp}°
        </div>
            </div>
        }
    </>
}