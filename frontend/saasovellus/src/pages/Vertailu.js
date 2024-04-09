
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
      const response = await SendLocation(search1);
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
      const response = await SendLocation(search2);
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
   
    const [data1, setData1] = useState({
      hours: [],
      current: {},
      daily: [],
      city: ""
  });
    const [data2, setData2] = useState({
      hours: [],
      current: {},
      daily: [],
      city: ""
  });

   


  return (
    <div className="mt-4 px-3">
      <Row>
        <Col md={6}>
          <Card style={{ backgroundColor: '#332D2D', border: '2px solid black', padding: '50px' }}>
            <Card.Body style={{ position: 'relative' }}>
              <Card.Title style={{ fontSize: '30px', color: '#f8f9fa' }}>{data1.city}</Card.Title>
              <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Paikkakunta haku"
              className="me-2"
              aria-label="Search"

              //kesken
              onChange={(e) => setSearch1(e.target.value)}
            />
            <Button onClick={()=>searchPressed1()} variant='outline-info'>Hae</Button>
          </Form>
          
              <div style={{ marginLeft: '25%', marginRight: '20%' }}>
                <Card.Title style={{ fontSize: '40px', color: '#f8f9fa' }}> </Card.Title>
                <Card.Text style={{ fontSize: '30px', color: '#f8f9fa' }}></Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card style={{ backgroundColor: '#332D2D', border: '2px solid black', padding: '50px' }}>
            <Card.Body style={{ position: 'relative' }}>
              <Card.Title style={{ fontSize: '30px', color: '#f8f9fa' }}>{data2.city}</Card.Title>
              <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Paikkakunta haku"
              className="me-2"
              aria-label="Search"

              //kesken
              onChange={(e) => setSearch2(e.target.value)}
            />
            <Button onClick={()=>searchPressed2()} variant='outline-info'>Hae</Button>
          </Form>
              <div style={{ marginLeft: '25%', marginRight: '20%' }}>
                <Card.Title style={{ fontSize: '40px', color: '#f8f9fa' }}></Card.Title>
                <Card.Text style={{ fontSize: '30px', color: '#f8f9fa' }}></Card.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}