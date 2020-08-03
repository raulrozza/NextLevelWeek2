import React from 'react';

import whatsapp from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/38353761?s=460&u=4a5dac6cd588c47b48620feafcb810b8a4e635ec&v=4" alt="Raul Rosá"/>

                <div>
                    <strong>
                        Raul Rosá
                    </strong>
                    <span>História</span>
                </div>
            </header>
            <p>
                Gosta muito da história do passado.
                <br/>
                Se você quer aprender sobre o passado e o futuro, venha ter uma aula comigo. Não que você saberá de algo, mas será uma experiência interessante.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 48,00</strong>
                </p>
                <button type="button">
                    <img src={whatsapp} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;
