import React from 'react';
import style from './SelectorItem.module.css'
import {useMissionPageContext} from '../../contexts/missionPageContext';
import {ISelectorItem} from '../../types/selector/selector';
import {onChangeOption} from '../../helpers/selector/selector';
import {useRoutingDataList} from '../../hooks/routing/useRoutingDataList';

export type ISelectorItemProps = {
    selectorItem: ISelectorItem
}

const SelectorItem = ({selectorItem}: ISelectorItemProps) => {
    const {selectedOptions} = useMissionPageContext();
    const {navigate, queryParams} = useRoutingDataList()

    return (
        <div className={style.selectorItemContainer}>
            <div className={style.selectorItemTitle}>{selectorItem.title}</div>
            <select
                name={selectorItem.selectorName}
                onChange={e => onChangeOption(e, navigate, queryParams)}
                className={style.selectorItemSelect}
            >
                <option value={selectorItem.defaultOptionValue}>{selectorItem.defaultOptionValue}</option>
                {selectorItem.options.map((option) => (
                    <option
                        key={option}
                        value={option}
                        defaultValue={(option === selectedOptions[selectorItem.selectorName]) ? option : undefined}
                    >
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectorItem;