
import { Card, Row, Col } from 'react-bootstrap';
import {Button, Form} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Vertaile, SendLocation } from '../components/ApiHaku';

export default function Vertailu() {
    const [search1, setSearch1] = useState("");
    const [search2, setSearch2] = useState("");
  
    const [error, setError] = useState(false);
    async function searchPressed1() {
      // const response = await Vertaile(search1, search2);
      const response = await Vertaile(search1);
      console.log(response);
          if(response.error=="error"){
            setError(true);
          }
          else{
            setError(false);
            setData1(response);
          }
          setSearch1("");
    }
    async function searchPressed2() {
      // const response = await Vertaile(search1, search2);
      const response = await Vertaile(search2);
      console.log(response);
          if(response.error=="error"){
            setError(true);
          }
          else{
            setError(false);
            setData2(response);
          }
          setSearch2("");
          
    }
   
    const [data1, setData1] = useState({});
    const [data2, setData2] = useState({});
    

  //kesken

  return (
    <div className="mt-4 px-3">
      <Row>
        <Col md={6}>
          <Card style={{ backgroundColor: '#212529', border: '2px solid black', padding: '40px', }}>
            <Card.Body style={{ position: 'relative', display: 'flex', flexDirection: 'column'}}>
              <Form className="d-flex" style={{ marginBottom: '20px' }}>
                <Form.Control
                  type="search"
                  placeholder="Hae kaupunkia"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => setSearch1(e.target.value)}
                />
                <Button onClick={searchPressed1} variant='outline-info'>Hae</Button>
              </Form>
              <Card.Title style={{ fontSize: '40px', color: '#f8f9fa', marginTop: '20px', marginBottom: '20px', marginLeft: 'auto', marginRight: 'auto' }}>{data1.city}</Card.Title>
              <Card.Img src={data1.image} style={{ maxWidth: '20%', maxHeight: '200px', marginLeft: 'auto', marginRight: 'auto', display: 'block' }}/>
              <Card.Title style={{fontSize:"40px", color:"#f8f9fa", marginLeft: 'auto', marginRight: 'auto', marginTop: '20px'}}>{data1.temperature} °C</Card.Title>
              <Card.Text style={{fontSize:"30px", color:"#f8f9fa", marginLeft: 'auto', marginRight: 'auto'}}>{data1.saatyyppi}</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
        <Card style={{ backgroundColor: '#212529', border: '2px solid black', padding: '40px', }}>
            <Card.Body style={{ position: 'relative', display: 'flex', flexDirection: 'column'}}>
              <Form className="d-flex" style={{ marginBottom: '20px' }}>
                <Form.Control
                  type="search"
                  placeholder="Hae kaupunkia"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => setSearch2(e.target.value)}
                />
            <Button onClick={()=>searchPressed2()} variant='outline-info'>Hae</Button>
            </Form>
              <Card.Title style={{ fontSize: '40px', color: '#f8f9fa', marginTop: '20px', marginBottom: '20px', marginLeft: 'auto', marginRight: 'auto' }}>{data2.city}</Card.Title>
              <Card.Img src={data2.image} style={{ maxWidth: '20%', maxHeight: '200px', marginLeft: 'auto', marginRight: 'auto', display: 'block' }}/>
              <Card.Title style={{fontSize:"40px", color:"#f8f9fa", marginLeft: 'auto', marginRight: 'auto', marginTop: '20px'}}>{data2.temperature}°C</Card.Title>
              <Card.Text style={{fontSize:"30px", color:"#f8f9fa", marginLeft: 'auto', marginRight: 'auto'}}>{data2.saatyyppi}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}