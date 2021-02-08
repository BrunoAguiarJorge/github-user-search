import React from 'react';
import './styles.css';
import './../../../src/App.css';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>
            <div className="home-content">
                <h1 className="home-title">
                    Desafio do Capítulo 3, <br />
                    Bootcamp DevSuperior
                </h1>
           </div>
            <div className="home-description-div">
                <p className="home-description-title">
                Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br />
                Favor observar as instruções passadas no capítulo sobre a elaboração<br /> 
                deste projeto.Este design foi adaptado a partir de Ant Design System for Figma, de <br /> 
                Mateusz Wierzbicki: 
                <a rel="stylesheet" href="antforfigma@gmail.com"> antforfigma@gmail.com </a> 
                </p>
                </div>
            <div className="btn-home">
                <Link to="/search">
           <Button text="Começar" />
           </Link>
           </div>
        </>
    );
}

export default Home;