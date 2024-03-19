import React from 'react';
import {Card} from 'react-bootstrap';
import {useState, useEffect} from 'react'

//Sää atm card
const SaaNyt = ({data}) => {

  const [saaTyyppi, setSaaTyyppi] = useState("");
  
  const [gif, setGif] = useState("")

  useEffect(() => {
    switch (data.weather_code) {
      case 0: 
        setGif("Gifit/clear-day.svg")
        setSaaTyyppi("Aurinkoista");
        break;

      case 1: case 2:
        setGif("Gifit/partly-cloudy-day.svg")
        setSaaTyyppi("Hieman pilvistä");
        break;

      case 3: case 45: case 48:
        setGif("Gifit/cloudy.svg")
        setSaaTyyppi("Pilvistä");
        break;

      case 61: case 63: case 65:
        setGif("Gifit/rain.svg");
        setSaaTyyppi("Sadetta");
        break;

      case 71: case 73: case 75: case 77:
        setGif("Gifit/snow.svg");
        setSaaTyyppi("Lumisadetta");

      case 95: case 96: case 99:
        setGif("Gifit/thunderstorms.svg");
        setSaaTyyppi("Myrsky/Ukkonen");
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
            <Card.Img variant="top" src={gif} style={{ maxWidth: '20%', maxHeight: '200px'}}>
            
            </Card.Img>
            <Card.Title style={{fontSize:"40px"}}>{data.temperature_2m} C</Card.Title>
            <Card.Text style={{fontSize:"30px"}}>{saaTyyppi}</Card.Text>
          </Card.Body>
        </Card>
  </div>
  );
};

export default SaaNyt;