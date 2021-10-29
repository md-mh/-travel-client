import React from 'react';
import { Container, Row } from 'react-bootstrap';

// User Profile page 

const Profiles = () => {

    return (
        <Container>
            <h1 className="text-center py-3">Welcome <span className="text-primary">your Profile</span></h1>
            {/* Bootstrap responsive row */}
            <Row xs={1} md={2} lg={3} className="g-4 py-4">

            </Row>
        </Container>
    );
};

export default Profiles;