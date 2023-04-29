import React from 'react';
import {SortAscendingOutlined} from '@ant-design/icons';
import {Button} from 'antd';
import {useResponsive} from "../../hooks/useResponsive";

import './styles.scss'

export const SortButton: React.FC = () => {

    const {isMobile, isTablet, isDesktop} = useResponsive()

    return (
        <>
            {isMobile || isTablet ? <Button shape="circle" icon={<SortAscendingOutlined/>}/> : <Button className={'sort-btn'} shape="circle" icon={<SortAscendingOutlined/>}>Sort by rating</Button>}
        </>
        // <Button shape="circle" icon={<SortAscendingOutlined/>}/>
    );
}
