import React from 'react';
import '../layout.css';

function Country() {
    return(
        <div className="country">
            <div className="flag">
                <img src={process.env.PUBLIC_URL + '/flags/portugal.png'} alt="portugal"></img>
            </div>
            <div className="countryName">
               <p>Portugal</p>
            </div>
        </div>
    )
}

export default Country;