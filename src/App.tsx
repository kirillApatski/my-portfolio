import React from 'react';
import './styles/App.scss';
import {HashRouter, Route, Routes} from "react-router-dom";
import container from "./styles/Container.module.scss";
import {Header} from "./common/component/Header/Header";
import {Home} from "./Pages/Home/Home";
import {Skills} from "./Pages/Skills/Skills";
import {MyWorks} from "./Pages/Projects/MyWorks";
import {Contacts} from "./Pages/Contacts/Contacts";
import {About} from "./Pages/About/About";



function App() {
    return (
        <HashRouter>
            <div className={container.container}>
                <Header/>
                <section className={'mainContent'}>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/home' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/skills' element={<Skills/>}/>
                        <Route path='/project' element={<MyWorks/>}/>
                        <Route path='/contact' element={<Contacts/>}/>
                    </Routes>
                </section>
            </div>
        </HashRouter>
    );
}

export default App;
