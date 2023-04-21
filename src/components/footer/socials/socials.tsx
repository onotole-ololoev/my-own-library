import React from 'react';

import {FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined} from "@ant-design/icons";

import './styles.scss'

export const Socials = () => {
    return (
        <div className={'socials'}>
            <InstagramOutlined className={'socials__item'}/>
            <FacebookOutlined className={'socials__item'}/>
            <YoutubeOutlined className={'socials__item'}/>
            <TwitterOutlined className={'socials__item'}/>
        </div>
    );
};
