import React, {MouseEventHandler, useEffect, useState} from 'react';
import {BookCover} from "./bookCover/bookCover";
import {BookRating} from "./bookRating/bookRating";
import {BookTitle} from "./bookTitle/bookTitle";
import {BookAuthor} from "./bookAuthor/bookAuthor";
import {BookButton} from "./bookButton/bookButton";
import {classNames as cx} from "../../utils";
import {NavLink} from "react-router-dom";


import './styles.scss'
import {BookType, libraryAPI} from "../../api/library-api";

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

    // const [book, setBook] = useState<BookType>({
    //     id: '1',
    //     category: 'business',
    //     cover: [''],
    //     rating: 4,
    //     title: 'Грокаем алгоритмы. Иллюстрированное',
    //     author: 'Адитья Бхаргава, Патрик Нимейер',
    //     year: '2019',
    //     pages: '288',
    //     binding: 'Мягкая обложка',
    //     format: '70х100',
    //     genre: 'Компьютерная литература',
    //     weight: '370 г',
    //     manufacturer: 'ООО «Питер Мейл». РФ, 198206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
    //     description: 'Алгоритмы— это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-торешены, ' +
    //         'протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты' +
    //         ' с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время? Откройте великолепно иллюстрированную книгу и вы сразу поймете, ' +
    //         'что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.',
    //     isAvailable: true,
    //     isBooked: false,
    //     bookedFor: ''
    // })
    //
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await libraryAPI.getBook(props.id)
    //         setBook(result.data)
    //     };
    //     fetchData();
    // }, []);

    return (
        // className={'book-wrapper'}
        <div>
            <NavLink to={`/book/:${props.id}`} className={classNames}>
                {/*<BookCoverEmpty />*/}
                <BookCover cover={props.cover}/>
                <div className={'book-info'}>
                    <BookRating/>
                    <BookTitle title={props.title}/>
                    <BookAuthor author={props.author}/>
                    {/*<BookAuthor author={book.author}/>*/}
                    {/*<BookAuthor author={book.id}/>*/}
                    <BookButton/>
                </div>
            </NavLink>
        </div>

    );
};