import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";

import {BookPageHeader} from "./bookPageHeader/bookPageHeader";
import {BookCover} from "../../components/bookCard/bookCover/bookCover";
import {BookTitle} from "../../components/bookCard/bookTitle/bookTitle";
import {BookAuthor} from "../../components/bookCard/bookAuthor/bookAuthor";
import {BookButton} from "../../components/bookCard/bookButton/bookButton";
import {BookPageText} from "./bookPageText/bookPageText";
import {BookRating} from "../../components/bookCard/bookRating/bookRating";
import {BookType, libraryAPI} from "../../api/library-api";
import {DeleteBookButton} from "../../components/bookCard/deleteBookButton/deleteBookButton";

import './styles.scss'
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


export const BookPage = () => {


    const {id} = useParams();

    const [isDelete, setIsDelete] = useState<boolean>(false)

    const [book, setBook] = useState<BookType>({
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

    const onDeleteBook = () => {
        console.log('delete this book ' + book.id)

        void fetchDeleteData()

    }
    const fetchDeleteData = () => {
        if (id) {
            libraryAPI.deleteBook(id).then(() => {
                setIsDelete(true)
            }).catch(error)
            {
                console.log(error)
            }
        }
    };

    const fetchData = async () => {
        if (id) {
            const result = await libraryAPI.getBook(id)
            setBook(result.data);
        }
    };

    useEffect(() => {
        void fetchData();
    }, []);

    if (isDelete) {
        return <div>this book deleted</div>
    }

    return (
        <div className={'book-page'}>
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
            <DeleteBookButton onDeleteBook={onDeleteBook}/>
        </div>
    );
};
