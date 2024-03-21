import React from 'react';
import {Card} from 'react-bootstrap';
import {useState, useEffect} from 'react'

//Sää atm card
const SaaNyt = ({data}) => {
  
  console.log(data);
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
  
  }, [data]);

  return (
    
  <div className="mt-4 px-3">
    <Card style={{ backgroundColor: '#f8f9fa', border: '2px solid black', padding: "20px"}}>
      <Card.Body style={{ position: 'relative' }}>
        <Card.Title style={{fontSize:"30px"}}>Sää tällä hetkellä</Card.Title>

          <Card.Img src={gif} style={{ maxWidth: '20%', maxHeight: '200px', marginLeft: 'auto', marginRight: 'auto', display: 'block'}} />

          {/* kosteus */}
          <Card.Img src="gifit/humidity.svg" style={{ maxWidth: '20%', maxHeight: '120px', position: 'absolute', left: 10, top: '30%', transform: 'translateY(-50%)' }} />
          <span style={{ maxWidth: '40%', maxHeight: '120px', position: 'absolute', left: 5, top: '30%', transform: 'translateY(-50%)', fontSize: '20px', fontWeight: 'bold' }}>40%</span>

          {/* tuulennopeus */}
          <Card.Img src="static/wind-1.svg" style={{ maxWidth: '20%', maxHeight: '100px', position: 'absolute', left: 33, top: '68%', transform: 'translateY(-50%)' }} />
          <span style={{ maxWidth: '20%', maxHeight: '100px', position: 'absolute', left: 5, top: '68%', transform: 'translateY(-50%)', fontSize: '20px', fontWeight: 'bold' }}>10m/s</span>


          {/* Nää on ehkä useless, voi laittaa viikkoennuste laatikon sisää <Card.Img src="gifit/thermometer-warmer.svg" style={{ maxWidth: '20%', maxHeight: '120px', position: 'absolute', right: 15, top: '30%', transform: 'translateY(-50%)' }} />

          <Card.Img src="gifit/thermometer-colder.svg" style={{ maxWidth: '20%', maxHeight: '120px', position: 'absolute', right: 10, top: '68%', transform: 'translateY(-50%)' }} /> */}

          <div style={{ marginLeft: '25%', marginRight: '20%' }}>
          <Card.Title style={{fontSize:"40px"}}>{data.temperature_2m} °C</Card.Title>
          <Card.Text style={{fontSize:"30px"}}>{saaTyyppi}</Card.Text>
          </div>
          
      </Card.Body>
    </Card>

  </div>

  );
  
  

    
};

export default SaaNyt;