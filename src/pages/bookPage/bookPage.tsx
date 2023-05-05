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




    const [book, setBook] = useState<BookPageType>({
            id: '',
            category: '',
            cover: [''],
            rating: 0,
            title: '',
            author: '',
            year: '',
            pages: '',
            binding: '',
            format: '',
            genre: '',
            weight: '',
            manufacturer: '',
            description: '',
            isAvailable: true,
            isBooked: false,
            bookedFor: ''
    })


    // const hardId = '644b83fe4238ab0034f9e225'

    useEffect(() => {
        const fetchData = async () => {
            const result = await libraryAPI.getBook(props.id)
            setBook(result.data);
        };
        fetchData();
    }, []);


    return (
        <div>
            {/*<BookPageHeader category={props.book} title={props.title}/>*/}
            {/*<BookCover/>*/}
            {/*<BookTitle title={props.title}/>*/}
            {/*<BookAuthor author={props.author}/>*/}
            {/*<BookButton/>*/}
            {/*<BookTitle title={'About'}/>*/}
            {/*<BookPageText title={props.description}/>*/}
            {/*<BookTitle title={'Rating'}/>*/}
            {/*<BookRating rating={props.rating}/>*/}
            {/*<BookTitle title={'Detailed information'}/>*/}
            {/*<div className="book-page--content__info">*/}
            {/*    <table className="book-page--content__table">*/}
            {/*        <tr>*/}
            {/*            <td className="book-page--content__td-title">Издательство</td>*/}
            {/*            <td className="book-page--content__td-text">{props.manufacturer}</td>*/}
            {/*        </tr>*/}
            {/*        <tr>*/}
            {/*            <td className="book-page--content__td-title">Год издания</td>*/}
            {/*            <td className="book-page--content__td-text">{props.year}</td>*/}
            {/*        </tr>*/}
            {/*        <tr>*/}
            {/*            <td className="book-page--content__td-title">Страниц</td>*/}
            {/*            <td className="book-page--content__td-text">{props.pages}</td>*/}
            {/*        </tr>*/}
            {/*        <tr>*/}
            {/*            <td className="book-page--content__td-title">Переплёт</td>*/}
            {/*            <td className="book-page--content__td-text">{props.binding}</td>*/}
            {/*        </tr>*/}
            {/*        <tr>*/}
            {/*            <td className="book-page--content__td-title">Формат</td>*/}
            {/*            <td className="book-page--content__td-text">{props.format}</td>*/}
            {/*        </tr>*/}
            {/*    </table>*/}
            {/*    <table className="book-page--content__table">*/}
            {/*        <tr>*/}
            {/*            <td className="book-page--content__td-title">Жанр</td>*/}
            {/*            <td className="book-page--content__td-text">{props.genre}</td>*/}
            {/*        </tr>*/}
            {/*        <tr>*/}
            {/*            <td className="book-page--content__td-title">Вес</td>*/}
            {/*            <td className="book-page--content__td-text">{props.weight}</td>*/}
            {/*        </tr>*/}
            {/*    </table>*/}
            {/*</div>*/}



            <BookPageHeader category={book.category} title={book.title}/>
            <BookCover/>
            <BookTitle title={book.title}/>
            <BookAuthor author={book.author}/>
            <BookButton/>
            <BookTitle title={'About'}/>
            <BookPageText title={book.description}/>
            <BookTitle title={'Rating'}/>
            <BookRating rating={book.rating}/>
            <BookTitle title={'Detailed information'}/>
            <div className="book-page--content__info">
                <table className="book-page--content__table">
                    <tr>
                        <td className="book-page--content__td-title">Издательство</td>
                        <td className="book-page--content__td-text">{book.manufacturer}</td>
                    </tr>
                    <tr>
                        <td className="book-page--content__td-title">Год издания</td>
                        <td className="book-page--content__td-text">{book.year}</td>
                    </tr>
                    <tr>
                        <td className="book-page--content__td-title">Страниц</td>
                        <td className="book-page--content__td-text">{book.pages}</td>
                    </tr>
                    <tr>
                        <td className="book-page--content__td-title">Переплёт</td>
                        <td className="book-page--content__td-text">{book.binding}</td>
                    </tr>
                    <tr>
                        <td className="book-page--content__td-title">Формат</td>
                        <td className="book-page--content__td-text">{book.format}</td>
                    </tr>
                </table>
                <table className="book-page--content__table">
                    <tr>
                        <td className="book-page--content__td-title">Жанр</td>
                        <td className="book-page--content__td-text">{book.genre}</td>
                    </tr>
                    <tr>
                        <td className="book-page--content__td-title">Вес</td>
                        <td className="book-page--content__td-text">{book.weight}</td>
                    </tr>
                </table>
            </div>



        </div>
    );
};
