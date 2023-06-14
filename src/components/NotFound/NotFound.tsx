import React from 'react';
import './NotFound.css'
import {Link} from 'react-router-dom'
import {DefaultPaths} from '../../types/routing/routing';

const NotFound = () => {
    return (
        <div className={'not-found__container'}>
            <h1 className={'not-found__header'}>Oops</h1>
            <div className={'not-found__description'}>
                The Page you're looking for isn't here.&nbsp;
                <Link
                    to={DefaultPaths.MissionsStarterPage}
                    className={'not-found__home-link'}
                >Return home?</Link>
            </div>
        </div>
    );
};

export default NotFound;