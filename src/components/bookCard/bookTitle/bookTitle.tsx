import React from 'react';

import './styles.scss'

type BookTitleType = {
    title: string
}

export const BookTitle = (props: BookTitleType) => {
    return (
        <div>
            <h3 className={'book-card__title'}>
                {props.title}
            </h3>
        </div>
    );
};
