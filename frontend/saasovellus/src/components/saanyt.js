import React from 'react';
import {Card} from 'react-bootstrap';
import {useState, useEffect} from 'react'

//Sää atm card
const SaaNyt = ({data}) => {

  const [saaTyyppi, setSaaTyyppi] = useState("");

  useEffect(() => {
    switch (data.weather_code) {
      case 0: 
        setSaaTyyppi("Aurinkoista");
        break;
      case 1:
        setSaaTyyppi("Hieman pilvistä");
        break;
      case 61:
        setSaaTyyppi("Sadetta");
        break;
      default:
        break;
    }
  }, [data.weather_code]);

  return (
  <div className="mt-4 px-3" >
        <Card style={{ backgroundColor: '#f8f9fa' }}>
          <Card.Body>
          <Card.Title style={{fontSize:"30px"}}>Sää tällä hetkellä</Card.Title>
            <Card.Img variant="top" src="rain.svg" style={{ maxWidth: '20%', maxHeight: '200px'}}>
            
            </Card.Img>
            <Card.Title style={{fontSize:"40px"}}>{data.temperature_2m} C</Card.Title>
            <Card.Text style={{fontSize:"30px"}}>{saaTyyppi}</Card.Text>
          </Card.Body>
        </Card>
  </div>
  );
};

export default SaaNyt;