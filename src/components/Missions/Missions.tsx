import React from 'react';
import Container from '../Container/Container';
import Header from '../Header/Header';
import {MissionPageProvider} from '../../contexts/missionPageContext';
import SelectorContainer from '../SelectorContainer/SelectorContainer';
import Pagination from '../Pagination/Pagination';
import MissionList from '../MissionList/MissionList';
import {getLaunchesRQ, useFetchLaunches, useLaunchesRQ} from '../../hooks/api/launches/useFetchLaunches';
import {useValidateFetchedLaunches} from '../../hooks/api/launches/useValidateFetchedLaunches';
import Spinner from '../Spinner/Spinner';
import {getFilteredLaunchList} from '../../helpers/filter/launches';
import {useSelectorData} from '../../hooks/routing/selector/useSelectorData';
import {getMissionsPaginationInfo, isInvalidCurrentPage} from '../../helpers/pagination/missions';
import {useRoutingDataList} from '../../hooks/routing/useRoutingDataList';
import {updateURL} from '../../helpers/routing/queryParams';

export type IMissionsProps = {
    currentPage: number
}

const Missions = ({currentPage}: IMissionsProps) => {
    const {queryParams, navigate} = useRoutingDataList()
    let {isFetching, data: launchList} = useLaunchesRQ()
    // const {loading, launchList, errorMessage} = useFetchLaunches()
    const {selectedOptions, selectorItems} = useSelectorData(launchList)

    if (isFetching) return <Spinner/>

    const filteredLaunchList = getFilteredLaunchList(launchList, selectedOptions)
    const pagination = getMissionsPaginationInfo(filteredLaunchList, currentPage)

    if (isInvalidCurrentPage(pagination.currentPage, pagination.totalPages)) {
        updateURL(`/${pagination.totalPages}`, queryParams, navigate)
    }

    return (
        <div className='App'>
            <Container>
                <Header/>
                <MissionPageProvider value={{
                    missionList: filteredLaunchList, selectedOptions, selectorItems,
                    pagination
                }}>
                    <SelectorContainer selectorItems={selectorItems}/>
                    <Pagination/>
                    <MissionList/>
                </MissionPageProvider>
            </Container>
        </div>
    );
};

export default Missions;