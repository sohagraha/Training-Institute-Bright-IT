import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [Services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className='m-0'>
            <h1>Our Services</h1>
            <Row xs={1} md={3} className="g-4 m-2 w-75 mx-auto">
                {
                    Services.map(service => <Service service={service}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;