import React from 'react';
import SelectorItem from '../SelectorItem/SelectorItem';
import './SelectorContainer.css'
import {ISelectorItem} from '../../types/selector/selector';

export interface ISelectorContainerProps {
    selectorItems: ISelectorItem[]
}

const SelectorContainer = ({selectorItems}: ISelectorContainerProps) => {
    return (
        <div className={'selector-container'}>
            {selectorItems.map((selectorItem) => {
                return <SelectorItem key={selectorItem.selectorName} selectorItem={selectorItem}/>
            })}
        </div>
    );
};

export default SelectorContainer;