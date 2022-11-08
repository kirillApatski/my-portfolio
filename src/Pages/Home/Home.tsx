import React from 'react';
import {Buttons} from "../../common/component/Buttons/Buttons";
import style from './Home.module.scss'
import {Title} from "../../common/component/Title/Title";

export const Home = () => {
    return (
        <div className={style.homeContainer}>
            <Title/>
            <Buttons title={'Get in touch'} path={'/contact'}/>
        </div>
    );
};

