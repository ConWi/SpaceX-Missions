import React from 'react';
import {useMissionPageContext} from '../../contexts/missionPageContext';
import './Pagination.css'
import {useRoutingDataList} from '../../hooks/routing/useRoutingDataList';
import {updateURL} from '../../helpers/routing/queryParams';

const Pagination = () => {
    const {pagination} = useMissionPageContext();
    const {navigate, queryParams} = useRoutingDataList();

    const handlePrevPage = (prevPage: number): void => {
        if (prevPage === 1) return;

        updateURL(`/${--prevPage}`, queryParams, navigate)
    };

    const handleNextPage = (nextPage: number): void => {
        if (nextPage === pagination.totalPages) return;

        updateURL(`/${++nextPage}`, queryParams, navigate)
    };

    return (
        <div className={'pagination__container'}>
            <div className={'pagination__previous-page-btn'} onClick={() => handlePrevPage(pagination.currentPage)}></div>
            <div className={'pagination__page-info'}>
                Page {pagination.currentPage} of {pagination.totalPages}
            </div>
            <div className={'pagination__next-page-btn'} onClick={() => handleNextPage(pagination.currentPage)}></div>
        </div>
    );
};

export default Pagination;