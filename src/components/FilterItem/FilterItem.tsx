import React, {FC} from 'react';
import './FilterItem.css'
import {IFilterItem} from "../../types/types";
import {useMissionPageContext} from "../../contexts/missionPageContext";

const FilterItem: FC<IFilterItem> = (filterItem: IFilterItem) => {
    const { setFilters, filters, pagination } = useMissionPageContext()

    function updateFilterContext(e: React.ChangeEvent<HTMLSelectElement>) {
        setFilters(filters.map(filter => {
            if (e.target.name === filter.selectName) {
                filter.value = e.target.value
            }

            return filter
        }))

        pagination.setCurrentPage(1);
    }



    return (
        <div className={'filter-item__container'}>
            <div className={'filter-item__title'}>{filterItem.title}</div>
            <select name={filterItem.selectName} onChange={e => updateFilterContext(e)} className={'filter-item__select'}>
                <option value={'All'}>All</option>
                {filterItem.values.map((value) => {
                    return <option key={value} value={value}>{value}</option>
                })}
            </select>
        </div>
    );
};

export default FilterItem;