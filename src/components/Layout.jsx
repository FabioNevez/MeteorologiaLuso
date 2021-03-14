import React, {useState, useEffect} from 'react';
import LayoutHeader from './LayoutHeader';
import Meteorology from './Meteorology';
import '../layout.css';
import Cityy from './Cityy';

function Layout(props) {
    const[infoCity, setInfoCity]= useState('');

    useEffect(() => {
        console.log(infoCity);
        console.log(setInfoCity);
    })

    return (
        <div className="layout">
            <LayoutHeader LayoutName={props.Cname} cityChosen={setInfoCity} />
            <div className="content">
                <Meteorology country={props.Cname} city={infoCity} cityy={setInfoCity} />
            </div>
        </div>
    )
}
export default Layout;