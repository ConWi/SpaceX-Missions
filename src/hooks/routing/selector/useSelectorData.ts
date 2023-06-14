import {ISelectedOptions, ISelectorItem} from '../../../types/selector/selector';
import {useSelectorItems} from './useSelectorItems';
import {useSelectedOptions} from './useSelectedOptions';
import {ILaunch} from '../../../types/launch/launch';

export interface ISelectorData {
    selectedOptions: ISelectedOptions,
    selectorItems: ISelectorItem[],
}

export const useSelectorData = (launchList: ILaunch[]): ISelectorData => {
    const selectorItems = useSelectorItems(launchList)
    const selectedOptions = useSelectedOptions(selectorItems)

    return {
        selectorItems,
        selectedOptions
    }
}