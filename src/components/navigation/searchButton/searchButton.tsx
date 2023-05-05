import React, {useState} from 'react';
import {CloseOutlined, SearchOutlined} from '@ant-design/icons';
import {Button, Tooltip} from 'antd';
import {InputField} from "../inputField/inputField";


import './styles.scss'
import {useResponsive} from "../../hooks/useResponsive";

type SearchButtonType = {
    setIsInputAvailable: (value: boolean) => void
    isInputAvailable: boolean
    searchBook: (el: string) => void
}

export const SearchButton: React.FC<SearchButtonType> = ({setIsInputAvailable, isInputAvailable, searchBook}) => {

        const setInputView = () => {
            setIsInputAvailable(!isInputAvailable)
        }

        const {isMobile, isTablet, isDesktop} = useResponsive()

        return (
            isInputAvailable === false
                ?
                <>
                    {isMobile || isTablet
                        ?
                        <Button shape="circle" icon={<SearchOutlined/>} onClick={setInputView}/>
                        :
                        <InputField searchBook={searchBook}/>
                    }
                </>
                :
                <>
                    <Button shape="circle" icon={<CloseOutlined/>} onClick={setInputView} className={'close-btn'}/>
                    <InputField searchBook={searchBook}/>
                </>

        )
    }
;
