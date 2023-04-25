import React from 'react';

import './styles.scss'
import {BookPageHeader} from "./bookPageHeader/bookPageHeader";
import {BookCover} from "../../components/bookCard/bookCover/bookCover";

export const BookPage = () => {
    return (
        <div>
            <BookPageHeader />
            <BookCover />

        </div>
    );
};
