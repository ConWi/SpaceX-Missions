import React from 'react';
import SelectorItem from '../SelectorItem/SelectorItem';
import style from './SelectorContainer.module.css'
import {ISelectorItem} from '../../types/selector/selector';

export interface ISelectorContainerProps {
    selectorItems: ISelectorItem[]
}

const SelectorContainer = ({selectorItems}: ISelectorContainerProps) => {
    return (
        <div className={style.selectorContainer}>
            {selectorItems.map((selectorItem) => {
                return <SelectorItem key={selectorItem.selectorName} selectorItem={selectorItem}/>
            })}
        </div>
    );
};

export default SelectorContainer;