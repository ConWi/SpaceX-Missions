import {ILaunchDto} from '../../types/dto/launch';
import {ILaunch} from '../../types/launch/launch';

export const convertLaunchesDtoToLaunches = (launchesDto: ILaunchDto[]): ILaunch[] => {
    return launchesDto.map(launchDto => launchMapping(launchDto))
}

const launchMapping = (launchDto: ILaunchDto) => {
    return {
        launchSite: {
            site_name: launchDto.launch_site.site_name
        },
        links: {
            missionPatchSmall: launchDto.links.mission_patch_small
        },
        rocket: {
            rocket_name: launchDto.rocket.rocket_name
        },
        details: launchDto.details,
        flightNumber: launchDto.flight_number,
        missionName: launchDto.mission_name,
        launchDateUtc: launchDto.launch_date_utc,
    };
}