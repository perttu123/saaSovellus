import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SendLocation } from '../components/ApiHaku';

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
        <div>
            <h1>MFOASFMASOFOSA</h1>
        </div>
    );
}

export default SearchResult;
