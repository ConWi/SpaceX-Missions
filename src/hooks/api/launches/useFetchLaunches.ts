import {useFetch} from '../useFetch';
import {API_LAUNCHES_URL} from '../../../types/api/fetch';
import {GET} from '../../../types/api/http';
import {convertLaunchesDtoToLaunches} from '../../../converters/api/launch';
import {ILaunchDto} from '../../../types/dto/launch';
import {ILaunch} from '../../../types/launch/launch';

export interface IFetchLaunches {
    loading: boolean,
    launchList: ILaunch[] | [],
    errorMessage: string,
}

export const useFetchLaunches = (): IFetchLaunches => {
    const {loading, data: launchListDto, errorMessage} = useFetch<ILaunchDto[]>(
        API_LAUNCHES_URL,
        GET,
        [],
    );

    const launchList = convertLaunchesDtoToLaunches(launchListDto)

    return {
        loading,
        launchList,
        errorMessage
    }
}