import React from 'react';
import style from './Spinner.module.css'

const Spinner = () => {
    return (
        <div className={style.loader + style.posCenter}></div>
    );
};

export default Spinner;