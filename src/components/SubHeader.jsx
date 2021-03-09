import React, {useState} from 'react';
import '../style.css';
import {Link} from 'react-router-dom';

function SubHeader () {

    const [subHeaderState, setSubHeaderState] = useState({
        activeObject: null,
        objects: [
            {id: 1, name: "Portugal", img: '/flags/portugal.png'}, 
            {id: 2, name: "Angola", img: '/flags/angola.png'}, 
            {id: 3, name: "Brasil", img: '/flags/brazil.png'}, 
            {id: 4, name: "Cape Verde", img: '/flags/cape-verde.png'}, 
            {id: 5, name: "Timor Leste", img: '/flags/east-timor.png'}, 
            {id: 6, name: "Guiné Bissau", img: '/flags/guinea-bissau.png'}, 
            {id: 7, name: "Macau", img: '/flags/macao.png'}, 
            {id: 8, name: "Moçambique", img: '/flags/mozambique.png'}, 
            {id: 9, name: "São Tomé e Principe", img: '/flags/sao-tome-and-prince.png'}]
    })

    function toggle(index){
        setSubHeaderState({...subHeaderState, activeObject: subHeaderState.objects[index] });
    }

    function toggleClass(index){
        if(subHeaderState.objects[index] === subHeaderState.activeObject){
            return "countryBtn active";
        } else {
            return "countryBtn inactive";
        }
    }

    return (
        <div className="subheader">
            {subHeaderState.objects.map((elements, index) => (
                <Link to={`/${elements.name}`}>
                <div key={index} className={toggleClass(index)} onClick={() => {toggle(index);}}>
                    <img src={process.env.PUBLIC_URL + `${elements.img}`} alt={elements.name}></img>
                    <p>{elements.name}</p>
                </div>
                </Link> 
            ))}
        </div>
    )
}

export default SubHeader;