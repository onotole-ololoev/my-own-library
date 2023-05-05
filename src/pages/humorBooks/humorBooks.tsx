import React, {useEffect, useState} from 'react';
import {BookCard} from "../../components/bookCard/bookCard";
import {BookType, libraryAPI} from "../../api/library-api";
import '../mainPage/styles.scss'


type HumorBooksType = {
    view: string
}

export const HumorBooks = (props: HumorBooksType) => {


    const [books, setBooks] = useState<BookType[]>([])

    useEffect(() => {

        const fetchData = async () => {
            const result = await libraryAPI.getCategoryBooks('humor')
            setBooks(result.data.books);
        };
        fetchData();
    }, [books]);


    return (
        <div className={'books-page'}>
            {books.map(el => {
                return (
                    <BookCard key={el.id} id={el.id} rating={el.rating} title={el.title} author={el.author} view={props.view} cover={el.cover}/>
                )
            })}
        </div>
    );
};