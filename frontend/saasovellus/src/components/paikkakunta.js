import React from 'react';
import {Card} from 'react-bootstrap';

//Haettu paikkakunta card
const Paikka = () => {
  return (
  <div className="mt-4 px-3">
        <Card style={{ backgroundColor: '#f8f9fa' }}>
          <Card.Body>
            <Card.Title style={{fontSize:"50px"}}>Mikkeli</Card.Title>
            <Card.Text style={{fontSize:"25px"}}>Kello: 14.48</Card.Text>
          </Card.Body>
        </Card>
  </div>
  );
};

export default Paikka;