import moment from 'moment';
import React, { useState, useEffect } from 'react';
import '../layout.css';
import 'moment/locale/pt';
import keys from '../CountriesKey';

function Meteorology(props) {

    let c = keys[0];
 
    switch (props.country){
        case "Angola":
             c = keys[0];
            break;
        case 'Brasil':
             c = keys[1];
            break;
        case 'Cabo Verde':
             c = keys[2];
            break;
        case 'Guiné Bissau':
             c = keys[3];
            break;
        case 'Macau':
             c = keys[4];
            break;
        case 'Moçambique':
             c = keys[5];
            break;
        case 'Portugal':
             c = keys[6];
        break;
        case 'São Tomé e Príncipe':
             c = keys[7];
            break;
        case 'Timor Leste':
             c = keys[8];
            break;
        default:
        console.log('nenhuma cidade escolhida');
    }

    let y = c.cities[0];
 
    switch (props.city){
        case "Bengo":
        case "Acre":
        case "Bafatá": 
        case "Macau":
        case "Niassa":
        case "Aveiro":
        case "Príncipe":
        case "Aileu":
             y = c.cities[0];
            break;
        case "Benguela":
        case "Alagoas":
        case "Bolama":
        case "Manica":
        case "Beja":
        case "São Tomé":
        case "Ainaro":
             y = c.cities[1];
            break;
        case "Bie":
        case "Amazonas":
        case "Biombo":
        case "Gaza":
        case "Braga":
        case "Baucau":
             y = c.cities[2];
            break;
        case "Cabinda":
        case "Amapá":
        case "Bissau":
        case "Inhambane":
        case "Bragança":
        case "Bobonaro":
             y = c.cities[3];
            break;
        case "Kuando Kubango":
        case "Bahia":
        case "Cacheu":
        case "Maputo":
        case "Coimbra":
        case "Cova Lima":
             y = c.cities[4];
            break;
        case "Cunene":
        case "Ceará":
        case "Gabú":
        case "Nampula":
        case "Évora":
        case "Díli":
             y = c.cities[5];
            break;
        case "Kwanza Norte":
        case "Distrito Federal":
        case "Oio":
        case "Cabo Delgado":
        case "Faro":
        case "Ermera":
             y = c.cities[6];
            break;
        case "Kwanza Sul":
        case "Goiás":
        case "Quinara":
        case "Zambézia":
        case "Guarda":
        case "Lautein":
             y = c.cities[7];
            break;
        case "Huambo":
        case "Maranhão":
        case "Tombali":
        case "Sofala":
        case "Leiria":
        case "Liquiça":
             y = c.cities[8];
            break;
        case "Huila":
        case "Minas Gerais":
        case "Tete":
        case "Lisboa":
        case "Manufahi":
             y = c.cities[9];
            break;
        case "Lunda Norte":
        case "Mato Grosso Do Sul":
        case "Portalegre":
        case "Manatuto":
             y = c.cities[10];
            break;
        case "Lunda Sul":
        case "Mato Grosso":
        case "Porto":
        case "Oekusi-Ambenu":
             y = c.cities[11];
            break;
        case "Luanda":
        case "Pará":
        case "Santarém":
        case "Viqueque":
             y = c.cities[12];
            break;
        case "Malanje":
        case "Paraíba":
        case "Setúbal":
             y = c.cities[13];
            break;
        case "Moxico":
        case "Pernambuco":
        case "Viana do Castelo":
             y = c.cities[14];
            break;
        case "Namibe":
        case "Piauí":
        case "Vila Real":
             y = c.cities[15];
            break;
        case "Uige":
        case "Paraná":
        case "Viseu":
             y = c.cities[16];
            break;
        case "Zaire":
        case "Rio De Janeiro":
        case "Azores":
             y = c.cities[17];
            break;
        case "Rio Grande Do Norte":
        case "Madeira":
             y = c.cities[18];
            break;
        case "Rondônia":
             y = c.cities[19];
            break;
        case "Roraima":
             y = c.cities[20];
            break;
        case "Rio Grande Do Sul":
             y = c.cities[21];
            break;
        case "Santa Catarina":
             y = c.cities[22];
            break;
        case "Sergipe":
             y = c.cities[23];
            break;
        case "São Paulo":
             y = c.cities[24];
            break;
        case "Tocantins":
             y = c.cities[25];
            break;
        default:
        console.log('nenhuma cidade escolhida');
    }
    let k = y.key;

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [weather, setWeather] = useState([]);


    useEffect(() => {
        // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
        // headers.append('Access-Control-Allow-Credentials', 'true');

        // , method: "GET", credentials: 'include'
        
        fetch(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${k}?apikey=${process.env.REACT_APP_SECRET_KEY}&language=en-US&details=false&metric=true`, {mode: 'no-cors'})
        .then(res => res.json())
        .then(
            (result) => {
                // setCity('');
                setIsLoaded(true);
                setWeather(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [props.city])

          const weekday = new Array(7);
          weekday[0] = "Sunday";
          weekday[1] = "Monday";
          weekday[2] = "Tuesday";
          weekday[3] = "Wednesday";
          weekday[4] = "Thursday";
          weekday[5] = "Friday";
          weekday[6] = "Saturday";

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
                    <div className="fullTemp">
                    <img className="icon" src={`https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${(weather.DailyForecasts[0].Day.Icon < 10) ? '0' + weather.DailyForecasts[0].Day.Icon : weather.DailyForecasts[0].Day.Icon}-s.png`} alt="meteo icon"></img>
                    <div className="temp"><p>{Math.floor(weather.DailyForecasts[0].Temperature.Maximum.Value)}°C</p></div>
                    </div>
                    </div>
           
                <div className="card" id="dayTwo">
                    <div className="weekDay">
                        <h2>{moment().add(1, 'days').format('D, MMMM')}</h2>
                        <h3>{moment().add(1, 'days').format('dddd')}</h3>
                    </div>
                    <div className="fullTemp">
                    <img className="icon" src={`https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${(weather.DailyForecasts[1].Day.Icon < 10) ? '0' + weather.DailyForecasts[1].Day.Icon : weather.DailyForecasts[1].Day.Icon}-s.png`} alt="meteo icon"></img>
                    <div className="temp"><p>{Math.floor(weather.DailyForecasts[1].Temperature.Maximum.Value)}°C</p></div>
                    </div>
                </div>
                
                <div className="card" id="dayThree">
                    <div className="weekDay">
                        <h2>{moment().add(2, 'days').format('D, MMMM')}</h2>
                        <h3>{moment().add(2, 'days').format('dddd')}</h3>
                    </div>
                    <div className="fullTemp">
                    <img className="icon" src={`https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${(weather.DailyForecasts[2].Day.Icon < 10) ? '0' + weather.DailyForecasts[2].Day.Icon : weather.DailyForecasts[2].Day.Icon}-s.png`} alt="meteo icon"></img>
                    <div className="temp"><p>{Math.floor(weather.DailyForecasts[2].Temperature.Maximum.Value)}°C</p></div>
                    </div>
                </div>
                
                <div className="card" id="dayFour">
                    <div className="weekDay">
                        <h2>{moment().add(3, 'days').format('D, MMMM')}</h2>
                        <h3>{moment().add(3, 'days').format('dddd')}</h3>
                    </div>
                    <div className="fullTemp">
                    <img className="icon" src={`https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${(weather.DailyForecasts[3].Day.Icon < 10) ? '0' + weather.DailyForecasts[3].Day.Icon : weather.DailyForecasts[3].Day.Icon}-s.png`} alt="meteo icon"></img>
                    <div className="temp"><p>{Math.floor(weather.DailyForecasts[3].Temperature.Maximum.Value)}°C</p></div>
                    </div>
                </div>
                <div className="card" id="dayFive">
                    <div className="weekDay">
                        <h2>{moment().add(4, 'days').format('D, MMMM')}</h2>
                        <h3>{moment().add(4, 'days').format('dddd')}</h3>
                    </div>
                    <div className="fullTemp">
                    <img className="icon" src={`https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${(weather.DailyForecasts[4].Day.Icon < 10) ? '0' + weather.DailyForecasts[4].Day.Icon : weather.DailyForecasts[4].Day.Icon}-s.png`} alt="meteo icon"></img>
                    <div className="temp"><p>{Math.floor(weather.DailyForecasts[4].Temperature.Maximum.Value)}°C</p></div>
                    </div>
                </div>
            </div>
            ) : ('')}
            </div>
        );
    }
}

export default Meteorology;