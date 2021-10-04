import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import MainService from '../MainService/MainService';
import './MainServices.css'

const MainSevices = () => {

    const [Feature, setFeature] = useState([]);

    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setFeature(data.filter(service => service.target === 'Feature')));
    }, []);

    return (
        <div className='pb-5'>
            <h1 className="pt-3 fw-bold">Our Services</h1>
            <Row xs={1} md={4} className="g-4 m-2">
                {
                    Feature.map(mainservice => <MainService mainservice={mainservice} key={mainservice.id}></MainService>)
                }
            </Row>
        </div>
    );
};

export default MainSevices;