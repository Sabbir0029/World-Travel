import React,{useState,useEffect} from 'react';
import { Row } from 'react-bootstrap';
import HomeServicesCard from './HomeServicesCard';

const HomeService = () => {
      const [Places, setPlaces] = useState([])

      useEffect(()=>{
        fetch('https://polar-sea-01995.herokuapp.com/allPlaces')
        .then(res => res.json())
        .then(data => setPlaces(data))
      },[])
    return (
    <div className='container mt-5'>
        <h1 className='text-danger fw-bold fst-italic'>Adventure place for ever!</h1>
        <p className='text-danger fw-bold fst-italic mt-4 mb-5'> Every man's life ends the same way. It is only the details of how he lived and how he c <br/> that distinguish one man from another.</p>

        <div>
          <Row xs={1} md={3} className="g-2">
            {
              Places.map(place => <HomeServicesCard
                key={place._id}
                place={place}
              ></HomeServicesCard>)
            }
          </Row>

        </div>
    </div>
    );
};

export default HomeService;