import React from 'react';
import {BookCoverEmpty} from "./bookCoverEmpty/bookCoverEmpty";
import {BookCover} from "./bookCover/bookCover";
import {BookRating} from "./bookRating/bookRating";
import {BookTitle} from "./bookTitle/bookTitle";
import {BookAuthor} from "./bookAuthor/bookAuthor";



import './styles.scss'
import {BookButton} from "./bookButton/bookButton";



export const BookCard = () => {
    return (
        <div className={'book-wrapper'}>
            {/*<BookCoverEmpty />*/}
            <BookCover />
            <BookRating />
            <BookTitle />
            <BookAuthor />
            <BookButton />
        </div>
    );
};