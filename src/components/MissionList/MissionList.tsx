import React, {FC, useEffect} from 'react';
import './MissionList.css'
import MissionItem from "../MissionItem/MissionItem";
import {useMissionPageContext} from "../../contexts/missionPageContext";
import {getFilteredData} from "../../helpers/filter";

const MissionList: FC = () => {
    const {filters, missionList, pagination} = useMissionPageContext();
    const filteredData = getFilteredData(missionList, filters)
    const maxItemIndex = pagination.pageItemsLimit * pagination.currentPage;
    const minItemIndex = pagination.pageItemsLimit * (pagination.currentPage - 1);


    useEffect(() => {
        if (!filteredData.length) {
            pagination.setTotalPages(1);
            return;
        }

        pagination.setTotalPages(Math.ceil(filteredData.length / pagination.pageItemsLimit));
    }, [filteredData])


    if (!filteredData.length) {
        return <p>No matching data</p>
    }

    return (
        <div className={'mission-list__container'}>
            {filteredData
                ?.filter((item, index) => index >= minItemIndex && index < maxItemIndex)
                ?.map((missionItem, index) => {
                if (index > 20) return '';
                return <MissionItem key={index} {...missionItem}/>
            })}
        </div>
    );
};

export default MissionList;