import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SendLocation } from '../components/ApiHaku';


import {Row, Col} from 'react-bootstrap'
import '../App.css';


import Paikka from '../components/paikkakunta';
import SaaNyt from '../components/saanyt';
import ViikkoEnnuste from '../components/viikkoennuste';
import TuntiEnnuste from '../components/tuntiennuste';

function SearchResult() {
    const location = useLocation();
    const search = location.pathname.substring(1);

    const [data, setData] = useState([]);
    const [currentWeather, setCurrentWeather] = useState({
        time: '',
        interval: 0,
        temperature_2m: 0,
        weather_code: 0
    })

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await SendLocation(search);
                setData(response);
                setCurrentWeather(response.current);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [search]);


    return (
        <div className="App">
      
        <Row>
          <Col md={6}><Paikka data={search}/></Col>
          <Col md={6}><SaaNyt data={currentWeather}/></Col>
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

export default SearchResult;
