import React from 'react';

import PageHeader from "../../components/pageHeader";
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';


import './styles.css';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponiveis">
        <form id="search-teachers">
          
        <Select 
          name="subject" 
          label="Matéria"
          options={[
            { value: 'Artes', label: 'Artes' },
            { value: 'Biologia', label: 'Biologia' },
            { value: 'Matematica', label: 'Matematica' },
            { value: 'Fisica', label: 'Fisica' },
            { value: 'Educação Fisica', label: 'Educação Fisica' },
            { value: 'Ciências', label: 'Ciências' },
            { value: 'Geografia', label: 'Geografia' },
            { value: 'Historia', label: 'Historia' },
            { value: 'Português', label: 'Português' },
            { value: 'Química', label: 'Química' },
            

          ]}
        />

        <Select 
          name="week_day" 
          label="Dia da semana"
          options={[
            { value: '0', label: 'Domingo' },
            { value: '1', label: 'Segunda-feira' },
            { value: '2', label: 'terça-feira' },
            { value: '3', label: 'Quarta-feira' },
            { value: '4', label: 'Quinta-feira' },
            { value: '5', label: 'Sexta-feira' },
            { value: '6', label: 'Sábado' },

          ]}
        />
          <Input type="time" name="time" label="Hora"/>

        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        
      </main>

    </div>

    
  );
};

export default TeacherList;