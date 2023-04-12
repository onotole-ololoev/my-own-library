import React, {useState} from 'react';
import {ViewChangeRadio} from "../viewChangeRadio/viewChangeRadio";
import {InputField} from "./inputField/inputField";


import { SortAscendingOutlined} from "@ant-design/icons";

import './styles.scss'
import {SearchButton} from "./searchButton/searchButton";
import {SortButton} from "./sortButton/sortButton";


export const Navigation = () => {

    const [isInputAvailable, setIsInputAvailable] = useState<boolean>(false)



    return (
        <div className='navigation'>
            <SearchButton isInputAvailable={isInputAvailable} setIsInputAvailable={setIsInputAvailable}/>
            {isInputAvailable === false
                ?
                <>
                    <SortButton />
                    <ViewChangeRadio/>
                </>
                :
                null
            }
        </div>
    );
};
