import React from 'react';
import './MissionItem.css'
import {ILaunch} from "../../types/types";
import defaultLaunch from './../../assets/default-back.jpg'
import {prettifyDate} from "../../helpers/dateHandler";

const MissionItem = ({...mission}: ILaunch) => {

    console.log('Mission Item')
    return (
        <div className={'mission-item'}>
            <div className={'mission-item__container'}>
                <div className={'mission-item__img'}>
                    <img
                        src={mission.links.mission_patch_small ?? defaultLaunch}
                        alt="Rocket"
                    />
                </div>
                <div className={'mission-info'}>
                    <div className={'mission-info__header'}>
                        <div className={'mission-info__title'}>{mission.mission_name}</div>
                        <div className={'mission-info__date'}>
                            {prettifyDate(mission.launch_date_utc)}
                        </div>
                    </div>
                    <div className={'mission-info__description'}>
                        {mission.details ?? 'Describe is empty'}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionItem;