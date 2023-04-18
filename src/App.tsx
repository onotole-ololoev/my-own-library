import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom'

import {Header} from "./components/header/header";
import {Toolbar} from "./components/navigation/toolbar";
import {BookCard} from "./components/bookCard/bookCard";


import {MainPage} from "./pages/mainPage/mainPage";
import {RulesPage} from "./pages/rulesPage/rulesPage";
import {ContractPage} from "./pages/contractPage/contractPage";
import {Navbar} from "./components/navbar/navbar";
import {useResponsive} from "./components/hooks/useResponsive";

import "./app.scss"

function App() {

    const {isMobile, isTablet, isDesktop} = useResponsive()

    const [view, setView] = useState('tile');

    return (
        <div className="wrapper">
            <Header/>
            <Toolbar view={view} onChangeView={setView}/>
            <div className={'inner'}>
                {isMobile || isTablet ? null : <Navbar />}
                <Routes>
                    <Route path='/' element={<MainPage/>}/>
                    <Route path='/business' element={<MainPage/>}/>
                    <Route path='/detective' element={<MainPage/>}/>
                    <Route path='/rules' element={<RulesPage />}/>
                    <Route path='/contract' element={<ContractPage />}/>
                </Routes>
            </div>

            {/*<BookCard view={view}/>*/}
            {/*<BookCard view={view}/>*/}
            {/*<BookCard view={view}/>*/}
            {/*<BookCard view={view}/>*/}


        </div>
    );
}

export default App;
