import React from 'react';
import {BookCoverEmpty} from "./bookCoverEmpty/bookCoverEmpty";
import {BookCover} from "./bookCover/bookCover";
import {BookRating} from "./bookRating/bookRating";
import {BookTitle} from "./bookTitle/bookTitle";
import {BookAuthor} from "./bookAuthor/bookAuthor";
import {BookButton} from "./bookButton/bookButton";
import {classNames as cx} from "../../utils";

import './styles.scss'


type BookCardType = {
    view: string
    cover?: string[]
    rating?: number
    author: string
    title: string
}

export const BookCard = (props: BookCardType) => {

    const classNames: any = cx('book-wrapper', {
        [`book-wrapper__tile`]: props.view === 'tile',
        [`book-wrapper__list`]: props.view === 'list'
    })

    console.log(props.cover)

    return (
        // className={'book-wrapper'}
        <div className={classNames}>
            {/*<BookCoverEmpty />*/}
            <BookCover cover={props.cover}/>
            <div className={'book-info'}>
                <BookRating />
                <BookTitle title={props.title}/>
                <BookAuthor author={props.author}/>
                <BookButton />
            </div>
        </div>
    );
};