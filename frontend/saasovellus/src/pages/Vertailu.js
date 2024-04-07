
import { Card, Row, Col } from 'react-bootstrap';
import {Button, Form} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function Vertailu() {
    const [search, setSearch] = useState("");

    const navigate = useNavigate();
  
    async function searchPressed() {
      
      navigate(`/${search}`);
      setSearch("");
    }




  return (
    <div className="mt-4 px-3">
      <Row>
        <Col md={6}>
          <Card style={{ backgroundColor: '#332D2D', border: '2px solid black', padding: '50px' }}>
            <Card.Body style={{ position: 'relative' }}>
              <Card.Title style={{ fontSize: '30px', color: '#f8f9fa' }}></Card.Title>
              <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Paikkakunta haku"
              className="me-2"
              aria-label="Search"

              //kesken
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button onClick={()=>searchPressed()} variant='outline-info'>Hae</Button>
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
              <Card.Title style={{ fontSize: '30px', color: '#f8f9fa' }}></Card.Title>
              <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Paikkakunta haku"
              className="me-2"
              aria-label="Search"

              //kesken
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button onClick={()=>searchPressed()} variant='outline-info'>Hae</Button>
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