import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MyOrder from '../MyOrder/MyOrder';

const Dashboard = () => {
    return (
        <div className='AllPlaces'>
            <h1 className='text-danger fw-bold fst-italic mb-4'>Dashboard</h1>
            <Container>
              <Row>
                <Col sm={4}>
                
                </Col>
                <Col sm={8}>
                <h1 className='text-danger fw-bold fst-italic'>Booking Order</h1>
                    <MyOrder></MyOrder>
                </Col>
              </Row>
            </Container>
        </div>
    );
};

export default Dashboard;