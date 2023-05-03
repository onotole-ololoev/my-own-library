import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {BookPageHeader} from "./bookPageHeader/bookPageHeader";
import {BookCover} from "../../components/bookCard/bookCover/bookCover";
import {BookTitle} from "../../components/bookCard/bookTitle/bookTitle";
import {BookAuthor} from "../../components/bookCard/bookAuthor/bookAuthor";
import {BookButton} from "../../components/bookCard/bookButton/bookButton";
import {BookPageText} from "./bookPageText/bookPageText";
import {BookRating} from "../../components/bookCard/bookRating/bookRating";

import {libraryAPI} from "../../api/library-api";

import './styles.scss'




type BookPageType = {
    id: string
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

    const {id} = useParams();
    console.log(id)

    const [book, setBook] = useState<BookPageType>({
            id: '1',
            category: 'business',
            cover: [''],
            rating: 4,
            title: 'Йооооооооооооооооууууууууууууууууу',
            author: 'Адитья Бхаргава, Патрик Нимейер',
            year: '2019',
            pages: '288',
            binding: 'Мягкая обложка',
            format: '70х100',
            genre: 'Компьютерная литература',
            weight: '370 г',
            manufacturer: 'ООО «Питер Мейл». РФ, 198206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
            description: 'Алгоритмы— это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-торешены, ' +
                'протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты' +
                ' с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время? Откройте великолепно иллюстрированную книгу и вы сразу поймете, ' +
                'что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.',
            isAvailable: true,
            isBooked: false,
            bookedFor: ''
    })

    useEffect(() => {
        const fetchData = async () => {
            const result = await libraryAPI.getBook(props.id)
            setBook(result.data);
        };
        fetchData();
    }, [book]);

    return (
        <div>
            <BookPageHeader category={props.category} title={props.title}/>
            <BookPageHeader category={book.category} title={book.title}/>
            <BookCover/>
            <BookTitle title={props.title}/>
            <BookAuthor author={props.author}/>
            <BookButton/>
            <BookTitle title={'About'}/>
            <BookPageText title={props.description}/>
            <BookTitle title={'Rating'}/>
            <BookRating rating={props.rating}/>
            <BookTitle title={'Detailed information'}/>
            <div className="book-page--content__info">
                <table className="book-page--content__table">
                    <tr>
                        <td className="book-page--content__td-title">Издательство</td>
                        <td className="book-page--content__td-text">{props.manufacturer}</td>
                    </tr>
                    <tr>
                        <td className="book-page--content__td-title">Год издания</td>
                        <td className="book-page--content__td-text">{props.year}</td>
                    </tr>
                    <tr>
                        <td className="book-page--content__td-title">Страниц</td>
                        <td className="book-page--content__td-text">{props.pages}</td>
                    </tr>
                    <tr>
                        <td className="book-page--content__td-title">Переплёт</td>
                        <td className="book-page--content__td-text">{props.binding}</td>
                    </tr>
                    <tr>
                        <td className="book-page--content__td-title">Формат</td>
                        <td className="book-page--content__td-text">{props.format}</td>
                    </tr>
                </table>
                <table className="book-page--content__table">
                    <tr>
                        <td className="book-page--content__td-title">Жанр</td>
                        <td className="book-page--content__td-text">{props.genre}</td>
                    </tr>
                    <tr>
                        <td className="book-page--content__td-title">Вес</td>
                        <td className="book-page--content__td-text">{props.weight}</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};
