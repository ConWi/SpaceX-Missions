import React, {useState} from 'react';
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import './Reset.css'
import FilterContainer from "./components/FilterContainer/FilterContainer";
import MissionList from "./components/MissionList/MissionList";
import {useFetch} from "./hooks/useFetch";
import {IFilterContext, ILaunch} from "./types/types";
import {useEffect} from 'react';
import getFiltersData, {defaultFilterContext} from "./helpers/filter";
import {MissionPageProvider} from "./contexts/missionPageContext";


function App() {
    const [, setFilters] = useState<IFilterContext[] | null>(null)
    const [loading, missionList, errorMessage, request] = useFetch<ILaunch[]>(
        'https://api.spacexdata.com/v3/launches',
        {method: 'GET'},
        [],
        false
    );


    useEffect(() => {
        request();
    }, [])

    if (loading) return <p>Loading...</p>

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
                missionList: missionList, filters: defaultFilterContext, setFilters: setFilters
            }}>
                <FilterContainer filters={filtersData.filters}/>
                <MissionList/>
            </MissionPageProvider>
        </Container>
    </div>
  );
}

export default App;
