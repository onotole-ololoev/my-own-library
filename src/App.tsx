import React from 'react';

import "./app.scss"
import {Header} from "./components/header/header";
import {Navigation} from "./components/navigation/navigation";
import {BookCard} from "./components/bookCard/bookCard";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Navigation />
            <BookCard />
        </div>
    );
}

export default App;
