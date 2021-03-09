import React from 'react';
import '../layout.css';

function Country(props) {

    
    function changeURLname(props){

        let urlName = '';

        switch (props.value){
            case 'Portugal':
                return urlName = 'portugal';
                break;
            case "Angola":
                return urlName = 'angola';
                break;
            case 'Brasil':
                return urlName = 'brazil';
                break;
            case 'Cabo Verde':
                return urlName = 'cape-verde';
                break;
            case 'Guiné Bissau':
                return urlName = 'guinea-bissau';
                break;
            case 'Macau':
                return urlName = 'macao';
                break;
            case 'Moçambique':
                return urlName = 'mozambique';
                break;
            case 'São Tomé e Príncipe':
                return urlName = 'sao-tome-and-prince';
                break;
            case 'Timor Leste':
                return urlName = 'east-timor';
                break;
        
        }
    }
    
    return(
        <div className="country">
            <div className="flag">
                <img src={process.env.PUBLIC_URL + `/flags/${changeURLname(props)}.png`} alt={props.name}></img>
            </div>
            <div className="countryName">
               <p>{props.LayoutName}</p>
            </div>
        </div>
    )
}

export default Country;