import React, {SyntheticEvent} from 'react';
import {NavLink} from 'react-router-dom'


import { useNavigate } from "react-router-dom";

import './styles.scss'


type BooksCategoryListType = {
    onClose?: () => void
}

type BooksCategoryItemType = {
    title: string
    count: number
    path: string
    onClose?: () => void
}

const navigationBooksCategories = [
    {
        title: 'Все книги',
        count: 1134,
        path: '/'
    },
    {
        title: 'Бизнес-книги',
        count: 1134,
        path: '/business'
    },
    {
        title: 'Детективы',
        count: 1135,
        path: '/detective'
    },
    {
        title: 'Зарубежная литература',
        count: 1135,
        path: '/foreign'
    },
    {
        title: 'Исторические',
        count: 1135,
        path: '/history'
    },
    {
        title: 'Классическая литература',
        count: 1135,
        path: '/classic'
    },
    {
        title: 'Психологические',
        count: 1135,
        path: '/psycho'
    },
    {
        title: 'Компьютерная литература',
        count: 1135,
        path: '/computer'
    },
    {
        title: 'Культурные',
        count: 1135,
        path: '/culture'
    },
    {
        title: 'Научные',
        count: 1135,
        path: '/science'
    },
    {
        title: 'Журналистика',
        count: 1135,
        path: '/journalistic'
    },
    {
        title: 'Справочники',
        count: 1135,
        path: '/reference'
    },
    {
        title: 'Фантастика',
        count: 1135,
        path: '/fantastic'
    },
    {
        title: 'Юмористическая литература',
        count: 1135,
        path: '/humor'
    }
]

const BooksCategoryItem = (props: BooksCategoryItemType) => {

    const navigate = useNavigate();

    const handleClick = (e: SyntheticEvent) => {
        e.preventDefault()
        navigate(props.path)
        if (props.onClose) {
            props.onClose()
        }
    }

    return (
        <li>
            <NavLink to={props.path} className={'category-list__link'} onClick={handleClick}>{props.title}<span
                className={"category-list__count"}>{props.count}</span></NavLink>
        </li>
    )
}


export const BooksCategoryList = (props: BooksCategoryListType) => {


    return (
        <ul className={"category-list"}>
            {navigationBooksCategories.map( (item, index) => {
                return <BooksCategoryItem key={index} title={item.title} count={item.count} path={item.path} onClose={props.onClose}/>
            })}
        </ul>
    );
};
