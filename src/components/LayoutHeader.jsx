import React from 'react';
import Clock from '../Clock';

function LayoutHeader(){
    return(
        <div className="layoutHeader">
            <div className="country"></div>
            <div className="city"></div>
            <div className="time">
                <Clock />
            </div>
        </div>
    )
}

export default LayoutHeader;