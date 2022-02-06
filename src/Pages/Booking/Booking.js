import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const [booking, setBooking] = useState({})
    const {id} = useParams()
    const [bookingInfo, setBookingInfo] = useState({});
    const {name,price} = booking;
    const [bookingSuccessfully, setBookingSuccessfully] = useState(false);

    useEffect(()=>{
        const url = `https://polar-sea-01995.herokuapp.com/allPlaces/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setBooking(data))
    },[])
    const handelOnBlur = e =>{
      const field = e.target.name;
      const value = e.target.value;
      const newData = {...bookingInfo}
      newData[field] = value;
      console.log(newData);
      setBookingInfo(newData)
  }
  const handelSubmitBtn = e =>{
    const bookingPlaces ={
      ...bookingInfo,
      name,
      price
    }
    fetch('https://polar-sea-01995.herokuapp.com/booking',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(bookingPlaces)
    })
    .then(res => res.json())
    .then(data =>{
      if(data.insertedId){
        setBookingSuccessfully(true)
      }
    })
    e.preventDefault();

}
    return (
        <div className='AllPlaces'>
          {bookingSuccessfully && [
                'success',
              ].map((variant, idx) => (
                <Alert key={idx} variant={variant}>
                  Logged {variant} in Correctly!
                </Alert>
              ))}
            <Container>
              <Row>
                <Col sm={6}>
                <img className='w-75' src={booking.img} alt=""/>
                </Col>
                <Col sm={6}>
                <form onSubmit={handelSubmitBtn}>
                <input 
                className='w-50 mt-4 text-danger '
                disabled
                defaultValue={name}
                name='name'
                type='text'
                ></input> <br/>
                <input 
                className='w-50 m-3 text-danger'
                disabled
                defaultValue={price}
                name='price'
                type='text'
                ></input><br/>
                <input 
                className='w-50 mb-3 text-danger'
                placeholder='Your Email Addess'
                required
                name='email'
                type='email'
                onBlur={handelOnBlur}
                ></input><br/>
                <input 
                className='w-50 mb-3 text-danger'
                placeholder='Your Phone Number'
                name='phone'
                type='text'
                required
                onBlur={handelOnBlur}
                ></input><br/>
                <input 
                className='w-50 mb-3 text-danger'
                placeholder='date'
                name='date'
                type='text'
                required
                onBlur={handelOnBlur}
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