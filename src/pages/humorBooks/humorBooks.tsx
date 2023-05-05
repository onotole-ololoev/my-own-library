import React from 'react';

import {BookCard} from "../../components/bookCard/bookCard";


import {BookType} from "../../api/library-api";

import '../mainPage/styles.scss'

type MainPageType = {
    view: string
    books: BookType[]
}

export const HumorPage = (props: MainPageType) => {
    return (
        <div className={'books-page'}>
            {props.books.filter(book => {
                return book.category === 'humor'
            }).map(el => {
                return (
                    <BookCard key={el.id} id={el.id} rating={el.rating} title={el.title} author={el.author} view={props.view} cover={el.cover}/>
                )
            })}
        </div>
    );
};