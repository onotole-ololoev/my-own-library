import React from 'react';
import {NavLink} from 'react-router-dom'
import avatarUser from '../../../assets/ava.png'

import './styles.scss'

export const UserAvatar = () => {
    return (
        <NavLink to={'/profile'} className={'user-avatar'}>
            <img className={'user-avatar__img'} src={avatarUser} alt="your avatar"/>
        </NavLink>
    );
};


