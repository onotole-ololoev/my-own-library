import React from 'react';

import {BookCard} from "../../components/bookCard/bookCard";

import './styles.scss'


type MainPageType = {
    view: string
}

export const MainPage = (props: MainPageType) => {
    return (
        <div>
            <BookCard view={props.view}/>
            <BookCard view={props.view}/>
            <BookCard view={props.view}/>
            <BookCard view={props.view}/>
        </div>
    );
};
