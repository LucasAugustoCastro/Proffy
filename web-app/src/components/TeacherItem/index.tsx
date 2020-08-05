import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/40044388?s=460&u=a3d116d17781ed048fa493bfb48e19ad5eb1a63f&v=4" alt="Lucas Castro"/>
        <div>
          <strong>Lucas Castro</strong>
          <span>Química</span>
        </div>
      
      </header>

      <p>

      Entusiasta das melhores tecnologias de química avançada.
      <br/><br/>
      Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.

      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>

    </article>
  )
}

export default TeacherItem;