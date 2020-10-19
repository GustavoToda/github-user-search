import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import './styles.scss';

const Home = () => {
    return (
        <>
            <Navbar />
            <div >
                <h1 className="home-title">
                Desafio do Capítulo 3, Bootcamp DevSuperior
                </h1>
            </div>
            <div >
                <h1 className="home-subtitle">
                Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br />
                Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.<br />
                Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: antforfigma@gmail.com<br />
                </h1>
            </div>
            <Link to="/search">
                <div className="btn"> 
                    <Button text="Começar"/>
                </div>
            </Link>
        </>
    );
}

export default Home;