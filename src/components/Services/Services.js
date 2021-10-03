import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [Services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div>
            <h1>Services are here</h1>
            <div>
                {
                    Services.map(service => <Service service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;