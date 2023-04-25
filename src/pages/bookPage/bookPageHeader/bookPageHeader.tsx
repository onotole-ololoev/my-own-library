import React from 'react';

import './styles.scss'

type BookPageHeaderType = {
    category: string
    title: string
}

export const BookPageHeader = (props: BookPageHeaderType) => {
    return (
        <div className={'book-page-header'}>
            <span className={'book-page-header__text'}>{props.category} / {props.title}</span>
        </div>
    );
};
