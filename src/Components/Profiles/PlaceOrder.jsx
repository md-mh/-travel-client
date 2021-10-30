import React, { useEffect, useState, useRef } from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from './../../Hooks/useAuth'

const PlaceOrder = () => {

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
    // const { register, handleSubmit, reset } = useForm();
    // const onSubmit = data => {

    //     axios.post('http://localhost:5000/order', data)
    //     alert('Order Place Successfully');
    //     reset();
    // }
    const mobileRef = useRef();
    const membersRef = useRef();
    const addressRef = useRef();
    const handleOrder = e => {
        e.preventDefault();
        const place = serviceDetails?.place;
        const email = user.email;
        const mobile = mobileRef.current.value;
        const members = membersRef.current.value;
        const address = addressRef.current.value;

        const newOrder = { place, email, mobile, members, address };

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

        <>
            <Container>
                <Row className="justify-content-center my-5">
                    <h1 className="text-center mb-5">Place your Order</h1>
                    <Col md={6}>
                        <Form onSubmit={handleOrder}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type="number" placeholder="Write your Mobile number" ref={mobileRef} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Members</Form.Label>
                                <Form.Control type="number" placeholder="Numbers of Member" ref={membersRef} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Address</Form.Label>
                                <Form.Control as="textarea" placeholder="Write your address" style={{ height: '100px' }} ref={addressRef} />
                            </Form.Group>
                            <Button variant="info" type="submit" >Travel Now</Button>
                        </Form>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={5}>
                        <br /><br />
                        <p><span className="fw-bold">Name:</span> {user.displayName}</p>
                        <p><span className="fw-bold">Email:</span> {user.email}</p>
                        <p><span className="fw-bold">Place:</span> {serviceDetails?.place}</p>
                        <p><span className="fw-bold">Location:</span> {serviceDetails?.location}</p>
                        <p><span className="fw-bold">Days:</span> {serviceDetails?.days}</p>
                        <p><span className="fw-bold">Cost:</span> ${serviceDetails?.price}/Person</p>

                    </Col>

                </Row>
            </Container>
        </>
    );
};

export default PlaceOrder;