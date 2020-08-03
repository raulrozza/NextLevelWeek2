import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import './styles.css';

const TeacherList: React.FC = () => {
  return (
      <div id="page-teacher-list" className="container">
          <PageHeader title="Estes são os proffies disponíveis.">
              <form id="search-teachers">
                  <div className="input-block">
                      <label htmlFor="subject">Matéria</label>
                      <input type="text" id="subject" />
                  </div>

                  <div className="input-block">
                      <label htmlFor="weekday">Dia da Semana</label>
                      <input type="text" id="weekday" />
                  </div>

                  <div className="input-block">
                      <label htmlFor="time">Hora</label>
                      <input type="text" id="time" />
                  </div>
              </form>
          </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
      </div>
  );
}

export default TeacherList;
