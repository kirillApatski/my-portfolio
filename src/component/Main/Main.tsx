import React from 'react';
import style from './Main.module.css'
import container from '../../common/styles/Container.module.css'
import {Header} from "../Header/Header";
import {Route, Routes} from "react-router-dom";
import {Home} from "../Home/Home";
import {Contacts} from "../Contacts/Contacts";
import {MyWorks} from "../MyWorks/MyWorks";
import {Skills} from "../Skills/Skills";
export const Main = () => {
    return (
        <div className={container.container}>
            <Header/>
            <section className={style.mainContent}>
                <Routes>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/about' element={<Home/>}/>
                    <Route path='/skills' element={<Skills/>}/>
                    <Route path='/project' element={<MyWorks/>}/>
                    <Route path='/contact' element={<Contacts/>}/>
                </Routes>
            </section>
        </div>
    );
};

