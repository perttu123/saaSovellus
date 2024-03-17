import NavBar from './components/navbar';
import {Row, Col} from 'react-bootstrap'
import './App.css';
import { ApiHaku } from './components/ApiHaku';
import { useState, useEffect } from 'react';
import Paikka from './components/paikkakunta';
import SaaNyt from './components/saanyt';
import ViikkoEnnuste from './components/viikkoennuste';
import TuntiEnnuste from './components/tuntiennuste';
import './App.css'

function App() {

  const [data, setData] = useState();
  
  async function fetchData(){
    const response = await ApiHaku();
    setData(response);
  }
  
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className="App">
      <NavBar />
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
  );
}

//haloo
export default App;
