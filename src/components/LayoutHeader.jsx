import React, { useState } from 'react';
import Clock from '../Clock';
import Country from './Country';
import countries from '../Countries';
import '../layout.css';

function LayoutHeader(props){
    const[choose, setChosen] = useState("Choose city");
    const [isClicked, setClick] = useState(false);

    function handleClick(){
        setClick(true); 
    }

    function clickCity (event) {
        setClick(false);
        setChosen(event.target.textContent);
    }

    function City(props){
        return(
            <li onClick={clickCity}>{props.cityName}</li>
        )
    }

    function createList(city){
        return <City 
        key={countries.id}
        cityName={city} />
    }

     let x = '';
 
        switch (props.LayoutName){
            case "Angola":
                 x = countries[0];
                break;
            case 'Brasil':
                 x = countries[1];
                break;
            case 'Cabo Verde':
                 x = countries[2];
                break;
            case 'Guiné Bissau':
                 x = countries[3];
                break;
            case 'Macau':
                 x = countries[4];
                break;
            case 'Moçambique':
                 x = countries[5];
                break;
            case 'Portugal':
                 x = countries[6];
            break;
            case 'São Tomé e Príncipe':
                 x = countries[7];
                break;
            case 'Timor Leste':
                 x = countries[8];
                break;
        
        }

    return(
        <div className="layoutHeader">
            <div className="country" id="nname">
                <Country name={props.LayoutName}/>
            </div>
            <div className="city">
                <button type="button" className="clickCity" onClick={handleClick}>{choose}</button>
                    <div className="chooseCity" style={{display: isClicked ? "block" : "none"}}>
                    <ul>
                        {x.states.map(createList)}
                    </ul>
                    </div>
            </div>
            <div className="time">
                <Clock />
            </div>
        </div>
    )
}

export default LayoutHeader;