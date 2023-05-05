import React from 'react';
import {NavLink} from 'react-router-dom'

import './styles.scss'
import {libraryAPI} from "../../../api/library-api";

type BooksCategoryListType = {
    onCloseModal?: () => void
}



    // {
    //     all: 'Все книги',
    //     count: 1134
    // },
    // {
    //     business: 'Бизнес-книги',
    //     count: 1134
    // },
    // {
    //     detective: 'Детективы',
    //     count: 1135
    // },

    // foreign: 'Зарубежная литература',
    // history: 'Исторические',
    // classic: 'Классическая литература',
    // psycho: 'Психологические',
    // computer: 'Компьютерная литература',
    // culture: 'Культурные',
    // science: 'Научные',
    // journalistic: 'Журналистика',
    // reference: 'Справочники',
    // fantastic: 'Фантастика',
    // humor: 'Юмористическая литература'


export const BooksCategoryList = (props: BooksCategoryListType) => {
    return (
        <ul className={"category-list"}>
            <li>
                <NavLink to="/" className={'category-list__link'} onClick={props.onCloseModal}>Все книги<span
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
                <NavLink to="/foreign" className={'category-list__link'} onClick={props.onCloseModal}>Зарубежная литература<span
                    className={"category-list__count"}>1134</span></NavLink>
            </li>
            <li>
                <NavLink to="/history" className={'category-list__link'} onClick={props.onCloseModal}>Исторические<span
                    className={"category-list__count"}>1134</span></NavLink>
            </li>
            <li>
                <NavLink to="/classic" className={'category-list__link'} onClick={props.onCloseModal}>Классическая литература<span
                    className={"category-list__count"}>1134</span></NavLink>
            </li>
            <li>
                <NavLink to="/psycho" className={'category-list__link'} onClick={props.onCloseModal}>Психологические<span
                    className={"category-list__count"}>1134</span></NavLink>
            </li>
            <li>
                <NavLink to="/computer" className={'category-list__link'} onClick={props.onCloseModal}>Компьютерная литература<span
                    className={"category-list__count"}>1134</span></NavLink>
            </li>
            <li>
                <NavLink to="/culture" className={'category-list__link'} onClick={props.onCloseModal}>Культурные<span
                    className={"category-list__count"}>1134</span></NavLink>
            </li>
            <li>
                <NavLink to="/science" className={'category-list__link'} onClick={props.onCloseModal}>Научные<span
                    className={"category-list__count"}>1134</span></NavLink>
            </li>
            <li>
                <NavLink to="/journalistic" className={'category-list__link'} onClick={props.onCloseModal}>Журналистика<span
                    className={"category-list__count"}>1134</span></NavLink>
            </li>
            <li>
                <NavLink to="/reference" className={'category-list__link'} onClick={props.onCloseModal}>Справочники<span
                    className={"category-list__count"}>1134</span></NavLink>
            </li>
            <li>
                <NavLink to="/fantastic" className={'category-list__link'} onClick={props.onCloseModal}>Фантастика<span
                    className={"category-list__count"}>1134</span></NavLink>
            </li>
            <li>
                <NavLink to="/humor" className={'category-list__link'} onClick={props.onCloseModal}>Юмористическая литература<span
                    className={"category-list__count"}>1134</span></NavLink>
            </li>
        </ul>
    );
};
