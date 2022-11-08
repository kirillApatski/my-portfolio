import React, {FC} from 'react';
import style from './Buttons.module.css'
import {Link} from "react-router-dom";

type ButtonsPropsType = {
    title: string
    path: string
}

export const Buttons: FC<ButtonsPropsType> = ({title, path}) => {
    return (
        <div>
            <Link className={style.btn} to={path}>{title}</Link>
        </div>
    );
};