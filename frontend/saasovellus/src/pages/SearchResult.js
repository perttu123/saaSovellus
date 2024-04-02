import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SendLocation } from '../components/ApiHaku';
import ErrorSearch from '../components/ErrorSearch';

import {Row, Col} from 'react-bootstrap'
import '../App.css';


import Paikka from '../components/paikkakunta';
import SaaNyt from '../components/saanyt';
import ViikkoEnnuste from '../components/viikkoennuste';
import TuntiEnnuste from '../components/tuntiennuste';

function SearchResult() {
    const location = useLocation();
    const search = location.pathname.substring(1);

    // const [hourlyData, setHourlyData] = useState([]);
    // const [currentWeather, setCurrentWeather] = useState({
    //     time: '',
    //     interval: 0,
    //     temperature_2m: 0,
    //     weather_code: 0,
    //     relative_humidity_2m: 0,
    //     wind_speed_10m: 0
    // })
    const [error, setError] = useState(false);
    const [data, setData] = useState({
        hours: [],
        current: {},
        daily: [],
        city: ""
    });

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await SendLocation(search);
                if(response.error=="error"){
                  setError(true);
                }
                else{
                  setError(false);
                  setData(response);
                }
                // setHourlyData(response.hours);
                // setCurrentWeather(response.current);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [search]);

    return (
        <div className="App">
        {error ? (<ErrorSearch/>):
        (
          <>
          <Row>
          <Col md={6}><Paikka data={data.city}/></Col>
          <Col md={6}><SaaNyt data={data.current}/></Col>
        </Row>
        <Row className="mt-5 px-5">
          <div className="col-md-6">
            <h3>Tuntiennuste</h3>
            <TuntiEnnuste data={data.hours}/>
          </div>
          <div className="col-md-6">
            <h3>Viikkoennuste</h3>
            <ViikkoEnnuste data={data.daily}/>
          </div>
        </Row>
          </>
        )}
        
      </div>
    );
}

export default SearchResult;
