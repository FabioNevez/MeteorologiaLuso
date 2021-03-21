import React from 'react';
import Layout from '../components/Layout';
import worldImage from '../icons/world.png'
import '../style.css'

function Home() {

    return (
        <div className="home">
        <h1>Olá!</h1>
        <h2>Escolha um país da Lusofonia que deseja saber informações!</h2>
        <img src={worldImage} alt="Wolrd image"></img>
        </div>
    )
}

export default Home;