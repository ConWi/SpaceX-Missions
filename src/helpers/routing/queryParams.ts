import {NavigateFunction} from 'react-router-dom';

export function getValueByKey (
    params: URLSearchParams,
    key: string,
): string {
    return params.get(key) ?? '';
}

export function setValueByKey (
    params: URLSearchParams,
    navigate: NavigateFunction,
    key: string,
    value: string,
    shouldChangeURL: boolean = true
) {
    params.set(key, value);

    if (shouldChangeURL) navigate({search: params.toString()})
}

export function removeQueryParam (
    params: URLSearchParams,
    navigate: NavigateFunction,
    key: string,
    shouldChangeURL: boolean = true
) {
    params.delete(key)

    if (shouldChangeURL) navigate({search: params.toString()})
}

export function updateURL(pathname: string, params: URLSearchParams, navigate: NavigateFunction) {
    navigate({pathname: pathname, search: params.toString()})
}