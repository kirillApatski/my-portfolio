import React from 'react';
import './App.css';
import {Main} from "./component/Main/Main";
import {HashRouter} from "react-router-dom";


function App() {
    return (
        <HashRouter>
            <div className="App">
                <Main/>
            </div>
        </HashRouter>
    );
}

export default App;
