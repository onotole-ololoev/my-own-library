import React from 'react';
import avatarUser from '../../../assets/avatar.jpg'

import './styles.scss'

export const UserAvatar = () => {
    return (
        <div className={'user-avatar'}>
            <img src={avatarUser} alt="your avatar"/>
        </div>
    );
};


