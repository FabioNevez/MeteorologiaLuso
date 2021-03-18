import React, {useState, useRef, useEffect} from 'react';
import SubHeader from './SubHeader';
import '../style.css';
import {Link} from 'react-router-dom';


function Header (){

    const[active, setActive] = useState(true);


    function HandleClickCountry(ref){
        useEffect(() => {
    
            function handleClickOutside(event){
                if(ref.current && !ref.current.contains(event.target)){
                    setActive(true);
                }
            }
    
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
    
        }, [ref]);
    }
    const wrapperRef = useRef(null);
    HandleClickCountry(wrapperRef);

    return (
        <div>
    <nav>
        <div className="logo">
        <Link to={'/'}><h1>Info Lusofonia</h1></Link>
        </div>
        <ul>
        <Link to={'/About'}><li>About</li></Link>
        </ul>
        <div id="toggle" className={active ? null : 'open'} onClick={() => setActive(!active)}>
            <div id="hamburger">
                <span></span>
                <span></span>
                <span></span>
        </div>
            <div id="cross">
                <span></span>
                <span></span>
                <span></span>
        </div>
        </div>
    </nav>
    <SubHeader active={active} setActive={setActive} ref={wrapperRef} />
    </div>
    )
}

export default Header;