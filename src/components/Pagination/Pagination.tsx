import React from 'react';
import {useMissionPageContext} from "../../contexts/missionPageContext";
import './Pagination.css'



const Pagination = () => {
    const {pagination} = useMissionPageContext();

    const handlePrevPage = (prevPage: number): void => {
        if (prevPage === 1) return;

        pagination.setCurrentPage((prevPage: number): number => --prevPage);
    };

    const handleNextPage = (nextPage: number): void => {
        console.log(nextPage);
        if (nextPage === pagination.totalPages) return;

        pagination.setCurrentPage((nextPage: number): number => ++nextPage);
    };

    return (
        <div className={'pagination__container'}>
            <div className="pagination__previous-page-btn" onClick={() => handlePrevPage(pagination.currentPage)}></div>
            <div className="pagination__page-info">
                Page {pagination.currentPage} of {pagination.totalPages}
            </div>
            <div className="pagination__next-page-btn" onClick={() => handleNextPage(pagination.currentPage)}></div>
        </div>
    );
};

export default Pagination;