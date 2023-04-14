import React, {useState} from 'react';


import {Header} from "./components/header/header";
import {Toolbar} from "./components/navigation/toolbar";
import {BookCard} from "./components/bookCard/bookCard";

import "./app.scss"

function App() {

    const [view, setView] = useState('tile');

    return (
        <div className="wrapper">
            <Header/>
            <Toolbar view={view} onChangeView={setView}/>

            <BookCard view={view}/>
            <BookCard view={view}/>
            <BookCard view={view}/>
            <BookCard view={view}/>


        </div>
    );
}

export default App;
