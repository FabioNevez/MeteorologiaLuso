import React, { useState } from 'react';
import Clock from '../Clock';
import Country from './Country';
import countries from '../Countries';
import CityList from './List';
import Meoteorology from './Meteorology';
import '../layout.css';

function LayoutHeader(){
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

    return(
        <div className="layoutHeader">
            <div className="country">
                <Country />
            </div>
            <div className="city">
                <button type="button" className="clickCity" onClick={handleClick}>{choose}</button>
                    <div className="chooseCity" style={{display: isClicked ? "block" : "none"}}>
                    <ul>
                    {countries[7].states.map(createList)}
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