import React from 'react';
import './styles/App.css';
import Wrapper from './components/Content'
import LocationSearchInput from './components/Autoselect';
export let apiKey = '&appid=ae64f4f04a5e48e2fc0edabf290d80d0'
export let originUrl = 'https://api.openweathermap.org/data/2.5/onecall?'
var moment = require('moment');


export default function App() {
    var day = moment.unix(1590663600);
    console.log(day)
    return <>
        <Wrapper />
        <LocationSearchInput />
    </>
}








