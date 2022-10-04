import React from 'react';
import style from './Main.module.css'
import container from '../../common/styles/Container.module.css'
export const Main = () => {
    return (
        <div className={style.mainContainer}>
            <div className={`${style.mainWrapp} ${container.container}`}>
                <div className={style.mainDescr}>
                    <span>Lorem ipsum.</span>
                    <h1>Kirill Apatski</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className={style.mainPhoto}></div>
            </div>
        </div>
    );
};

