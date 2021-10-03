import React from 'react';

const MainService = (props) => {
    const { name } = props.mainservice;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default MainService;