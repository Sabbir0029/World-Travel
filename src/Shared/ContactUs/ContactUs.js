import React from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import '../ContactUs/ContactUs.css'


const ContactUs = () => {

    return (
        <div className='mt-5 mb-5'>
            <h1  className='text-danger mb-4 fw-bold fst-italic pt-5'>Get in Touch</h1>
            <div className='mt-5 mb-5'>
            <Container>
                <Row>
                  <Col className='pt-5 pb-5'>
                  <h1 className='text-danger fw-bold fst-italic'>Write us</h1>
            <form >
                <input 
                className='w-75 mt-4 text-danger '
                placeholder="Your Email"
                name='email'
                type='email'
                ></input> <br></br>
                <input 
                className='w-75 m-3 text-danger'
                placeholder="Your Password"
                name='password'
                type='password'
                ></input><br></br>
                <textarea className='w-75 fw-bold fst-italic text-danger'></textarea>
                <Button type='submit' className='w-75 mb-3  mt-4 bg-danger border-danger fw-bold fst-italic'>Send</Button>
            </form>
                  </Col>
                  <Col className='contact pt-5 pb-5'>
                  <h1 className='text-light fw-bold fst-italic pt-3'>Contact Us</h1>

                  <ul className='text-light fw-bold fst-italic pt-3 fs-5'>
                      <li>Address : Pabna,Rajshahi,Bangladesh</li>
                      <li>Phone : +8801773147066</li>
                      <li>Email : mdsabbirhossain0029@gmail.com</li>
                      <li>Web Site :</li>
                  </ul>
                  </Col>
                </Row>
            </Container>
            </div>
        </div>
    );
};

export default ContactUs;