import React from 'react';
import './Container.css'

interface ContainerProps {
    children?: React.ReactElement | React.ReactElement[]
}

const Container = ({children}: ContainerProps) => {
    return (
        <div className={'main-container'}>
            {children}
        </div>
    );
};

export default Container;