import React from 'react';
import '../layout.css';

function Meteorology() {
    return(
        <div className="meteorologyLayout">
            <div className="card">
                <div className="weekDay" id="dayOne">
                    <h2>Monday</h2>
                </div>
                <img className="icon"></img>
                <div className="temp"><p>20c</p></div>
            </div>
            <div className="card" id="dayTwo">
                <div className="weekDay">
                    <h2>Tuesday</h2>
                </div>
                <img className="icon"></img>
                <div className="temp"><p>20c</p></div>
            </div>
            <div className="card" id="dayThree">
                <div className="weekDay">
                    <h2>Wednesday</h2>
                </div>
                <img className="icon"></img>
                <div className="temp"><p>20c</p></div>
            </div>
            <div className="card" id="dayFour">
                <div className="weekDay">
                    <h2>Wednesday</h2>
                </div>
                <img className="icon"></img>
                <div className="temp"><p>20c</p></div>
            </div>
            <div className="card" id="dayFive">
                <div className="weekDay">
                    <h2>Wednesday</h2>
                </div>
                <img className="icon"></img>
                <div className="temp"><p>20c</p></div>
            </div>
        </div>
    )
}

export default Meteorology;