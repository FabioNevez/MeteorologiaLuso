import React from 'react';
import worldImage from '../icons/world.png'
import '../style.css'

function Home() {

    return (
        <div className="home">
        <h1>Olá!</h1>
        <h2>Escolha um país da Lusofonia que deseja saber a previsão meteorológica!</h2>
        <img src={worldImage} alt="World"></img>
        </div>
    )
}

export default Home;