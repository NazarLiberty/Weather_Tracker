import React from 'react';
import "./styles/App.css";
import LocationSearchInput from './components/Autoselect'
let cityCurrent = `https://api.openweathermap.org/data/2.5/weather?q=Ternopil`
let apiKey = '&appid=ae64f4f04a5e48e2fc0edabf290d80d0'


export default function App() {
    fetch(cityCurrent + apiKey)
        .then((respone) => {
            return respone.json()
        })
        .then((respData) => {
            console.log(respData)
        })
    return <LocationSearchInput />
}
