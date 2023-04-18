import React from 'react';
import {NavLink} from 'react-router-dom';
import {Collapsible} from "./collapsible/collapsible";
import {BookRating} from "../bookCard/bookRating/bookRating";
import {BooksCategoryList} from "./booksCategoryList/booksCategoryList";

import './styles.scss'

type NavbarType = {
    onClose?: () => void
}


export const Navbar = (props: NavbarType) => {

    // const onClickLink = (e: any) => {
    //     e.preventDefault();
    // }


    return (
        <ul className={'navbar'}>
            <li className={'navbar-item'}>
                <Collapsible title={'Витрина книг'}>
                    <BooksCategoryList />
                </Collapsible>
            </li>
            <li className={'navbar-item'}>
                <a href="#" className={'navbar-item__link'}>Правила пользования</a>
            </li>
            <li className={'navbar-item'}>
                <a href="#" className={'navbar-item__link'}>Договор оферты</a>
            </li>
            <li className={'navbar-item'}>
                <a href="#" className={'navbar-item__link'}>Профиль</a>
            </li>
            <li className={'navbar-item'}>
                <a href="#" className={'navbar-item__link'}>Выход</a>
            </li>
            <li className={'navbar-item'}>
                <NavLink to="/rules" className={'navbar-item__link'} onClick={props.onClose}>rules</NavLink>
            </li>

            {/*<li className={'navbar-item'}>*/}
            {/*    <NavLink to={'#'} onClick={onClickLink}*/}
            {/*             className={(props) => (props.isActive ? 'navbar-link--active' : 'navbar-link')}>Правила*/}
            {/*        пользования</NavLink>*/}
            {/*</li>*/}
            {/*<li className={'navbar-item'}>*/}
            {/*    <NavLink to={'#'} onClick={onClickLink}*/}
            {/*             className={(props) => (props.isActive ? 'navbar-link--active' : 'navbar-link')}>Договор*/}
            {/*        оферты</NavLink>*/}
            {/*</li>*/}
        </ul>
    );
};
