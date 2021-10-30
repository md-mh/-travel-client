import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';

const ManageTour = () => {

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/order')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleDelete = id => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: "DELETE"
        })
        alert('Delete');
        const remaining = orders.filter(data => data._id !== id);
        setOrders(remaining);

    }
    return (
        <Container>
            <Row className="justify-content-center my-5">
                <Col md={8}>
                    <Table>
                        <thead>
                            <tr>
                                <th>Place</th>
                                <th>Email</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        {
                            orders.map(order => <tbody key={order._id} order={order}>
                                <tr>
                                    <td>{order.place}</td>
                                    <td>{order.email}</td>
                                    <td><button onClick={() => handleDelete(order._id)}>Delete</button></td>
                                </tr>
                            </tbody>)
                        }
                    </Table>

                </Col>
            </Row>
        </Container>
    );
};

export default ManageTour;