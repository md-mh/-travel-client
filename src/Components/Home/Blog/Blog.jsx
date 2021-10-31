import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

// Home page Blog Component 

const Blog = () => {
    return (
        <Container className="my-5 py-3">
            <h1>--Latest <span className="text-primary">Blog</span>--</h1> <br />
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/7knfRp1/Aalu-Tila-Guha.png" />
                        <Card.Body>
                            <Card.Title className="text-success">Aalu Tila Guha</Card.Title>
                            <Card.Text>
                                Aalu Tila Guha (Alutila Cave) is a natural cave located in Khagrachari district of Bangladesh. Alutila  Guha (cave) is located in the Alutila or Arbari hills at an altitude of 3,000 feet above sea level, 7 km west of the main town in Matiranga upazila of Khagrachari district . The locals call it Matai Hakar or the cave of the gods. This cave is very dark and cool. The small bamboo torch in your hand is the only source of light in the cave.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/3SBzLMs/Himchori.png" />
                        <Card.Body>
                            <Card.Title className="text-success">Himchori</Card.Title>
                            <Card.Text>
                                Himchhari is a tourist destination located in Cox’s Bazar district in the Chittagong division of Bangladesh. It is located 12 km from Cox’s Bazar.  Himchhari has wide beaches on one side and rows of green hills on the other. There is a waterfall in Himchori which is the main attraction of tourists. However, there is  water in the waterfall during the rainy season, there is no water in the other time or it is dry.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/tHZjhdp/Sea-Pearl-Water-Park.png" />
                        <Card.Body>
                            <Card.Title className="text-success">Sea Pearl Water Park</Card.Title>
                            <Card.Text>
                                Sea Pearl Water Park adjacent to Inani’s Royal Tulip Resort is Bangladesh’s first water park in the tourist city of Cox’s Bazar. This huge park on 9 acres of land has various names and various types of rides. There are rides called Wind Storm, Multi Land, Kami Qazi or Body Slide, Aqua Loop, Float Slide, Thunder Bowl. Kids’s special favorites are Fun Pool and Rain Dance.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/6RTxtnS/Horticulture-Park.png" />
                        <Card.Body>
                            <Card.Title className="text-success">Horticulture Park</Card.Title>
                            <Card.Text>
                                Khagrachari Hill District Horticulture Park, a huge land of natural beauty, various varieties, mountains, springs and a combination of greenery. Here Wonderful combination of mountains, rivers and lakes where nature speaks in the language of poetry. At the bank of the river, the wind makes a melody in its own way, and sings a beautiful song of nature.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Blog;