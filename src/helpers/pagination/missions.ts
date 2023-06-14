import {ILaunch} from '../../types/launch/launch';
import {DefaultPaginationLimits} from '../../types/pagination/pagination';

export interface IMissionsPaginationData {
    currentPage: number,
    totalPages: number,
    pageMissionsLimit: DefaultPaginationLimits.Missions
}

export const getMissionsPaginationInfo = (launchList: ILaunch[], currentPage: number): IMissionsPaginationData => {
    return {
        currentPage,
        totalPages: getTotalPages(launchList),
        pageMissionsLimit: DefaultPaginationLimits.Missions
    }
}

const getTotalPages = (launchList: ILaunch[]): number => {
    return !launchList.length ? 1 : Math.ceil(launchList.length / DefaultPaginationLimits.Missions)
}

export const getMissionsByPagination = (launchList: ILaunch[], currentPage: number, pageLimit: number): ILaunch[] => {
    const maxPaginationIndex = pageLimit * currentPage;
    const minPaginationIndex = pageLimit * (currentPage - 1);

    return launchList
        .filter((item, index) => index >= minPaginationIndex && index < maxPaginationIndex)
}

export const isInvalidCurrentPage = (currentPage: number, totalPages: number): boolean => {
    return currentPage > totalPages
}