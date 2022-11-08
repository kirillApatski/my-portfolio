import React from 'react';
import style from './Contacts.module.css'
import container from '../../styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={style.contactsWrapp}>
            <div className={`${container.container} ${style.contactsContainer}`}>
                <h4>Контакты</h4>
                <form action="" className={style.contactsForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea ></textarea>
                </form>
                <button className={style.btn}>Отправить</button>
            </div>
        </div>
    );
};

