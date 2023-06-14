import {getValueByKey} from '../routing/queryParams';

export function getSelectedOption<T> (
    params: URLSearchParams,
    key: string,
    options: string[],
    defaultValue: T,
): string | T {
    const paramValue = getValueByKey(params, key)

    if (!options.includes(paramValue)) return defaultValue

    return paramValue
}