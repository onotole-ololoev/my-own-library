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
}

export const BookCard = (props: BookCardType) => {

    const classNames: any = cx('book-wrapper', {
        [`book-wrapper__tile`]: props.view === 'tile',
        [`book-wrapper__list`]: props.view === 'list'
    })

    return (
        // className={'book-wrapper'}
        <div className={classNames}>
            {/*<BookCoverEmpty />*/}
            <BookCover />
            <div className={'book-info'}>
                <BookRating />
                <BookTitle />
                <BookAuthor />
                <BookButton />
            </div>
        </div>
    );
};