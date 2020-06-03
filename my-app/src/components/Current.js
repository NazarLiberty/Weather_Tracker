import React, { useState } from 'react';
import '../styles/Current.scss'
import LocationSearchInput from './Autoselect';
import { setTime } from './Content'

export default function CurrentTime(props) {
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