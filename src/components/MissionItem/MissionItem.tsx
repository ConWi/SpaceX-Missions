import React from 'react';
import './MissionItem.css'
import {ILaunch} from '../../types/launch/launch';
import defaultLaunch from './../../assets/default-back.jpg'
import {convertFormatToRussian} from '../../helpers/date/dateHandler';

const MissionItem = ({...mission}: ILaunch) => {

    return (
        <div className={'mission-item'}>
            <div className={'mission-item__container'}>
                <div className={'mission-item__img'}>
                    <img
                        src={mission.links.missionPatchSmall ?? defaultLaunch}
                        alt="Rocket"
                    />
                </div>
                <div className={'mission-info'}>
                    <div className={'mission-info__header'}>
                        <div className={'mission-info__title'}>{mission.missionName}</div>
                        <div className={'mission-info__date'}>
                            {convertFormatToRussian(mission.launchDateUtc)}
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