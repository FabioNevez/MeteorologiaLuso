import React, {useState} from 'react';
import '../style.css';
import {Link} from 'react-router-dom';

function SubHeader (props) {

    const [subHeaderState, setSubHeaderState] = useState({
        activeObject: null,
        objects: [
            {id: 1, name: "Portugal", img: '/flags/portugal.png', link: "Portugal"}, 
            {id: 2, name: "Angola", img: '/flags/angola.png', link: "Angola"}, 
            {id: 3, name: "Brasil", img: '/flags/brazil.png', link: "Brasil"}, 
            {id: 4, name: "Cabo Verde", img: '/flags/cape-verde.png', link: "Cabo-verde"}, 
            {id: 5, name: "Timor Leste", img: '/flags/east-timor.png', link: "Timor-leste"}, 
            {id: 6, name: "Guiné Bissau", img: '/flags/guinea-bissau.png', link: "Guine-bissau"}, 
            {id: 7, name: "Macau", img: '/flags/macao.png', link: "Macau"}, 
            {id: 8, name: "Moçambique", img: '/flags/mozambique.png', link: "Mocambique"}, 
            {id: 9, name: "São Tomé e Principe", img: '/flags/sao-tome-and-prince.png', link: "Sao-tome-principe"}]
    });

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

    function closeMenu(){
        props.setActive(true)
    }

    let menu = 'subheader';
    if(props.active !== true){
        menu += ' show';
    }
    

    return (
        <div className={menu}>
            {subHeaderState.objects.map((elements, index) => (
                <Link key={elements.id} to={`/${elements.link}`} onClick={closeMenu} >
                <div className={toggleClass(index)} onClick={() => {toggle(index);}}>
                    <img src={process.env.PUBLIC_URL + `${elements.img}`} alt={elements.name}></img>
                    <p>{elements.name}</p>
                </div>
                </Link> 
            ))}
        </div>
    )
}

export default SubHeader;