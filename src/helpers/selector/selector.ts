import {NavigateFunction} from 'react-router-dom';
import {DefaultSelectedOptions} from '../../types/selector/selector';
import {removeQueryParam, setValueByKey, updateURL} from '../routing/queryParams';
import {DefaultPaths} from '../../types/routing/routing';

export function onChangeOption(
    e: React.ChangeEvent<HTMLSelectElement>,
    navigate: NavigateFunction,
    queryParams: URLSearchParams
) {
    const optionName = e.target.name;
    const optionValue = e.target.value

    if (optionValue === DefaultSelectedOptions.All) {
        removeQueryParam(queryParams, navigate, optionName, false);
    } else {
        setValueByKey(queryParams, navigate, optionName, optionValue, false)
    }
    updateURL(DefaultPaths.MissionsStarterPage, queryParams, navigate)
}