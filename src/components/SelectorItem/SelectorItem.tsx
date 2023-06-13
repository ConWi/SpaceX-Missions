import React, {FC} from 'react';
import './SelectItem.css'
import {IFilterItem} from "../../types/types";
import {useMissionPageContext} from "../../contexts/missionPageContext";
import { useNavigate } from 'react-router-dom';

const SelectItem: FC<IFilterItem> = (filterItem: IFilterItem) => {
    const { setFilters, filters} = useMissionPageContext()
    const navigate = useNavigate()

    function updateFilterContext(e: React.ChangeEvent<HTMLSelectElement>) {
        setFilters(filters.map(filter => {
            if (e.target.name === filter.selectName) {
                filter.value = e.target.value
            }

            return filter
        }))
        navigate('/1')
    }



    return (
        <div className={'select-item__container'}>
            <div className={'select-item__title'}>{filterItem.title}</div>
            <select name={filterItem.selectName} onChange={e => updateFilterContext(e)} className={'select-item__select'}>
                <option value={'All'}>All</option>
                {filterItem.values.map((value) => {
                    return <option key={value} value={value}>{value}</option>
                })}
            </select>
        </div>
    );
};

export default SelectItem;