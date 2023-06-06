import React from 'react';
import { Pagination } from 'antd';

type BooksPaginationType = {
    totalPages: number

}

export const BooksPagination = (props: BooksPaginationType) => {
    return (
        <Pagination defaultCurrent={1} total={props.totalPages} />
    )
}
