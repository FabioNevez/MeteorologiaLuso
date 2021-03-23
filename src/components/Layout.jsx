import React, {useState} from 'react';
import LayoutHeader from './LayoutHeader';
import Meteorology from './Meteorology';
import '../layout.css';

function Layout(props) {
    const[infoCity, setInfoCity]= useState('');

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