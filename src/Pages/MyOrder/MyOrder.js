import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const MyOrder = () => {
    const {user} = useAuth();
    const [orders,setOrders] = useState([])

  useEffect(()=>{
    const url = `http://localhost:5000/booking?email=${user.email}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
      const myOrder = data.filter(order => order.email === user.email)
      setOrders(myOrder)
    })
  },[])


  const cancelBtn = id => {
    const confirm = window.confirm('Are you sure wanna remove this item?')
    if (confirm) {
      fetch(`http://localhost:5000/booking/${id}`,{
        method:'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        if (data.deletedCount > 0) {
            alert('Deleted Seccessfully')
            const newAllUser = orders.filter(a => a._id !== id)
            setOrders(newAllUser)
            
        }
    })
    }
}
    return (
        <div className='AllPlaces'>
            {
        (orders.length !==0) ? <Container className="my-5">
        <Row xs={1} md={4} sm={1} className="g-2">
          {
            orders.map(orderr => <Col key={orderr._id}>
              <Card>
                <Card.Body>
                  <Card.Title className="fw-bold">{orderr?.name}</Card.Title>
                  <Card.Text>
                    <h6>{orderr?.email}</h6>
                    <div>
                    <p>{orderr?.Price}</p>
                    </div>
                    <p>{orderr?.date}</p>
                  </Card.Text>
                </Card.Body>
                <button onClick={()=>cancelBtn(orderr._id)} className="btn bg-danger text-light border-0 fw-bold fst-italic">
                  Cancel
                </button>
              </Card>
            </Col>)
          }
        </Row>
      </Container> : <h1>Please wait ...</h1>
      }
        </div>
    );
};

export default MyOrder;