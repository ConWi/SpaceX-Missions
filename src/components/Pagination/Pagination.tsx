import React from 'react';
import {useMissionPageContext} from '../../contexts/missionPageContext';
import style from './Pagination.module.css'
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
        <div className={style.paginationContainer}>
            <div className={style.paginationPreviousPageBtn} onClick={() => handlePrevPage(pagination.currentPage)}></div>
            <div className={style.paginationPageInfo}>
                Page {pagination.currentPage} of {pagination.totalPages}
            </div>
            <div className={style.paginationNextPageBtn} onClick={() => handleNextPage(pagination.currentPage)}></div>
        </div>
    );
};

export default Pagination;