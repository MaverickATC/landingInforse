import React from 'react';
import LetsTalk from '../LetsTalk/LetsTalk';

export const Modal = (props) => {
    if (!props.show)
        return null;

    return (
        <LetsTalk click={props.click}/>
    )
}