import {getUniqueValuesByObjects} from '../../../helpers/object/getter';
import {ILaunch} from '../../../types/launch/launch';
import {
    DefaultSelectedOptions,
    ISelectorItem,
    ISelectorKeyMapping,
    SelectorLaunchObjectKeys,
    SelectorNames,
    SelectorTitles
} from '../../../types/selector/selector';

export const useSelectorItems = (data: ILaunch[]): ISelectorItem[] => {
    let result: ISelectorItem[] = [];

    selectorInfoList.forEach((selectorKey) => {
        result.push({
            title: selectorKey.title,
            options: getUniqueValuesByObjects(data, selectorKey.launchObjectProperty),
            selectorName: selectorKey.selectorName,
            defaultOptionValue: DefaultSelectedOptions.All
        });
    })

    return result;
}

const selectorInfoList: ISelectorKeyMapping[] = [
    {
        title: SelectorTitles.Rocket,
        selectorName: SelectorNames.Rocket,
        launchObjectProperty: SelectorLaunchObjectKeys.RocketName,
    },
    {
        title: SelectorTitles.LaunchSite,
        selectorName: SelectorNames.LaunchSite,
        launchObjectProperty: SelectorLaunchObjectKeys.SiteName,
    },
]