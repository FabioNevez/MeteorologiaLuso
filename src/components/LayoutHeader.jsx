import React from 'react';
import Country from './Country';
import '../layout.css';
import Cityy from './Cityy';
import Clock from './Clock';

function LayoutHeader(props){

    return(
        <div className="layoutHeader">
                
                <Country name={props.LayoutName} />
                <Cityy 
                countryyName={props.LayoutName} cityChosenn={props.cityChosen} />
                <Clock CountryName={props.LayoutName} />
        </div>
    )
}

export default LayoutHeader;