import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { ITeacher } from '../../components/TeacherItem';
import Select from '../../components/Select';
import Input from '../../components/Input';

import './styles.css';
import api from '../../services/api';

const TeacherList: React.FC = () => {
    const [subject, setSubject] = useState("");
    const [weekday, setWeekday] = useState("");
    const [time, setTime] = useState("");

    const [teachers, setTeachers] = useState<ITeacher[]>([]);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        try {
            const { data } = await api.get('/classes', {
                params: {
                    subject,
                    weekday,
                    time
                }
            })

            setTeachers(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffies disponíveis.">
                <form id="search-teachers" onSubmit={handleSubmit}>
                    <Select
                        label="Matéria"
                        name="subject"
                        value={subject}
                        onChange={event => setSubject(event.target.value)}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'História', label: 'História' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Filosofia', label: 'Filosofia' },
                            { value: 'Química', label: 'Química' },
                        ]}
                    />

                    <Select
                        label="Dia da Semana"
                        name="weekday"
                        value={weekday}
                        onChange={event => setWeekday(event.target.value)}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda' },
                            { value: '2', label: 'Terça' },
                            { value: '3', label: 'Quarta' },
                            { value: '4', label: 'Quinta' },
                            { value: '5', label: 'Sexta' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />

                    <Input label="Hora" type="time" name="time" value={time} onChange={event => setTime(event.target.value)} />

                    <button type="submit">Buscar</button>
                </form>
            </PageHeader>

            <main>
                {teachers.map(teacher => <TeacherItem key={teacher.id} teacher={teacher} />)}
            </main>
        </div>
    );
}

export default TeacherList;
