import React from 'react';
import style from './About.module.scss'
import {Buttons} from "../../common/component/Buttons/Buttons";
import photo from '../../assets/images/myPhoto.jpg'

export const About = () => {
    return (
        <div className={style.aboutWrapper}>
            <div className={style.aboutPhoto}>
                <img src={photo} alt="myPhoto"/>
            </div>
            <div className={style.aboutDescription}>
                <div className={style.title}>
                    <h3 className={style.name}>Apatski <span className={style.coloring}>Kirill</span></h3>
                    <span className={style.prof}>FrontEnd</span>
                </div>
                <p className={style.aboutMe}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam
                    consectetur explicabo molestias, officiis quia quo recusandae voluptas. A accusamus ad, animi
                    aspernatur eius in inventore libero, magni mollitia nemo nesciunt non numquam placeat quasi quod
                </p>
                <Buttons title={'Learn More'} path={'/'}/>
            </div>
        </div>
    );
};