
import NavBar from './components/navbar';
import {Row, Col} from 'react-bootstrap'
import './App.css';
import { ApiHaku } from './components/ApiHaku';
import { useState, useEffect } from 'react';
import Paikka from './components/paikkakunta';
import SaaNyt from './components/saanyt';
import ViikkoEnnuste from './components/viikkoennuste';
import TuntiEnnuste from './components/tuntiennuste';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import SearchResult from './pages/SearchResult';


function App() {

 

  return (

    <div className="App">
      
      <Row>
        <Col md={6}><Paikka /></Col>
        <Col md={6}><SaaNyt /></Col>
      </Row>
      <Row className="mt-5 px-5">
        <div className="col-md-6">
          <h3>Tuntiennuste</h3>
          <TuntiEnnuste />
        </div>
        <div className="col-md-6">
          <h3>Viikkoennuste</h3>
          <ViikkoEnnuste />
        </div>
      </Row>
    </div>
    
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route path="/:search" element={<SearchResult />} />
        </Route>
        
      </Routes>
      </BrowserRouter>
      
      

  );
}

//haloo
export default App;
