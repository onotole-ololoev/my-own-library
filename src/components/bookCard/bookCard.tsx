import React, {MouseEventHandler, useEffect, useState} from 'react';
import {BookCover} from "./bookCover/bookCover";
import {BookRating} from "./bookRating/bookRating";
import {BookTitle} from "./bookTitle/bookTitle";
import {BookAuthor} from "./bookAuthor/bookAuthor";
import {BookButton} from "./bookButton/bookButton";
import {classNames as cx} from "../../utils";
import {NavLink} from "react-router-dom";


import './styles.scss'


type BookCardType = {
    view: string
    cover?: string[]
    rating?: number
    author: string
    title: string
    id: string
}

export const BookCard = (props: BookCardType) => {

    const classNames: any = cx('book-wrapper', {
        [`book-wrapper__tile`]: props.view === 'tile',
        [`book-wrapper__list`]: props.view === 'list'
    })


    return (
        <NavLink to={`/book/${props.id}`} className={classNames}>
            <BookCover cover={props.cover}/>
            <div className={'book-info'}>
                <BookRating/>
                <BookTitle title={props.title}/>
                <BookAuthor author={props.author}/>
                <BookButton/>
            </div>
        </NavLink>
    );
};