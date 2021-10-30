import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Serviceitem from './Serviceitem/Serviceitem'

// Home page services component  

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/show/')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <Container className="my-3">
            <h1 className="text-center py-3">Choose your <span className="text-primary">Tour Destination</span></h1>
            {/* Bootstrap responsive row */}
            <Row xs={1} md={2} lg={3} className="g-4 py-4">
                {
                    // mappimg data from services 
                    services.map(service => <Serviceitem key={service._id} service={service}></Serviceitem>)
                }
            </Row>
        </Container>
    );
};

export default Services;