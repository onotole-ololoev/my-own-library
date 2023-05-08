import React, {useCallback, useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom'

import {Header} from "./components/header/header";
import {Toolbar} from "./components/navigation/toolbar";
import {MainPage} from "./pages/mainPage/mainPage";
import {RulesPage} from "./pages/rulesPage/rulesPage";
import {ContractPage} from "./pages/contractPage/contractPage";
import {Navbar} from "./components/navbar/navbar";
import {useResponsive} from "./components/hooks/useResponsive";
import {Footer} from "./components/footer/footer";
import {AdminPage} from "./pages/adminPage/adminPage";
import {BookPage} from "./pages/bookPage/bookPage";


import "./app.scss"


function App() {


    const {isMobile, isTablet, isDesktop} = useResponsive()
    // const [view, setView] = useState('tile');


    return (
        <div className="wrapper">
            <Header/>
            <div className={'inner'}>
                {isMobile || isTablet ? null : <Navbar/>}
                <div className={'wrapper__page'}>
                    {/*<Toolbar view={view} onChangeView={setView} />*/}
                    <Routes>
                        <Route path='/' element={<MainPage />}/>
                        <Route path='/rules' element={<RulesPage/>}/>
                        <Route path='/contract' element={<ContractPage/>}/>
                        <Route path='/profile' element={<div>profile</div>}/>
                        <Route path='/admin' element={<AdminPage/>}/>
                        <Route path={`/book/:id`} element={<BookPage />} />
                    </Routes>
                </div>
            </div>
            <Footer/>
        </div>
    )
        ;
}

export default App;
