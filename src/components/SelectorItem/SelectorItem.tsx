import React from 'react';
import './SelectorItem.css'
import {useMissionPageContext} from '../../contexts/missionPageContext';
import {ISelectorItem} from '../../types/selector/selector';
import {onChangeOption} from '../../helpers/selector/selector';
import {useRoutingDataList} from '../../hooks/routing/useRoutingDataList';

export interface ISelectorItemProps {
    selectorItem: ISelectorItem
}

const SelectorItem = ({selectorItem}: ISelectorItemProps) => {
    const {selectedOptions} = useMissionPageContext();
    const {navigate, queryParams} = useRoutingDataList()

    return (
        <div className={'selector-item__container'}>
            <div className={'selector-item__title'}>{selectorItem.title}</div>
            <select
                name={selectorItem.selectorName}
                onChange={e => onChangeOption(e, navigate, queryParams)}
                className={'selector-item__select'}
            >
                <option value={selectorItem.defaultOptionValue}>{selectorItem.defaultOptionValue}</option>
                {selectorItem.options.map((option) => {
                    return <option
                        key={option}
                        value={option}
                        selected={(option === selectedOptions[selectorItem.selectorName])}
                    >
                        {option}
                    </option>
                })}
            </select>
        </div>
    );
};

export default SelectorItem;