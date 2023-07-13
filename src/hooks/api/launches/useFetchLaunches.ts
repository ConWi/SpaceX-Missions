import {useFetch} from '../useFetch';
import {API_LAUNCHES_URL} from '../../../types/api/fetch';
import {GET} from '../../../types/api/http';
import {convertLaunchesDtoToLaunches} from '../../../converters/api/launch';
import {ILaunchDto} from '../../../types/dto/launch';
import {ILaunch} from '../../../types/launch/launch';
import {useQuery} from '@tanstack/react-query'
import axios from 'axios';
import {queryKeys} from '../../../types/api/queryKeys';

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

export const useLaunchesRQ = () => {
    return useQuery({
        queryKey: [queryKeys.Launches],
        queryFn: getLaunchesRQ,
        select: convertLaunchesDtoToLaunches,
        initialData: [],
        onError: (error: Error) => {
            console.error(`ERROR: ${error.message}`)
        }
    })
}

export function getLaunchesRQ() {
    return axios
        .get<ILaunchDto[]>(API_LAUNCHES_URL)
        .then(res => res.data)
}