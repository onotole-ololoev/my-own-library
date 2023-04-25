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
import {AdminPage} from "./pages/adminPage/adminPage";
import {BookType, libraryAPI} from "./api/library-api";
import {BookPage} from "./pages/bookPage/bookPage";


import "./app.scss"

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

    console.log(books)

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
                        {/*<Route path='/book' element={<BookPage />}/>*/}
                        {books.map(el => {
                            return (
                                <Route path={`/book/${el.id}`}
                                       element={<BookPage key={el.id} category={el.category} author={el.author}
                                                          title={el.title} description={el.description}
                                                          format={el.format} cover={el.cover} rating={el.rating}
                                                          binding={el.binding} genre={el.genre} bookedFor={el.bookedFor}
                                                          isBooked={el.isBooked} isAvailable={el.isAvailable}
                                                          publishingHouse={el.publishingHouse}
                                                          manufacturer={el.manufacturer} pages={el.pages}
                                                          weight={el.weight} year={el.year}/>}/>
                            )
                        })}
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
