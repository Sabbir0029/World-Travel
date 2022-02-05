import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const [place, setPlace] = useState({})
    const {id} = useParams()

    useEffect(()=>{
        const url = `http://localhost:5000/allPlaces/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPlace(data))
    },[])
    return (
        <div className='AllPlaces'>
            <Container>
              <Row>
                <Col sm={6}>
                <img className='w-75' src={place.img} alt=""/>
                </Col>
                <Col sm={6}>
                <form >
                <input 
                className='w-50 mt-4 text-danger '
                placeholder={place.name}
                disabled
                name='email'
                type='email'
                ></input> <br/>
                <input 
                className='w-50 m-3 text-danger'
                placeholder={place.price}
                disabled
                name='password'
                type='password'
                ></input><br/>
                <input 
                className='w-50 mb-3 text-danger'
                placeholder=''
                name='password'
                type='password'
                ></input><br/>
                <input 
                className='w-50 mb-3 text-danger'
                placeholder=''
                name='password'
                type='password'
                ></input><br/>
                <Button type='submit' className='w-50 mb-3 bg-danger border-danger fw-bold fst-italic'>Send</Button>
            </form>
                </Col>
              </Row>
            </Container>
         </div>
    );
};

export default Booking;