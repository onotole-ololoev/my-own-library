import React from 'react';
import {SortAscendingOutlined} from '@ant-design/icons';
import {Button, Tooltip} from 'antd';

export const SortButton: React.FC = () => (
    <Tooltip title="sort">
        <Button shape="circle" icon={<SortAscendingOutlined/>}/>
    </Tooltip>
);
