import React from 'react';
import { Rate } from 'antd';

import './styles.scss';


type BookRatingType = {
    rating?: number
}

export const BookRating: React.FC<BookRatingType> = ({rating}) => <Rate className={'book-rating'} value={rating}/>;
