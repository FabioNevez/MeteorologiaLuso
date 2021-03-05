import React from 'react';
import '../style.css';

function Header (){
    return (
    <nav>
        <div className="logo">
            <h1>Lusofonia Info</h1>
        </div>
        <ul>
            <li><a href="#">About</a></li>
        </ul>
    </nav>
    )
}

export default Header;