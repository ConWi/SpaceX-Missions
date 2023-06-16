import React from 'react';
import style from './MissionItem.module.css'
import {ILaunch} from '../../types/launch/launch';
import defaultLaunch from './../../assets/default-back.jpg'
import {convertFormatToRussian} from '../../helpers/date/dateHandler';

const MissionItem = ({...mission}: ILaunch) => (
    <div className={style.missionItem}>
        <div className={style.missionItemContainer}>
            <div className={style.missionItemImg}>
                <img
                    src={mission.links.missionPatchSmall ?? defaultLaunch}
                    alt='Rocket'
                />
            </div>
            <div className={style.missionInfo}>
                <div className={style.missionInfoHeader}>
                    <div className={style.missionInfoTitle}>{mission.missionName}</div>
                    <div className={style.missionInfoDate}>
                        {convertFormatToRussian(mission.launchDateUtc)}
                    </div>
                </div>
                <div className={style.missionInfoDescription}>
                    {mission.details ?? 'Describe is empty'}
                </div>
            </div>
        </div>
    </div>
);

export default MissionItem;