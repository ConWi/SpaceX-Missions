import {NavigateFunction} from 'react-router-dom';

export interface IRoutingDataList {
    queryParams: URLSearchParams,
    navigate: NavigateFunction,
}

export const enum DefaultPaths {
    MissionsStarterPage = '/1'
}