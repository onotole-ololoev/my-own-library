import React from 'react';

import bookCoverEmpty from "../../../assets/no-book-cover.png"

import './styles.scss'

export const BookCoverEmpty = () => {
    return (
        <div>
            <img className={'book-cover-empty__img'} src={bookCoverEmpty} alt="empty-cover"/>
        </div>
    );
};
