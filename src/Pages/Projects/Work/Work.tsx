import React, {FC} from 'react';
import style from './Work.module.scss'
import {Buttons} from "../../../common/component/Buttons/Buttons";


type WorkType = {
    title: string
    description: string
    image: string
}

export const Work: FC<WorkType> = (props) => {
    return (
        <div className={style.projectWrapper}>
            <div className={style.projectBg}>
                <img src={props.image} alt=""/>
                <div className={style.blockBtn}>
                    <Buttons title='Vew' path={''}/>
                </div>
            </div>
            <div className={style.projectDescr}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <p className={style.projectText}>{props.description}</p>
            </div>
        </div>
    );
};

