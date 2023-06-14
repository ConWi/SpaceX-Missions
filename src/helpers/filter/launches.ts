import {ILaunch} from '../../types/launch/launch';
import {DefaultSelectedOptions, ISelectedOptions} from '../../types/selector/selector';

export function getFilteredLaunchList(launchList: ILaunch[], selectedOptions: ISelectedOptions): ILaunch[] {
    return launchList.filter(launch => {
        const rocketFilterPassed = selectedOptions.rocket === launch.rocket.rocket_name
            || selectedOptions.rocket === DefaultSelectedOptions.All;
        const launchSiteFilterPassed = selectedOptions.launch_site === launch.launchSite.site_name
            || selectedOptions.launch_site === DefaultSelectedOptions.All;

        return rocketFilterPassed && launchSiteFilterPassed;
    })
}