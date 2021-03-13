import React, {useState, useEffect} from 'react';
import moment from 'moment';
import 'moment-timezone';


function Clock(props){

    const angola = moment().tz("Africa/Luanda").format('LTS');
    const brasil = moment().tz("America/Sao_Paulo").format('LTS');
    const caboVerde = moment().tz("Atlantic/Cape_Verde").format('LTS');
    const guineBissau = moment().tz("Africa/Bissau").format('LTS');
    const macau = moment().tz("Asia/Macau").format('LTS');
    const mocambique = moment().tz("Africa/Maputo").format('LTS');
    const portugal = moment().tz("Europe/Lisbon").format('LTS');
    const saoTomePrincipe = moment().tz("Africa/Sao_Tome").format('LTS');
    const timorLeste = moment().tz("Asia/Dili").format('LTS');

    let q = '';

    switch(props.CountryName){
        case 'Angola':
            q = angola;
            break;
        case 'Brasil':
            q = brasil;
            break;
        case 'Cabo Verde':
            q = caboVerde;
            break;
        case 'Guiné Bissau':
            q = guineBissau;
            break;
        case 'Macau':
            q = macau;
            break;
        case 'Moçambique':
            q = mocambique;
            break;
        case 'Portugal':
            q = portugal;
        break;
        case 'São Tomé e Príncipe':
            q = saoTomePrincipe;
            break;
        case 'Timor Leste':
            q = timorLeste;
            break;
    }

    const[time, setTime] = useState('');


    useEffect(() => {

        const timer = setInterval((q) => setTime(q), 1000);
        setTime(q);

        return () => clearInterval(timer);

    });

    return(
        <div className="time">
            <p>{time}</p>
            </div>
    )
}

export default Clock;