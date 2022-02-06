import React from 'react';
import { Card, Col } from 'react-bootstrap';

const MyOrderCard = (props) => {
    const {name,price} = props.orderr;
    return (
        <Col>
         <Card>
           <Card.Body>
             <Card.Title>{name}</Card.Title>
             <Card.Title>{price}</Card.Title>
           </Card.Body>
         </Card>
       </Col>
    );
};

export default MyOrderCard;