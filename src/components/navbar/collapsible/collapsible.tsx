import React, { useState } from 'react';
import { classNames as cx } from '../../../utils/index';
import './styles.scss';

type CollapsibleType = {
    className: any
    title: string
    children: React.ReactNode

}

export const Collapsible = (props: CollapsibleType) => {
    const [isOpen, setOpen] = useState(false);

    const classNames: any = cx('collapsible', props.className, {
        'collapsible__opened': isOpen,
    });

    const onToggle = () => setOpen(!isOpen);

    return (
        <div className={classNames}>
            <div role='button' className='collapsible__head' tabIndex={0} onClick={onToggle} onKeyDown={onToggle}>
                {props.title}
            </div>
            <div className='collapsible__content'>{props.children}</div>
        </div>
    );
};