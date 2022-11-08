import React from 'react';
import style from './Title.module.scss'


export const Title = () => {
    return (
        <>
            <h2 className={style.name}>Apatski <span className={style.coloringName}>Kirill</span></h2>
            <p className={style.job}><span className={style.coloringJob}>FrontEnd</span> Developer</p>
        </>
    );
};

