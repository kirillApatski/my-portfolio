import React from 'react';
import {Buttons} from "../../common/component/Buttons/Buttons";
import style from './Home.module.css'
export const Home = () => {
    return (
        <div className={style.homeContainer}>
            <h2 className={style.name}>Apatski <span className={style.coloringName}>Kirill</span></h2>
            <p className={style.job}><span className={style.coloringJob}>FrontEnd</span> Developer</p>
            <Buttons title={'Get in touch'} path={'/contact'}/>
        </div>
    );
};

