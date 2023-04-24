import React from 'react';

import {BookCard} from "../../components/bookCard/bookCard";

import './styles.scss'
import {BookType} from "../../api/library-api";


type MainPageType = {
    view: string
    books: BookType[]
}

export const MainPage = (props: MainPageType) => {
    return (
        <div>
            {props.books.map(el => {
                return (
                    <BookCard key={el.id} rating={el.rating} title={el.title} author={el.author} view={props.view} cover={el.cover}/>
                )
            })}
            {/*<BookCard view={props.view}/>*/}
            {/*<BookCard view={props.view}/>*/}
            {/*<BookCard view={props.view}/>*/}
            {/*<BookCard view={props.view}/>*/}
        </div>
    );
};
