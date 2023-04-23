import React, {useState} from 'react';
import Header from "../components/Header/Header";
import Container from "../components/Container/Container";
import '../Reset.css'
import FilterContainer from "../components/FilterContainer/FilterContainer";
import MissionList from "../components/MissionList/MissionList";
import {useFetch} from "../hooks/useFetch";
import {IFilterContext, ILaunch} from "../types/types";
import {useEffect} from 'react';
import getFiltersData, {defaultFilterContext} from "../helpers/filter";
import {MissionPageProvider} from "../contexts/missionPageContext";
import Spinner from "../components/Spinner/Spinner";
import Pagination from "../components/Pagination/Pagination";
import {useParams} from 'react-router-dom'
import {isDigit} from "../helpers/paramHandler";
import NotFound from "../components/NotFound/NotFound";

function Homepage() {
    const {pageNumber = '1'} = useParams();
    const pageItemsLimit = 10;
    const [, setFilters] = useState<IFilterContext[] | null>(null)
    const [currentPage, setCurrentPage] = useState<number>(+pageNumber);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [loading, missionList, errorMessage, request] = useFetch<ILaunch[]>(
        'https://api.spacexdata.com/v3/launches',
        {method: 'GET'},
        [],
        false
    );

    useEffect(() => {
        request();
    }, [])

    if (!isDigit(pageNumber) || +pageNumber <= 0) return <NotFound/>

    if (loading) return <Spinner/>

    if (errorMessage !== '') {
        return <p>ERROR: {errorMessage}</p>
    }

    if (!missionList) return <p>Data was null</p>

    const filtersData = getFiltersData(missionList);

    return (
        <div className="App">
            <Container>
                <Header/>
                <MissionPageProvider value={{
                    missionList: missionList, filters: defaultFilterContext, setFilters: setFilters,
                    pagination: {
                        setCurrentPage: setCurrentPage, setTotalPages: setTotalPages,
                        totalPages: totalPages, currentPage: currentPage, pageItemsLimit: pageItemsLimit
                    }
                }}>
                    <FilterContainer filters={filtersData.filters}/>
                    <Pagination />
                    <MissionList/>
                </MissionPageProvider>
            </Container>
        </div>
    );
}

export default Homepage;
