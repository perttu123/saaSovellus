
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

<>
    
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route path="/:search" element={<SearchResult />} />
        </Route>
        
      </Routes>
      </BrowserRouter>
      
      
      </>
  );
}

//haloo
export default App;
