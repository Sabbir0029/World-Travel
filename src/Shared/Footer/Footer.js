import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='contact mt-5'>
            <Container>
              <Row>
                <Col className='p-5'>
                <h3 className='text-light mb-3 fw-bold fst-italic'>World.Travel</h3>
                <ul className='text-light fst-italic  text-decoration-none'>
                  <p className='text-light fst-italic'>A good story has a beginning, middle, and end. The beginning is where you make a promise to viewers that this story will tead somewhere worthy of their time.</p>
                  <p>Phone : +8801773147066</p>
                  <p>Email : mdsabbirhossain0029@gmail.com</p>
                </ul>
                </Col>
                <Col className='p-5'>
                    <h3 className='text-light mb-4 fw-bold fst-italic'>QUICK LINKS</h3>
                    <ul>
                        <Link to='/home' className='text-light fw-bold fst-italic fs-5 text-decoration-none mb-5'>Home</Link><br></br>
                        <Link to='/allPlaces' className='text-light fw-bold fst-italic fs-5 text-decoration-none mb-5'>All Places</Link><br></br>
                        <Link to='/contactUs' className='text-light fw-bold fst-italic fs-5 text-decoration-none mb-5'>Contact Us</Link>
                    </ul>
                </Col>
                <Col className='p-5'>
                <h3 className='text-light mb-5 fw-bold fst-italic'>Contact Us</h3>
                <input 
                className='w-75 mb-3 text-danger '
                placeholder="Your Email"
                name='email'
                type='email'
                ></input><br></br>
                <textarea className='w-75 fw-bold fst-italic text-danger'></textarea><br></br>
                <Button type='submit' className='w-75 mb-5 bg-light border-danger text-danger fw-bold fst-italic'>Send</Button>
                </Col>
              </Row>
            </Container>
    </div>
    );
};

export default Footer;