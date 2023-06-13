import React, {FC} from 'react';
import SelectItem from "../SelectItem/SelectItem";
import './SelectContainer.css'
import {IFilterProps} from "../../types/types";


const SelectContainer: FC<IFilterProps> = ({filters}: IFilterProps) => {

    console.log('Filter Container')
    return (
        <div className={'select-container'}>
            {filters.map((filter) => {
                return <SelectItem key={filter.selectName} {...filter}/>
            })}
        </div>
    );
};

export default SelectContainer;