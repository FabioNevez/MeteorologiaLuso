import React from 'react';
import '../style.css';
import {Link} from 'react-router-dom';

function Header (){
    return (
    <nav>
        <div className="logo">
        <Link to={'/'}><h1>Info Lusofonia</h1></Link>
        </div>
        <ul>
        <Link to={'/About'}><li>About</li></Link>
        </ul>
    </nav>
    )
}

export default Header;