import React from 'react';
import style from './NotFound.module.css'
import {Link} from 'react-router-dom'
import {DefaultPaths} from '../../types/routing/routing';

const NotFound = () => (
    <div className={style.notFoundContainer}>
        <h1 className={style.notFoundHeader}>Oops</h1>
        <div className={style.notFoundDescription}>
            The Page you're looking for isn't here.&nbsp;
            <Link
                to={DefaultPaths.MissionsStarterPage}
                className={style.notFoundHomeLink}
            >Return home?</Link>
        </div>
    </div>
);

export default NotFound;