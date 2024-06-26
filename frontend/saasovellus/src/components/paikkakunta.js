import React from 'react';
import {Card} from 'react-bootstrap';

//Haettu paikkakunta card
const Paikka = ({data}) => {

  const aika = {
    minutes: new Date().getMinutes(),
    tunnit: new Date().getHours()
  }
  return (
  <div className="mt-4 px-4">
        <Card style={{ backgroundColor: '#212529', border: '2px solid black', padding: "20px" }}>
          <Card.Body>
            <Card.Title style={{fontSize:"60px", color:"#f8f9fa"}}>{data}</Card.Title>
            <Card.Text style={{fontSize:"25px", color:"#f8f9fa", marginTop: '20px'}}>Kello: {aika.tunnit}:{aika.minutes} </Card.Text>
          </Card.Body>
        </Card>
  </div>
  );
};

export default Paikka;