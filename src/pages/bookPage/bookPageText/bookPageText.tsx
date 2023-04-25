import React from 'react';

import './styles.scss'

type BookPageTextType = {
    title?: string
}

export const BookPageText = (props: BookPageTextType) => {
    return (
        <div>
            {props.title}
        </div>
    );
};
