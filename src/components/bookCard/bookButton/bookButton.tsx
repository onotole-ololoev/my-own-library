import React from 'react';
import { Button, Space } from 'antd';

import './styles.scss'

export const BookButton: React.FC = () => (
            <Button type="primary" disabled={false} className={'book-button'}>Забронировать</Button>
);
