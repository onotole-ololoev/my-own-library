import React from 'react';

import bookCover from '../../../assets/notCover.jpg'

import './styles.scss';

type BookCoverType = {
    cover?: string[]
}

export const BookCover = (props: BookCoverType) => {

    const dataCover = props.cover

    return (
        <div>
            <img className={'book-cover__img'} src={dataCover?.length ? dataCover[0] : bookCover} alt="book-cover"/>
        </div>
    );
};
