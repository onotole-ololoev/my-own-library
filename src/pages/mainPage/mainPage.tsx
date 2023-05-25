import React, {useCallback, useEffect, useState} from 'react';

import {BookCard} from "../../components/bookCard/bookCard";
import {Toolbar} from "../../components/navigation/toolbar";
import {useParams} from "react-router-dom";

import {BookType, libraryAPI} from "../../api/library-api";

import './styles.scss'
import {findAllByDisplayValue} from "@testing-library/react";


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
            return (
                <div>{e.message}</div>
            )
        }

    }

    useEffect(() => {
        void fetchData();
    }, [category]);


    // const sortBooksTitle = (books: BookType[]) => {
    //     return books.sort(function (a:any, b:any){
    //         if(a.title < b.title) { return -1; }
    //         if(a.title > b.title) { return 1; }
    //         return 0;
    //     })
    // }

    let nonSortArr = [
        {id: 1, title: 'БАвария'},
        {id: 2, title: 'Жопа'},
        {id: 3, title: 'Зеленый'},
        {id: 4, title: 'Что ты?'},
        {id: 5, title: 'Дело'},
        {id: 6, title: 'Авария'},

    ]
    const onHandleSort = () => {
        let sortBooks = books.sort(function (a: any, b: any) {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        })
        setBooks(sortBooks)
        console.log('sort click')
    }

    console.log('main page render')
    console.log(books.map(el => el.title) + ' sort books ' + books.sort((a, b) => a.title > b.title ? 1 : -1).map(el => el.title))

    return (
        <div className={'books-page'}>
            <Toolbar view={view} onChangeView={setView} onHandleSort={onHandleSort}/>
            <div className={'books-page__content'}>
                {books.length < 1 ? <div>Sorry, this category is empty. Please, choose another one.</div> : null}
                {books.sort((a, b) => a.title > b.title ? 1 : -1)
                    .map((el, i) => {
                    return (
                        <BookCard key={i} id={el.id} rating={el.rating} title={el.title} author={el.author} view={view}
                                  cover={el.cover}/>
                    )
                })}
            </div>

            <div> исходный массив</div>
            {nonSortArr.map(el => el.title)}
            <div>отсортированный массив</div>
            {nonSortArr.sort((a, b) => a.title > b.title ? 1 : -1).map(el => el.title)}


        </div>
    );
};
