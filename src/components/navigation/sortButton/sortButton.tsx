import React from 'react';
import {SortAscendingOutlined} from '@ant-design/icons';
import {Button} from 'antd';

export const SortButton: React.FC = () => (
    <Button shape="circle" icon={<SortAscendingOutlined/>}/>
);
