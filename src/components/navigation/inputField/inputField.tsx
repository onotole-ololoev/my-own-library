import React, {ChangeEvent} from 'react';
import {Input} from 'antd';
import {useSearchParams} from "react-router-dom";

import './styles.scss'

const {Search} = Input;




export const InputField: React.FC = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const titleQuery = searchParams.get('title') || '';

    const onSearch = (value: string) => {
        console.log(value)
        setSearchParams({title: value})
    };

    return (
        <Search placeholder="Поиск книги или автора…" onSearch={onSearch} className={'search-input'}/>
    )
};

