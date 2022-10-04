import React from 'react';
import style from './Nav.module.css'
export const Nav = () => {
    return (
        <ul className={style.navBlock}>
            <li><a href="#">Главная</a></li>
            <li><a href="#">Скилы</a></li>
            <li><a href="#">Работы</a></li>
            <li><a href="#">Контакты</a></li>
        </ul>
    );
};

