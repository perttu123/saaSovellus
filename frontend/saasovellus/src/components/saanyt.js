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
  <div className="mt-4 px-3">
    <Card style={{ backgroundColor: '#f8f9fa' }}>
      <Card.Body style={{ position: 'relative' }}>
        <Card.Title style={{fontSize:"30px"}}>Sää tällä hetkellä</Card.Title>

          <Card.Img src="gifit/rain.svg" style={{ maxWidth: '20%', maxHeight: '200px', marginLeft: 'auto', marginRight: 'auto', display: 'block' }} />

          {/* kosteus */}
          <Card.Img src="gifit/humidity.svg" style={{ maxWidth: '20%', maxHeight: '120px', position: 'absolute', left: 10, top: '30%', transform: 'translateY(-50%)' }} />
          <span style={{ maxWidth: '40%', maxHeight: '120px', position: 'absolute', left: 40, top: '30%', transform: 'translateY(-50%)', fontSize: '20px', fontWeight: 'bold' }}>40%</span>

          {/* tuulennopeus */}
          <Card.Img src="static/wind-1.svg" style={{ maxWidth: '20%', maxHeight: '100px', position: 'absolute', left: 33, top: '68%', transform: 'translateY(-50%)' }} />
          <span style={{ maxWidth: '20%', maxHeight: '100px', position: 'absolute', left: 28, top: '68%', transform: 'translateY(-50%)', fontSize: '20px', fontWeight: 'bold' }}>10m/s</span>


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