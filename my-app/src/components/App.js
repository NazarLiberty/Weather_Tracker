import React, { useState } from 'react';
import '../styles/App.scss';
import Foreacast from './Forecast'
import { setTime } from '../utils/setTime'
import CurrentTime from './Current'
import ForecastDay from './ForecastDay'

export let apiKey = '&appid=ae64f4f04a5e48e2fc0edabf290d80d0'
export let originUrl = 'https://api.openweathermap.org/data/2.5/onecall?'

export default function App() {
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
        console.log(data)
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
    return <>
        <>
            <div className={"background " + themesList().backgroundImage}></div>
            <div className="wrapper ">
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

                    {hourly && <ForecastDay
                        theme={themesList()}
                        activeTab={activeTab}
                        hours={hourly}
                    />}
                </div>
            </div>

        </>
    </>
}







