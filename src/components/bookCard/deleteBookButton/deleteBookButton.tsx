import React from 'react';
import {Button} from "antd";


type DeleteBookButtonType = {
    onDeleteBook: () => void
}

export const DeleteBookButton = (props: DeleteBookButtonType) => {
    return (
        <Button type="primary" danger onClick={props.onDeleteBook}>
            Delete this book
        </Button>
    );
};
