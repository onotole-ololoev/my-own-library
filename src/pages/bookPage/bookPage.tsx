import React from 'react';


import {BookPageHeader} from "./bookPageHeader/bookPageHeader";
import {BookCover} from "../../components/bookCard/bookCover/bookCover";
import {BookTitle} from "../../components/bookCard/bookTitle/bookTitle";
import {BookAuthor} from "../../components/bookCard/bookAuthor/bookAuthor";
import {BookButton} from "../../components/bookCard/bookButton/bookButton";
import {BookPageText} from "./bookPageText/bookPageText";
import {BookRating} from "../../components/bookCard/bookRating/bookRating";

import './styles.scss'


type BookPageType = {
    title: string
    author: string
    category: string
    rating?: number
    year?: string
    publishingHouse?: string
    pages?: string
    binding?: string
    format?: string
    genre?: string
    weight?: string
    description?: string
    manufacturer?: string
    bookedFor?: string
    isAvailable?: boolean
    isBooked?: boolean
    reviews?: [string]
    cover?: [string]
}

export const BookPage = (props: BookPageType) => {
    return (
        <div>
            <BookPageHeader category={props.category} title={props.title}/>
            <BookCover />
            <BookTitle title={props.title} />
            <BookAuthor author={props.author} />
            <BookButton />
            <BookTitle title={'About'} />
            <BookPageText title={props.description} />
            <BookTitle title={'Rating'} />
            <BookRating rating={props.rating}/>
            <BookTitle title={'Detailed information'} />
            <div className="book-page--content__info">
                <table className="book-page--content__table">
                    <tr><td className="book-page--content__td-title">Издательство</td><td className="book-page--content__td-text">{props.manufacturer}</td></tr>
                    <tr><td className="book-page--content__td-title">Год издания</td><td className="book-page--content__td-text">{props.year}</td></tr>
                    <tr><td className="book-page--content__td-title">Страниц</td><td className="book-page--content__td-text">{props.pages}</td></tr>
                    <tr><td className="book-page--content__td-title">Переплёт</td><td className="book-page--content__td-text">{props.binding}</td></tr>
                    <tr><td className="book-page--content__td-title">Формат</td><td className="book-page--content__td-text">{props.format}</td></tr>
                </table>
                <table className="book-page--content__table">
                    <tr><td className="book-page--content__td-title">Жанр</td><td className="book-page--content__td-text">{props.genre}</td></tr>
                    <tr><td className="book-page--content__td-title">Вес</td><td className="book-page--content__td-text">{props.weight}</td></tr>
                </table>
            </div>
        </div>
    );
};
