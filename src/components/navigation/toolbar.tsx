import React, {useState} from 'react';
import {ViewChangeRadio} from "../viewChangeRadio/viewChangeRadio";
import {SearchButton} from "./searchButton/searchButton";
import {SortButton} from "./sortButton/sortButton";

import './styles.scss'

type ToolbarType = {
    view: string
    onChangeView: (el: string) => void
    onHandleSort: () => void
    // searchBook: (el: string) => void
}

export const Toolbar = (props: ToolbarType) => {

    const [isInputAvailable, setIsInputAvailable] = useState<boolean>(false)



    return (
        <div className='navigation'>

            <SearchButton isInputAvailable={isInputAvailable} setIsInputAvailable={setIsInputAvailable} />
            {isInputAvailable === false
                ?
                <>
                    <SortButton onHandleSort={props.onHandleSort}/>
                    <ViewChangeRadio view={props.view} onChangeView={props.onChangeView}/>
                </>
                :
                null
            }
        </div>
    );
};
