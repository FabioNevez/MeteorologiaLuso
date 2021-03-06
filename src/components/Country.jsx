import React from 'react';
import '../layout.css';

function Country(props) {

    let urlName = '';

    function changeURLname(){

        switch (props.name){
            case 'Portugal':
                return urlName = 'portugal';
            case "Angola":
                return urlName = 'angola';
            case 'Brasil':
                return urlName = 'brazil';
            case 'Cabo Verde':
                return urlName = 'cape-verde';
            case 'Guiné Bissau':
                return urlName = 'guinea-bissau';
            case 'Macau':
                return urlName = 'macao';
            case 'Moçambique':
                return urlName = 'mozambique';
            case 'São Tomé e Príncipe':
                return urlName = 'sao-tome-and-prince';
            case 'Timor Leste':
                return urlName = 'east-timor';
            default:
                console.log('something wrong');
        }
    }
    
    return(
        <div className="country" id="nname">
        <div className="country">
            <div className="flag">
                <img src={process.env.PUBLIC_URL + `/flags/${changeURLname(urlName)}.png`} alt={props.name}></img>
            </div>
            <div className="countryName">
               <p>{props.name}</p>
            </div>
        </div>
        </div>
    )
}

export default Country;