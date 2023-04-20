import React from 'react';
import avatarUser from '../../../assets/erofeev-moskva-petushki.jpg'

import './styles.scss'

export const UserAvatar = () => {
    return (
        <div className={'user-avatar'}>
            <img className={'user-avatar__img'} src={avatarUser} alt="your avatar"/>
        </div>
    );
};


