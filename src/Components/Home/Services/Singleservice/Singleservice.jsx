import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from './../../../../Hooks/useAuth'

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

    const { user } = useAuth();
    console.log(user.email);

    const handleOrder = e => {

        const place = serviceDetails?.place;
        const email = user.email;

        const newOrder = { place, email };

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
        alert('Successfully added your Order.')

    }

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
                    <Button variant="info" onClick={() => handleOrder()}>Travel Now</Button>

                </Col>
            </Row>
        </Container>

    );
};

export default Singleservice;