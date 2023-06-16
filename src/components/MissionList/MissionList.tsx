import React from 'react';
import style from './MissionList.module.css'
import MissionItem from '../MissionItem/MissionItem';
import {useMissionPageContext} from '../../contexts/missionPageContext';
import {getMissionsByPagination} from '../../helpers/pagination/missions';

const MissionList = () => {
    const {missionList, pagination} = useMissionPageContext();

    if (!missionList.length) {
        return <p>No matching data</p>
    }

    const missionsPage = getMissionsByPagination(missionList, pagination.currentPage, pagination.pageMissionsLimit)
    return (
        <div className={style.missionListContainer}>
            {
                missionsPage.map((missionItem, index) => <MissionItem key={index} {...missionItem}/>)
            }
        </div>
    );
};

export default MissionList;