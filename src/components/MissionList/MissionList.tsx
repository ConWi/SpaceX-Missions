import React, {FC} from 'react';
import './MissionList.css'
import MissionItem from "../MissionItem/MissionItem";
import {useMissionPageContext} from "../../contexts/missionPageContext";
import {getFilteredData} from "../../helpers/filter";

const MissionList: FC = () => {
    const {filters, missionList} = useMissionPageContext();

    const filteredData = getFilteredData(missionList, filters)

    if (!filteredData.length) {
        return <p>No matching data</p>
    }

    return (
        <div className={'mission-list__container'}>
            {filteredData
                ?.map((missionItem, index) => {
                if (index > 5) return '';
                return <MissionItem key={index} {...missionItem}/>
            })}
        </div>
    );
};

export default MissionList;