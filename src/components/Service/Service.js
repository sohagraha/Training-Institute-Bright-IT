import React from 'react';

const Service = (props) => {
    const { name } = props.service;
    return (
        <div>
            <h2>=={name}</h2>
        </div>
    );
};

export default Service;