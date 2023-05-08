import React, {useCallback, useEffect, useState} from 'react';

import {BookCard} from "../../components/bookCard/bookCard";
import {BookType, libraryAPI} from "../../api/library-api";
import {Toolbar} from "../../components/navigation/toolbar";


import './styles.scss'




type MainPageType = {

}

export const MainPage = (props: MainPageType) => {

    const [books, setBooks] = useState<BookType[]>([])
    const fetchData = useCallback(async () => {
        const result = await libraryAPI.getAllBooks()
        setBooks(result.data.books);
    }, [])

    const [view, setView] = useState('tile');

    useEffect(() => {
        void fetchData();
    }, []);


    return (
        <div className={'books-page'}>
            <Toolbar view={view} onChangeView={setView} />
            <div className={'books-page__content'}>
                {books.map((el, i) => {
                    return (
                        <BookCard key={i} id={el.id} rating={el.rating} title={el.title} author={el.author} view={view} cover={el.cover}/>
                    )
                })}
            </div>

        </div>
    );
};
