import React, {useCallback, useEffect, useState} from 'react';

import {BookCard} from "../../components/bookCard/bookCard";
import {Toolbar} from "../../components/navigation/toolbar";
import {useParams} from "react-router-dom";

import {BookType, libraryAPI} from "../../api/library-api";

import './styles.scss'
import {log} from "util";


type MainPageType = {}

export const MainPage = (props: MainPageType) => {

    const [books, setBooks] = useState<BookType[]>([])
    const [view, setView] = useState('tile');

    const {category} = useParams();


    const fetchData = async () => {
        try {
            if (category) {
                const result = await libraryAPI.getCategoryBooks(category)
                setBooks(result.data.books);
                console.log('books with category=' + category + ' request')
                console.log(result.data.books)

            } else {
                const result = await libraryAPI.getAllBooks()
                setBooks(result.data.books);
                console.log('all books request', result.data)
            }
        } catch (e: any) {
            console.log(e.message)
        }

    }

    useEffect(() => {
        void fetchData();
    }, [category]);

    // const sortByRating = () => {
    //     return ((a: any, b: any) => a.title - b.title)
    // }

    const onHandleSort = () => {
        // let result = books.sort(sortByRating('rating'));
        setBooks(books.sort((a: any, b: any) => {
                    return a.title - b.title
                }
            )
        )
        console.log('sort click')

    }

    return (
        <div className={'books-page'}>
            <Toolbar view={view} onChangeView={setView} onHandleSort={onHandleSort}/>
            <div className={'books-page__content'}>
                {books.length < 1 ? <div>Sorry, this category is empty. Please, choose another one.</div> : null}
                {books.map((el, i) => {
                    return (
                        <BookCard key={i} id={el.id} rating={el.rating} title={el.title} author={el.author} view={view}
                                  cover={el.cover}/>
                    )
                })}
            </div>

        </div>
    );
};
