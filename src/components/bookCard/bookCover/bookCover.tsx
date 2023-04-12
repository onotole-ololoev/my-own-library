import React from 'react';

import bookCover from '../../../assets/erofeev-moskva-petushki.jpg'

import './styles.scss';


export const BookCover = () => {
    return (
        <div>
            <img className={'book-cover__img'} src={bookCover} alt="book-cover"/>
        </div>
    );
};
