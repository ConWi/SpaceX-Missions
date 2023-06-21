import {ILaunch} from '../../types/launch/launch';
import {DefaultSelectedOptions, ISelectedOptions} from '../../types/selector/selector';

export function getFilteredLaunchList(launchList: ILaunch[], selectedOptions: ISelectedOptions): ILaunch[] {
    return launchList.filter(launch => {
        const rocketFilterMatched = isSelectedOption(selectedOptions.rocket, launch.rocket.rocket_name)
            || isDefaultOption(selectedOptions.rocket);
        const launchSiteFilterMatched = isSelectedOption(selectedOptions.launch_site, launch.launchSite.site_name)
            || isDefaultOption(selectedOptions.launch_site);

        return rocketFilterMatched && launchSiteFilterMatched;
    })
}

const isDefaultOption = (option: string | DefaultSelectedOptions): boolean => {
    return option === DefaultSelectedOptions.All;
}

const isSelectedOption = (selectedOptionValue: string, launchValue: string): boolean => {
    return selectedOptionValue === launchValue
}