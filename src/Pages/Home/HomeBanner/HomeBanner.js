import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import img from '../../../img/coastal-family-health-travel-clinic.jpg';
import bg from '../../../img/bghome.jpg';

const backgroundimg = {
  background : `url(${bg})`,
  width : '100vw',
  height : '100vh',
  backgroundRepeat : 'no-repeat',
  backgroundSize: 'cover',

}
const HomeBanner = () => {
    return (
      <div style={backgroundimg}>
        <Container>
         <Row>
           <Col>
           <p className='text-light fw-bold fst-italic  textp'>BEST DESTINATIONS AROUND THE WORLD</p>
           <h1 className='text-light mb-4 fw-bold fst-italic'>Travel, enjoy <br/> andlive a new <br/>and full life</h1>
           <p className='text-light mb-4 fw-bold fst-italic'>Built wickt longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening.<br/> Park gate sell they west hard for the.</p>
           <Button className=' mb-3 bg-danger border-danger fw-bold fst-italic'>Find out more</Button>
           </Col>
         </Row>
       </Container>
      </div>
    );
};

export default HomeBanner;