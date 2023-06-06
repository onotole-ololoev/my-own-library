import React from 'react';
import { Pagination } from 'antd';

export const BooksPagination = () => {
    return (
        <Pagination defaultCurrent={1} total={50} />
    )
}
