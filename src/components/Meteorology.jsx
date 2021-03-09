import moment from 'moment';
import React, { useState, useEffect } from 'react';
import '../layout.css';
import 'moment/locale/pt';

function Meteorology() {

    // const api = {
    //     key: '96814042cd586e3292132202c9b70bcf',
    //     base: 'https://api.openweathermap.org/data/2.5/'
    // }

    // const api = {
    //     key: '96814042cd586e3292132202c9b70bcf',
    //     base: 'https://api.openweathermap.org/data/2.5/'
    // }

     // useEffect(() => {
    //     fetch(`${api.base}weather?q=Lisbon&units=metric&appid=${api.key}`)
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //             // setCity('');
    //             setIsLoaded(true);
    //             setWeather(result);
    //            // console.log(result);
    //         },
    //         (error) => {
    //             setIsLoaded(true);
    //             setError(error);
    //         }
    //     )
    // }, [])

    // useEffect(() => {
    //     fetch(`${api.base}forecast?q=Lisbon&units=metric&appid=${api.key}`)
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //             // setCity('');
    //             setIsLoaded(true);
    //             setWeather(result);
    //             console.log(result);
    //         },
    //         (error) => {
    //             setIsLoaded(true);
    //             setError(error);
    //         }
    //     )
    // }, [])

    // <img className="icon" src={`http://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`}></img> 

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
   // const [city, setCity] = useState('');
    const [weather, setWeather] = useState([]);

    const api = {
        key: '4xon6ErtNw0MSLbFrFgR8pfhvB2GH6J4'
    }

    useEffect(() => {
        fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/274087?apikey=${api.key}&language=en-US&details=false&metric=true`)
        .then(res => res.json())
        .then(
            (result) => {
                // setCity('');
                setIsLoaded(true);
                setWeather(result);
                console.log(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

      const day = new Date();
      const n = day.getDate();

          const weekday = new Array(7);
          weekday[0] = "Sunday";
          weekday[1] = "Monday";
          weekday[2] = "Tuesday";
          weekday[3] = "Wednesday";
          weekday[4] = "Thursday";
          weekday[5] = "Friday";
          weekday[6] = "Saturday";

      const wkDay = weekday[day.getDay()];

    if(error){
        return <div>Error: {error.message}</div>
    }  else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
        return(
            <div className="meteorologyLayout">
            {(typeof weather.DailyForecasts != "undefined") ? ( 
            <div className="meteorologyBox">
                    <div className="card">
                    <div className="weekDay" id="dayOne">
                        <h2>{moment().format('D, MMMM')}</h2>
                        <h3>{moment().format('dddd')}</h3>
                    </div>
                    
                    <img className="icon" src={`https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/0${weather.DailyForecasts[0].Day.Icon}-s.png`}></img>
                    <div className="temp"><p>{Math.floor(weather.DailyForecasts[0].Temperature.Maximum.Value)}°C</p></div>
                    </div>
           
                <div className="card" id="dayTwo">
                    <div className="weekDay">
                        <h2>{moment().add(1, 'days').format('D, MMMM')}</h2>
                        <h3>{moment().add(1, 'days').format('dddd')}</h3>
                    </div>
                    <img className="icon" src={`https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/0${weather.DailyForecasts[1].Day.Icon}-s.png`}></img>
                    <div className="temp"><p>{Math.floor(weather.DailyForecasts[1].Temperature.Maximum.Value)}°C</p></div>
                </div>
                
                <div className="card" id="dayThree">
                    <div className="weekDay">
                        <h2>{moment().add(2, 'days').format('D, MMMM')}</h2>
                        <h3>{moment().add(2, 'days').format('dddd')}</h3>
                    </div>
                    <img className="icon" src={`https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/0${weather.DailyForecasts[2].Day.Icon}-s.png`}></img>
                    <div className="temp"><p>{Math.floor(weather.DailyForecasts[2].Temperature.Maximum.Value)}°C</p></div>
                </div>
                
                <div className="card" id="dayFour">
                    <div className="weekDay">
                        <h2>{moment().add(3, 'days').format('D, MMMM')}</h2>
                        <h3>{moment().add(3, 'days').format('dddd')}</h3>
                    </div>
                    <img className="icon" src={`https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/0${weather.DailyForecasts[3].Day.Icon}-s.png`}></img>
                    <div className="temp"><p>{Math.floor(weather.DailyForecasts[3].Temperature.Maximum.Value)}°C</p></div>
                </div>
                <div className="card" id="dayFive">
                    <div className="weekDay">
                        <h2>{moment().add(4, 'days').format('D, MMMM')}</h2>
                        <h3>{moment().add(4, 'days').format('dddd')}</h3>
                    </div>
                    <img className="icon" src={`https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/0${weather.DailyForecasts[4].Day.Icon}-s.png`}></img>
                    <div className="temp"><p>{Math.floor(weather.DailyForecasts[4].Temperature.Maximum.Value)}°C</p></div>
                </div>
            </div>
            ) : ('')}
            </div>
        );
    }
}

export default Meteorology;