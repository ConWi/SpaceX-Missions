import React, {FC} from 'react';
import FilterItem from "../FilterItem/FilterItem";
import './FilterContainer.css'
import {IFilterProps} from "../../types/types";


const FilterContainer: FC<IFilterProps> = ({filters}: IFilterProps) => {

    console.log('Filter Container')
    return (
        <div className={'filter-container'}>
            {filters.map((filter) => {
                return <FilterItem key={filter.selectName} {...filter}/>
            })}
        </div>
    );
};

export default FilterContainer;