import React from 'react';

import {MenuButton} from "./menuButton/menuButton";

import './styles.scss';
import {HeaderTitle} from "./headerTitle/headerTitle";

export const Header = () => {
    return (
        <div className="header">
            <MenuButton />
            <HeaderTitle />
        </div>
    );
};
