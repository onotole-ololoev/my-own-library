import React from 'react';
import {Collapsible} from "./collapsible/collapsible";
import {BookRating} from "../bookCard/bookRating/bookRating";

import './styles.scss'

export const Navbar = () => {
    return (
        <ul className={'navbar'}>
            <li className={'navbar-item'}>
                <Collapsible className={'yo'} title={'Витрина книг'}>
                    <BookRating />
                </Collapsible>
            </li>
            <li className={'navbar-item'}>
                <a href="#" className={'navbar-item__link'}>Правила пользования</a>
            </li>
            <li className={'navbar-item'}>
                <a href="#" className={'navbar-item__link'}>Договор оферты</a>
            </li>
        </ul>
    );
};
