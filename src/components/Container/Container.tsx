import React from 'react';
import style from './Container.module.css'

export type ContainerProps = {
    children?: React.ReactNode
}

const Container = ({children}: ContainerProps) => (
    <div className={style.mainContainer}>
        {children}
    </div>
);

export default Container;