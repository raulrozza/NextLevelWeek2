import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import api from '../../services/api';

import './styles.css';

interface ISchedule {
    weekday: string;
    from: string;
    to: string;
}

const TeacherForm: React.FC = () => {
    const { push } = useHistory();
    const [scheduleItems, setScheduleItems] = useState<ISchedule[]>([]);

    // Formfields
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [bio, setBio] = useState("");
    const [subject, setSubject] = useState("");
    const [cost, setCost] = useState("");

    const setScheduleItemValue = (index: number, field: string, value: string) => {
        setScheduleItems(scheduleItems.map((item, position) => {
            if(index === position) {
                return {
                    ...item,
                    [field]: value,
                }
            }
            return item;
        }))
    }

    const handleAddSchedule = () => {
        setScheduleItems([...scheduleItems, { weekday: '0', from: '', to: '' }]);
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        try {
            await api.post('/classes', {
                name,
                avatar,
                whatsapp,
                bio,
                subject,
                cost: Number(cost),
                schedule: scheduleItems,
            })

            push('/');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher este formulário de inscrição"
            />

            <main>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input name="name" label="Nome completo" type="text" value={name} onChange={event => setName(event.target.value)} />
                        <Input name="avatar" label="Avatar" type="text" value={avatar} onChange={event => setAvatar(event.target.value)} />
                        <Input name="whatsapp" label="Whatsapp" type="text" value={whatsapp} onChange={event => setWhatsapp(event.target.value)} />
                        <Textarea name="bio" label="Biografia" value={bio} onChange={event => setBio(event.target.value)} />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>
                        <Select
                            name="subject"
                            label="Matéria"
                            value={subject} onChange={event => setSubject(event.target.value)}
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
                        <Input name="cost" label="Custo da sua hora por aula" type="text" value={cost} onChange={event => setCost(event.target.value)} />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" onClick={handleAddSchedule}>+ Novo horário</button>
                        </legend>


                        {scheduleItems.map((schedule, index) => (
                            <div className="schedule-item" key={`schedule-${index}`}>
                                <Select
                                    label="Dia da Semana"
                                    name="weekday"
                                    value={schedule.weekday}
                                    onChange={event => setScheduleItemValue(index, 'weekday', event.target.value)}
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
                                <Input label="Das" name="from" type="time" value={schedule.from} onChange={event => setScheduleItemValue(index, 'from', event.target.value)} />
                                <Input label="Até" name="to" type="time" value={schedule.to} onChange={event => setScheduleItemValue(index, 'to', event.target.value)} />
                            </div>
                        ))}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante"/>
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        <button type="submit">Salvar cadastro</button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default TeacherForm;
