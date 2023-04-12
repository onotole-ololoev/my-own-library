import React, {useState} from 'react';
import type {RadioChangeEvent} from 'antd';
import {Button, Radio} from 'antd';

import './styles.scss'
import {AppstoreOutlined, BarsOutlined, SortAscendingOutlined} from "@ant-design/icons";


const options = [
    {label: <AppstoreOutlined />, value: 'TileView'},
    {label: <BarsOutlined />, value: 'ListView'}
];

export const ViewChangeRadio: React.FC = () => {

    const [value, setValue] = useState('TileView');

    const onChange = ({target: {value}}: RadioChangeEvent) => {
        setValue(value);
    };

    return (
        <>
            <Radio.Group
                options={options}
                onChange={onChange}
                value={value}
                optionType="button"
                buttonStyle="solid"
            />
        </>
    );
};
