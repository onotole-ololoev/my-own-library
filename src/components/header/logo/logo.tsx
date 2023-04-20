import React from 'react';
import {NavLink} from 'react-router-dom'
import logo from '../../../assets/logo.jpg'

import './styles.scss'

export const Logo = () => {
    return (
        <NavLink to={'/'} className={'logo'}>
            <img className={'logo__img'} src={logo} alt="library logo"/>
        </NavLink>
    );
};