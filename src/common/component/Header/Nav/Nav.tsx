import React from 'react';
import style from './Nav.module.css'
import {Link} from "react-router-dom";

export const Nav = () => {
    return (
        <nav>
            <ul className={style.navBlock}>
                <li><Link to={'/home'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'skills'}>Skills</Link></li>
                <li><Link to={'/project'}>Projects</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
            </ul>
        </nav>
    );
};

