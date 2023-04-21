import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom'

import {Header} from "./components/header/header";
import {Toolbar} from "./components/navigation/toolbar";
import {MainPage} from "./pages/mainPage/mainPage";
import {RulesPage} from "./pages/rulesPage/rulesPage";
import {ContractPage} from "./pages/contractPage/contractPage";
import {Navbar} from "./components/navbar/navbar";
import {useResponsive} from "./components/hooks/useResponsive";

import "./app.scss"
import {Footer} from "./components/footer/footer";

function App() {

    const {isMobile, isTablet, isDesktop} = useResponsive()

    const [view, setView] = useState('tile');

    return (
        <div className="wrapper">
            <Header/>
            {/*<Toolbar view={view} onChangeView={setView}/>*/}
            <div className={'inner'}>
                {isMobile || isTablet ? null : <Navbar/>}
                <div>
                    <Toolbar view={view} onChangeView={setView}/>
                    <Routes>
                        <Route path='/' element={<MainPage view={view}/>}/>
                        <Route path='/business' element={<MainPage view={view}/>}/>
                        <Route path='/detective' element={<MainPage view={view}/>}/>
                        <Route path='/rules' element={<RulesPage/>}/>
                        <Route path='/contract' element={<ContractPage/>}/>
                        <Route path='/logout' element={<div>logout</div>}/>
                        <Route path='/profile' element={<div>profile</div>}/>
                    </Routes>
                </div>
            </div>
            <Footer />

            {/*<BookCard view={view}/>*/}
            {/*<BookCard view={view}/>*/}
            {/*<BookCard view={view}/>*/}
            {/*<BookCard view={view}/>*/}


        </div>
    );
}

export default App;
