import React from 'react';
import './styles/App.scss';
import Wrapper from './components/Content'

export let apiKey = '&appid=ae64f4f04a5e48e2fc0edabf290d80d0'
export let originUrl = 'https://api.openweathermap.org/data/2.5/onecall?'

export default function App() {
    var timestamp = 1591120800;
    var a = new Date(timestamp * 1000);
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayOfWeek = days[a.getDay()]
    return <>
        <Wrapper />

    </>
}








