import React from 'react';
import style from './Nav.module.scss'
import {NavLink} from "react-router-dom";

export const Nav = () => {
    return (
        <nav>
            <ul className={style.navBlock}>
                <li><NavLink className={({isActive}) => isActive ? `${style.navBlock} ${style.active}` : ''} to={'/home'}>Home</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? style.active : style.navBlock} to={'/about'}>About</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? style.active : style.navBlock} to={'skills'}>Skills</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? style.active : style.navBlock} to={'/project'}>Projects</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? style.active : style.navBlock} to={'/contact'}>Contact</NavLink></li>
            </ul>
        </nav>
    );
};

