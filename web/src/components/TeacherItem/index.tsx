import React from 'react';

import whatsapp from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

export interface ITeacher{
    avatar: string;
    bio: string;
    cost: number;
    id: number;
    name: string;
    subject: string;
    user_id: string;
    whatsapp: string;
}

const TeacherItem: React.FC<{ teacher: ITeacher }> = ({ teacher }) => {
    const createNewConnection = async () => {
        try {
            await api.post('/connections', {
                user_id: teacher.user_id
            })
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name} />

                <div>
                    <strong>
                        {teacher.name}
                    </strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>
                {teacher.bio}
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {teacher.cost}</strong>
                </p>
                <a onClick={() => createNewConnection()} href={`https://wa.me/${teacher.whatsapp}`} rel="noopener noreferrer" target="_blank">
                    <img src={whatsapp} alt="Whatsapp"/>
                    Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;
