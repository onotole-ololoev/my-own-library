import React, {useState} from 'react';
import {CloseOutlined, SearchOutlined} from '@ant-design/icons';
import {Button, Tooltip} from 'antd';
import {InputField} from "../inputField/inputField";


import './styles.scss'

type SearchButtonType = {
    setIsInputAvailable: (value: boolean) => void
    isInputAvailable: boolean
}

export const SearchButton: React.FC<SearchButtonType> = ({setIsInputAvailable, isInputAvailable}) => {

        const setInputView = () => {
            setIsInputAvailable(!isInputAvailable)
        }

        return (
            isInputAvailable === false
                ?
                <Tooltip title="search">
                    <Button shape="circle" icon={<SearchOutlined/>} onClick={setInputView}/>
                </Tooltip>
                :
                <>
                    <Button shape="circle" icon={<CloseOutlined />} onClick={setInputView}/>
                    <InputField/>
                </>

        )
    }
;
