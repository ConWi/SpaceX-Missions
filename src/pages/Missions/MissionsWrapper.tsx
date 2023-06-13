import React from 'react';
import '../../Reset.css'
import {Navigate} from 'react-router-dom'
import {isValidPageNumber} from '../../helpers/routing/pathParams';
import Missions from '../../components/Missions/Missions';
import {usePageNumber} from '../../hooks/routing/usePageNumber';
import {DefaultPaths} from '../../types/routing/routing';

function MissionsWrapper() {
    const pageNumber = usePageNumber()

    if (!isValidPageNumber(pageNumber)) return <Navigate to={DefaultPaths.MissionsStarterPage}/>

    return <Missions currentPage={pageNumber}/>
}

export default MissionsWrapper;
