import React from 'react';
import img11 from '../../../img/download.png'
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeServicesCard = (props) => {
    const {name,img,price,rating,_id} = props.place
    return (
        <div>
            <Col className='border border-danger border-3 cardd'>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className='text-danger fw-bold fst-italic'>Name : {name}</Card.Title>
          <Card.Text className='fw-bold fst-italic'>Price : <span className='fw-bold fst-italic'>$</span>{price}</Card.Text>
          <Card.Text className='fw-bold fst-italic'>Rating : <img className='photo' src={img11} alt=""/>  {rating}</Card.Text>
          <Link to={`booking/${_id}`}><Button className=' mb-3 bg-danger border-danger fw-bold fst-italic'>Booking</Button></Link>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default HomeServicesCard;