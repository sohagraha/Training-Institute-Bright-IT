import React, { useEffect, useState } from 'react';
import MainService from '../MainService/MainService';

const MainSevices = () => {

    const [Feature, setFeature] = useState([]);

    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setFeature(data.filter(service => service.target === 'Feature')));
    }, []);

    return (
        <div>
            <h1>Our Services</h1>
            <div className="grid-card">
                {
                    Feature.map(mainservice => <MainService mainservice={mainservice}></MainService>)
                }
            </div>
        </div>
    );
};

export default MainSevices;