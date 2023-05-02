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


    const [books, setBooks] = useState<BookType[]>([
        // {
        //     id: '1',
        //     category: 'business',
        //     cover: [''],
        //     rating: 4,
        //     title: 'Грокаем алгоритмы. Иллюстрированное',
        //     author: 'Адитья Бхаргава, Патрик Нимейер',
        //     year: '2019',
        //     pages: '288',
        //     binding: 'Мягкая обложка',
        //     format: '70х100',
        //     genre: 'Компьютерная литература',
        //     weight: '370 г',
        //     manufacturer: 'ООО «Питер Мейл». РФ, 198206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
        //     description: 'Алгоритмы— это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-торешены, ' +
        //         'протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты' +
        //         ' с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время? Откройте великолепно иллюстрированную книгу и вы сразу поймете, ' +
        //         'что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.',
        //     isAvailable: true,
        //     isBooked: false,
        //     bookedFor: ''
        // }
    ])
    const {isMobile, isTablet, isDesktop} = useResponsive()
    const [view, setView] = useState('tile');

    useEffect(() => {

        const fetchData = async () => {
            const result = await libraryAPI.getAllBooks()
            setBooks(result.data.books);
        };
        fetchData();
    }, [books]);

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
                                <Route path={`/book/:${el.id}`}
                                       element={<BookPage key={el.id} id={el.id} category={el.category} author={el.author}
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
