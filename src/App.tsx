import React, {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom'

import {Header} from "./components/header/header";
import {Toolbar} from "./components/navigation/toolbar";
import {MainPage} from "./pages/mainPage/mainPage";
import {RulesPage} from "./pages/rulesPage/rulesPage";
import {ContractPage} from "./pages/contractPage/contractPage";
import {Navbar} from "./components/navbar/navbar";
import {useResponsive} from "./components/hooks/useResponsive";
import {Footer} from "./components/footer/footer";
import "./app.scss"
import {AdminPage} from "./pages/adminPage/adminPage";
import {BookType, libraryAPI} from "./api/library-api";


function App() {

    const [books, setBooks] = useState<BookType[]>([])
    const {isMobile, isTablet, isDesktop} = useResponsive()
    const [view, setView] = useState('tile');

    useEffect(() => {
        const fetchData = async () => {
            const result = await libraryAPI.getAllBooks()
            setBooks(result.data.books);
        };
        fetchData();
    }, []);


    return (
        <div className="wrapper">
            <Header/>
            <div className={'inner'}>
                {isMobile || isTablet ? null : <Navbar/>}
                <div className={'wrapper__page'}>
                    <Toolbar view={view} onChangeView={setView}/>
                    <Routes>
                        <Route path='/' element={<MainPage books={books} view={view}/>}/>
                        <Route path='/rules' element={<RulesPage/>}/>
                        <Route path='/contract' element={<ContractPage/>}/>
                        <Route path='/logout' element={<div>logout</div>}/>
                        <Route path='/profile' element={<div>profile</div>}/>
                        <Route path='/admin' element={<AdminPage/>}/>
                    </Routes>
                </div>
            </div>
            <Footer/>

            {/*<BookCard view={view}/>*/}
            {/*<BookCard view={view}/>*/}
            {/*<BookCard view={view}/>*/}
            {/*<BookCard view={view}/>*/}


        </div>
    );
}

export default App;
