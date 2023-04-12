import React from 'react';
import {Input} from 'antd';

import './styles.scss'

const {Search} = Input;

const onSearch = (value: string) => console.log(value);

export const InputField: React.FC = () => (
    <Search placeholder="Поиск книги или автора…" onSearch={onSearch} />

);

