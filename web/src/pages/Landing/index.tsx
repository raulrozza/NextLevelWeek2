import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Images
import logo from '../../assets/images/logo.svg';
import landing from '../../assets/images/landing.svg';

// Icons
import study from '../../assets/images/icons/study.svg';
import giveClasses from '../../assets/images/icons/give-classes.svg';
import purpleHeart from '../../assets/images/icons/purple-heart.svg';

import api from '../../services/api';

import './styles.css';

const Landing: React.FC = () => {
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await api.get('/connections');

                setTotalConnections(data.total);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logo} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={landing} alt="Plataforma de estudos" className="hero-image"/>

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={study} alt="Estudar"/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClasses} alt="Dar Aulas"/>
                        Dar Aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de {totalConnections} conexões. <img src={purpleHeart} alt="Coração Roxo"/>
                </span>
            </div>
        </div>
    );
}

export default Landing;
