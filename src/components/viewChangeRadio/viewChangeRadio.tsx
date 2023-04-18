import React, {useState} from 'react';
import type {RadioChangeEvent} from 'antd';
import {Radio} from 'antd';
import {AppstoreOutlined, BarsOutlined, SortAscendingOutlined} from "@ant-design/icons";


import './styles.scss'

type  ViewChangeRadioType = {
    view: string
    onChangeView: (el: string) => void
}

const options = [
    {label: <AppstoreOutlined/>, value: 'tile'},
    {label: <BarsOutlined/>, value: 'list'}
];

export const ViewChangeRadio: React.FC<ViewChangeRadioType> = ({view, onChangeView}) => {

    // const [value, setValue] = useState('TileView');

    const onChange = ({target: {value}}: RadioChangeEvent) => {
        onChangeView(value);
    };

    return (
        <Radio.Group
            options={options}
            onChange={onChange}
            value={view}
            optionType="button"
            buttonStyle="solid"
        />
    );
};
