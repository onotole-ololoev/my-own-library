import React, {ChangeEvent} from 'react';
import {Input} from 'antd';
import {useSearchParams} from "react-router-dom";

import './styles.scss'

const {Search} = Input;

type InputFieldType = {
    searchBook: (el: string) => void
}


export const InputField = (props: InputFieldType) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const titleQuery = searchParams.get('title') || '';

    const onSearch = (value: string) => {
        props.searchBook(value)
        // console.log(value)
        // setSearchParams({title: value})
    };



    return (
        <Search placeholder="Поиск книги или автора…" onSearch={onSearch} className={'search-input'}/>
    )
};

