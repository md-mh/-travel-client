import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';

// Single service page details component 

const Singleservice = () => {
    const { id } = useParams();
    const [serviceDetails, setServiceDetails] = useState([]);
    useEffect(
        () => {
            fetch(`http://localhost:5000/show/${id}`)
                .then(res => res.json())
                .then(data => setServiceDetails(data))
        }, []);

    return (
        <Container>
            <Row className="my-5">
                <Col md={6}>
                    <img src={serviceDetails?.img} alt="service" height="400px" />
                </Col>
                <Col md={6}>
                    <h2 className="text-info"> {serviceDetails?.place}</h2>
                    <h3 className=""><span className="fw-bold">Location:</span> {serviceDetails?.location}</h3>
                    <div className="d-flex justify-content-between text-primary">
                        <p><span className="fw-bold">Days:</span> {serviceDetails?.days}</p>
                        <p><span className="fw-bold">Cost:</span> ${serviceDetails?.price}/Person</p>
                    </div>
                    <p>{serviceDetails?.details}</p>
                    <Button variant="info" className="mb-5">Travel Now</Button>
                </Col>
            </Row>
        </Container>

    );
};

export default Singleservice;