import React from 'react';
import {Card} from 'react-bootstrap';

//Sää atm card
const SaaNyt = ({data}) => {
  return (
  <div className="mt-4 px-3" >
        <Card style={{ backgroundColor: '#f8f9fa' }}>
          <Card.Body>
          <Card.Title style={{fontSize:"30px"}}>Sää tällä hetkellä</Card.Title>
            <Card.Img variant="top" src="rain.svg" style={{ maxWidth: '20%', maxHeight: '200px'}}>
            
            </Card.Img>
            <Card.Title style={{fontSize:"40px"}}>{data.latitude}</Card.Title>
            <Card.Text style={{fontSize:"30px"}}>Sadetta</Card.Text>
          </Card.Body>
        </Card>
  </div>
  );
};

export default SaaNyt;