import React from 'react';
import './App.css';
import {Header} from "./component/Header/Header";
import {Main} from "./component/Main/Main";
import {Skills} from "./component/Skils/Skills";
import {MyWorks} from "./component/MyWorks/MyWorks";
import {Contacts} from "./component/Contacts/Contacts";
import {Footer} from "./component/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <MyWorks/>
        <Contacts/>
        <Footer/>
    </div>
  );
}

export default App;
