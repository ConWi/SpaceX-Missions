import {useNavigate} from 'react-router-dom';
import {IRoutingDataList} from '../../types/routing/routing';
import {useQueryParams} from './useQueryParams';

export const useRoutingDataList = (): IRoutingDataList => {
    return {
        queryParams: useQueryParams(),
        navigate: useNavigate()
    }
}