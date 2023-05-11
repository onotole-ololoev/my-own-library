import React from 'react';
import {SortAscendingOutlined} from '@ant-design/icons';
import {Button} from 'antd';
import {useResponsive} from "../../hooks/useResponsive";

import './styles.scss'


type SortButtonType = {
    onHandleSort: () => void
}

export const SortButton = (props: SortButtonType) => {

    const {isMobile, isTablet, isDesktop} = useResponsive()

    return (
        <>
            {isMobile || isTablet ? <Button shape="circle" icon={<SortAscendingOutlined/>} onClick={props.onHandleSort}/> : <Button className={'sort-btn'} shape="circle" icon={<SortAscendingOutlined/>} onClick={props.onHandleSort}>Sort by rating</Button>}
        </>
        // <Button shape="circle" icon={<SortAscendingOutlined/>}/>
    );
}
