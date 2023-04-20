import React from 'react';
import {NavLink} from 'react-router-dom'

import './styles.scss'

type BooksCategoryListType = {
    onCloseModal?: () => void
}

export const BooksCategoryList = (props: BooksCategoryListType) => {
    return (
        <ul className={"category-list"}>
            <li>
                <NavLink to="/" className={'category-list__link'} onClick={props.onCloseModal}>Все книги <span
                    className={"category-list__count"}>1134</span></NavLink>
            </li>
            <li>
                <NavLink to="/business" className={'category-list__link'} onClick={props.onCloseModal}>Бизнес-книги<span
                    className={"category-list__count"}>1134</span></NavLink>
            </li>
            <li>
                <NavLink to="/detective" className={'category-list__link'} onClick={props.onCloseModal}>Детективы<span
                    className={"category-list__count"}>1134</span></NavLink>
            </li>
            <li>
                <NavLink to="/history" className={'category-list__link'} onClick={props.onCloseModal}>История<span
                    className={"category-list__count"}>1134</span></NavLink>
            </li>
            <li>
                <NavLink to="/comedy" className={'category-list__link'} onClick={props.onCloseModal}>Комедия<span
                    className={"category-list__count"}>1134</span></NavLink>
            </li>
        </ul>
    );
};
