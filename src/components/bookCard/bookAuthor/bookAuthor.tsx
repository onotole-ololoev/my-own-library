import React from 'react';

import './styles.scss'

type BookAuthorType = {
    author: string
}

export const BookAuthor = (props: BookAuthorType) => {
    return (
        <div className={'book-author'}>
            {props.author}
        </div>
    );
};