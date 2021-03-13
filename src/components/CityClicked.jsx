import React from 'react';

function CityClicked(props){
    return <li onClick={props.onClick}>{props.cityClickedName}</li>
}

export default CityClicked;