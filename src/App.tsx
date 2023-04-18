import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom'

import {Header} from "./components/header/header";
import {Toolbar} from "./components/navigation/toolbar";
import {BookCard} from "./components/bookCard/bookCard";

import "./app.scss"
import {MainPage} from "./pages/mainPage/mainPage";

function App() {

    const [view, setView] = useState('tile');

    return (
        <div className="wrapper">
            <Header/>
            <Toolbar view={view} onChangeView={setView}/>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/business' element={<MainPage/>}/>
                <Route path='/detective' element={<MainPage/>}/>
                <Route path='/rules' element={<RulesPage/>}/>
                <Route path='/contract' element={<ContractPage/>}/>
            </Routes>

            <BookCard view={view}/>
            <BookCard view={view}/>
            <BookCard view={view}/>
            <BookCard view={view}/>


        </div>
    );
}

export default App;
