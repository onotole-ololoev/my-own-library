import React from 'react';
import {Rights} from "./rights/rights";
import {Socials} from "./socials/socials";
import './styles.scss';


export const Footer = () => {
    return (
        <div className={'footer'}>
            <Rights />
            <Socials />
        </div>
    );
};

