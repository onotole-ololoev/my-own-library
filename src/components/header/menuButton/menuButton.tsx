import React, {useState} from 'react';
import {Button, Drawer, Space} from 'antd';
import type {DrawerProps} from 'antd/es/drawer';
import {MenuOutlined} from "@ant-design/icons";

import "./styles.scss";


export const MenuButton: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState<DrawerProps['size']>();

    const showDefaultDrawer = () => {
        setSize('default');
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Space>
                <Button type="text" onClick={showDefaultDrawer}>
                    <MenuOutlined />
                </Button>
            </Space>
            <Drawer
                title={`Трололо`}
                placement="left"
                size={size}
                onClose={onClose}
                open={open}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    );
};

