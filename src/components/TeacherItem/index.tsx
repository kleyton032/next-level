import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';


function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://dummyimage.com/100x100/000/fff.jpg" alt="avatar" />
                <div>
                    <strong>Kleyton João</strong>
                    <span>Tecnologia</span>
                </div>
            </header>
            <p>
                simply dummy text of the printing and typesetting industry.
        <br /><br />
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
        </p>
            <footer>
                <p>
                    Preço/hora
                <strong>R$40,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whastapp" />Entrar em contato
            </button>
            </footer>

        </article>
    )
}

export default TeacherItem;