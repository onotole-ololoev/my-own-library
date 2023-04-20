import React from 'react';

import {MenuButton} from "./menuButton/menuButton";
import {HeaderTitle} from "./headerTitle/headerTitle";
import {useResponsive} from "../hooks/useResponsive";
import {UserAvatar} from "./userAvatar/userAvatar";


import './styles.scss';

export const Header = () => {

    const {isMobile, isTablet, isDesktop} = useResponsive()

    return (
        <div className="header">
            {isMobile || isTablet ? <MenuButton/> : null}
            <HeaderTitle/>
            {isDesktop ? <UserAvatar/> : null}
        </div>
    );
};
