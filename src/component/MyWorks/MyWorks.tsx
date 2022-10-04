import React from 'react';
import style from './MyWorks.module.css'
import container from  '../../common/styles/Container.module.css'
import {Work} from "./Work/Work";

export const MyWorks = () => {
    return (
        <div className={style.myWorksWrapp}>
            <div className={`${container.container} ${style.worksContainer}`}>
                <h3>Мои Работы</h3>
                <div className={style.works}>
                    <Work title={"Название проекта"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, odit?"} />
                    <Work title={"Название проекта"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, odit?"} />
                    <Work title={"Название проекта"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, odit?"} />
                    <Work title={"Название проекта"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, odit?"} />
                    <Work title={"Название проекта"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, odit?"} />
                    <Work title={"Название проекта"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, odit?"} />
                    <Work title={"Название проекта"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, odit?"} />
                    <Work title={"Название проекта"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, odit?"} />
                    <Work title={"Название проекта"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, odit?"} />
                    <Work title={"Название проекта"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, odit?"} />
                </div>
            </div>
        </div>
    );
};

