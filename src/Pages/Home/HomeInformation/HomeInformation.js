import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import imggg from '../../../img/ice.jpg'
import imggg1 from '../../../img/mountain.jpg'

const HomeInformation = () => {
    return (
        <div className='mt-5'>
            <h1 className='text-danger fw-bold fst-italic mb-4'>Travellers opinion</h1>
            <p className='text-danger fw-bold fst-italic mb-5'>A good story has a beginning, middle, and end. The beginning is where you make a promise to viewers <br/> that this story will tead somewhere worthy of their time.</p>

            <div  className='AllPlaces'>
            <Container>
             <Row>
               <Col sm={6}>
                   <img className='w-75' src={imggg} alt=""/>
               </Col>
               <Col sm={6}>
                   <h1 className='text-danger fw-bold fst-italic mb-4 mt-4'>"Let's start the journey"</h1>
                   <p>Built wickt longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening.A good story has a beginning, middle, and end. The beginning is where you make a promise to viewersthat this story will tead somewhere worthy of their time.Park gate sell they west hard for the.</p>
                   <Link to='/allPlaces'><Button className=' mb-3 mt-4 bg-danger border-danger fw-bold fst-italic'>Booking</Button></Link>
               </Col>
             </Row>
             <Row>
               <Col sm={6}>
                   <h1 className='text-danger fw-bold fst-italic mb-4 mt-5'>Adventure is always ahead!</h1>
                   <p>A good story has a beginning, middle, and end. The beginning is where you make a promise to viewers that this story will tead somewhere worthy of their time.Built wickt longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening</p>
                   <Link to='/allPlaces'><Button className=' mb-3 mt-4 bg-danger border-danger fw-bold fst-italic'>Booking</Button></Link>
               </Col>
               <Col sm={6}>
               <img className='w-75 mt-5' src={imggg1} alt=""/>
               </Col>
             </Row>
           </Container>
            </div>
            
        </div>
    );
};

export default HomeInformation;