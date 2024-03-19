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

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await SendLocation(search);
                setData(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [search]);

    useEffect(() => {
        console.log(data.latitude);
    }, [data]);

    return (
        <div className="App">
      
        <Row>
          <Col md={6}><Paikka /></Col>
          <Col md={6}><SaaNyt data={data}/></Col>
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
