import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {BookPageHeader} from "./bookPageHeader/bookPageHeader";
import {BookCover} from "../../components/bookCard/bookCover/bookCover";
import {BookTitle} from "../../components/bookCard/bookTitle/bookTitle";
import {BookAuthor} from "../../components/bookCard/bookAuthor/bookAuthor";
import {BookButton} from "../../components/bookCard/bookButton/bookButton";
import {BookPageText} from "./bookPageText/bookPageText";
import {BookRating} from "../../components/bookCard/bookRating/bookRating";

import {BookType, libraryAPI} from "../../api/library-api";

import './styles.scss'





export const BookPage = () => {


    const {id} = useParams();

    console.log(id)

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

    const fetchData = async () => {
      if (id) {
          const result = await libraryAPI.getBook(id)
          setBook(result.data);
      }
    };

    useEffect(() => {
        void fetchData();
    }, []);


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



        </div>
    );
};
