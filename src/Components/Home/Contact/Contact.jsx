import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <Container>
            <Row className="align-items-center my-5 py-3">
                <Col md={6}>
                    <h1><span className="text-primary">Contact</span> US</h1> <br />
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Textarea</Form.Label>
                            <Form.Control as="textarea" placeholder="Write your Description" rows={3} />
                        </Form.Group>
                        <Button variant="info" >Submit</Button>
                    </Form>
                </Col>
                <Col md={6}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116914.91309567618!2d90.41383541446795!3d23.69057895116781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b92ecbf92fed%3A0x33626803e69e2d19!2sTour%20%26%20Travel!5e0!3m2!1sen!2sbd!4v1635583191003!5m2!1sen!2sbd" width="100%" height="350" allowfullscreen="" loading="lazy" title="map"></iframe>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;