import React from 'react';
import style from './Container.module.css'

interface ContainerProps {
    children?: React.ReactElement | React.ReactElement[]
}

const Container = ({children}: ContainerProps) => {
    console.log(style.mainContainer)
    return (
        <div className={style.mainContainer}>
            {children}
        </div>
    );
};

export default Container;