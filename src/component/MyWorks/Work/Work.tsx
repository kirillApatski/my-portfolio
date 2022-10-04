import React from 'react';
import style from './Work.module.css'

type WorkPropsType = {
    title: string
    description: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <div className={style.workWrapper}>
            <div className={style.workIcon}>
                <a href="">Смотреть</a>
            </div>
            <div className={style.workDescrWrapp}>
                <span className={style.workTitle}>{props.title}</span>
                <p className={style.workDesce}>{props.description}</p>
            </div>
        </div>
    );
};

