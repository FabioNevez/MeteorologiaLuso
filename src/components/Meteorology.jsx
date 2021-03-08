import React, { useState, useEffect } from 'react';
import '../layout.css';

function Meteorology() {

    const api = {
        key: '96814042cd586e3292132202c9b70bcf',
        base: 'https://api.openweathermap.org/data/2.5/'
    }

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
   // const [city, setCity] = useState('');
    const [weather, setWeather] = useState([]);


    useEffect(() => {
        fetch(`${api.base}weather?q=Lisbon&units=metric&appid=${api.key}`)
        .then(res => res.json())
        .then(
            (result) => {
                // setCity('');
                setIsLoaded(true);
                setWeather(result);
               // console.log(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])
        

    if(error){
        return <div>Error: {error.message}</div>
    }  else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
        return(
            <div className="meteorologyLayout">
            {(typeof weather.main != "undefined") ? ( 
            <div>
                    <div className="card">
                    <div className="weekDay" id="dayOne">
                        <h2>Monday</h2>
                    </div>
                    <img className="icon" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img>
                    <div className="temp"><p>{Math.floor(weather.main.temp)}°C</p></div>
                    </div>
            </div>
            ) : ('')}
                <div className="card" id="dayTwo">
                    <div className="weekDay">
                        <h2>Tuesday</h2>
                    </div>
                    <img className="icon"></img>
                    <div className="temp"><p>20c</p></div>
                </div>
                <div className="card" id="dayThree">
                    <div className="weekDay">
                        <h2>Wednesday</h2>
                    </div>
                    <img className="icon"></img>
                    <div className="temp"><p>20c</p></div>
                </div>
                <div className="card" id="dayFour">
                    <div className="weekDay">
                        <h2>Wednesday</h2>
                    </div>
                    <img className="icon"></img>
                    <div className="temp"><p>20c</p></div>
                </div>
                <div className="card" id="dayFive">
                    <div className="weekDay">
                        <h2>Wednesday</h2>
                    </div>
                    <img className="icon"></img>
                    <div className="temp"><p>20c</p></div>
                </div>
            </div>
        );
    }
}

export default Meteorology;