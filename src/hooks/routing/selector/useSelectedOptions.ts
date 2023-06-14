import {useQueryParams} from '../useQueryParams';
import {DefaultSelectedOptions, ISelectedOptions, ISelectorItem} from '../../../types/selector/selector';
import {getSelectedOption} from '../../../helpers/option/option';
import {convertArrayItemsToObject} from '../../../helpers/object/arrays/convert';

export const useSelectedOptions = (selectorItems: ISelectorItem[]): ISelectedOptions => {
    const queryParams = useQueryParams()

    const result = selectorItems.map((selectorItem) => ({
        [selectorItem.selectorName]: getSelectedOption(
            queryParams, selectorItem.selectorName, selectorItem.options, DefaultSelectedOptions.All
        ),
    }));

    return convertArrayItemsToObject(result) as ISelectedOptions;
}
