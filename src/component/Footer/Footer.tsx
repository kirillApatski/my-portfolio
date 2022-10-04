import React from 'react';
import style from './Footer.module.css'
import container from '../../common/styles/Container.module.css'
export const Footer = () => {
    return (
        <div className={style.footerWrap}>
            <div className={`${container.container} ${style.footerContainer}`}>
                <span>Apatski Kirill</span>
                <div className={style.socials}>
                    <span><a href="">VK</a></span>
                    <span><a href="">Telegram</a></span>
                    <span><a href="">Twitter</a></span>
                    <span><a href="">Linkedin</a></span>
                </div>
                <p className={style.copy}>&copy;2022 Все права защищены</p>
            </div>
        </div>
    );
};

