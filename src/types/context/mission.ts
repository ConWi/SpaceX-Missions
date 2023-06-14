import {ISelectedOptions, ISelectorItem} from '../selector/selector';
import {ILaunch} from '../launch/launch';

export interface IMissionPageContext {
    missionList: ILaunch[],
    selectorItems: ISelectorItem[],
    selectedOptions: ISelectedOptions,
    pagination: IPagination,
}

export interface IPagination {
    currentPage: number,
    totalPages: number,
    pageMissionsLimit: number,
}