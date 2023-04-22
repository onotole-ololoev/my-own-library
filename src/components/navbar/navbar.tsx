import React from 'react';
import {NavLink} from 'react-router-dom';
import {Collapsible} from "./collapsible/collapsible";
import {BooksCategoryList} from "./booksCategoryList/booksCategoryList";

import './styles.scss'

type NavbarType = {
    onClose?: () => void
}


export const Navbar = (props: NavbarType) => {

    return (
        <ul className={'navbar'}>
            <li className={'navbar-item'}>
                <Collapsible title={'Витрина книг'}>
                    <BooksCategoryList onCloseModal={props.onClose}/>
                </Collapsible>
            </li>
            <li className={'navbar-item'}>
                <NavLink to="/rules" className={'navbar-item__link'} onClick={props.onClose}>Правила пользования</NavLink>
            </li>
            <li className={'navbar-item'}>
                <NavLink to="/contract" className={'navbar-item__link'} onClick={props.onClose}>Договор оферты</NavLink>
            </li>
            <li className={'navbar-item'}>
                <NavLink to="/profile" className={'navbar-item__link'} onClick={props.onClose}>Профиль</NavLink>
            </li>
            <li className={'navbar-item'}>
                <NavLink to="/logout" className={'navbar-item__link'} onClick={props.onClose}>Выход</NavLink>
            </li>
            <li className={'navbar-item'}>
                <NavLink to="/admin" className={'navbar-item__link'} onClick={props.onClose}>adminTools</NavLink>
            </li>
        </ul>
    );
};
