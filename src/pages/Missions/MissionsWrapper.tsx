import React from 'react';
import '../../Reset.css'
import {Navigate} from 'react-router-dom'
import {isValidPageNumber} from '../../helpers/routing/pathParams';
import {usePageNumber} from '../../hooks/routing/usePageNumber';
import {DefaultPaths} from '../../types/routing/routing';
import {RenderProps} from '../../types/wrapper/render';

type Props = {
    children: RenderProps<{
        pageNumber: number
    }>
}

function MissionsWrapper({children}: Props) {
    const pageNumber = usePageNumber()

    if (!isValidPageNumber(pageNumber)) return <Navigate to={DefaultPaths.MissionsStarterPage}/>

    return <>{children({pageNumber})}</>
}

export default MissionsWrapper;
