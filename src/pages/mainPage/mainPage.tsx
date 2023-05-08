import React, {useCallback, useEffect, useState} from 'react';

import {BookCard} from "../../components/bookCard/bookCard";
import {BookType, libraryAPI} from "../../api/library-api";

import './styles.scss'



type MainPageType = {
    view: string
}

export const MainPage = (props: MainPageType) => {

    const [books, setBooks] = useState<BookType[]>([])
    const fetchData = useCallback(async () => {
        const result = await libraryAPI.getAllBooks()
        setBooks(result.data.books);
    }, [])

    useEffect(() => {
        void fetchData();
    }, []);

    return (
        <div className={'books-page'}>
            {books.map((el, i) => {
                return (
                    <BookCard key={i} id={el.id} rating={el.rating} title={el.title} author={el.author} view={props.view} cover={el.cover}/>
                )
            })}
        </div>
    );
};
