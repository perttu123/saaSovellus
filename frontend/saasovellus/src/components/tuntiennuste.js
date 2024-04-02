import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

//Tuntiennuste taulukko
const TuntiEnnuste = ({data}) => {
  
    return (
    <div className='oee'>
        
      <Table className='table' style={{ maxWidth: '1000px', fontSize:'18px', border: '2px solid black', padding: "20px"}} bordered striped variant='dark '>
        <thead>
          <tr>
            <th>Sää</th>
            <th>Lämpötila</th>
            <th>Kellonaika</th>
          </tr>
        </thead>
        
        <tbody>
        {data.map((item)=>(
          
            <tr>
            <td><img src={item.image} alt="Image" style={{ maxWidth: '45px' }}/>{item.weather}</td>
              <td>{item.temp} °C</td>
              <td>{new Date(item.time).toLocaleTimeString([], {hour: "2-digit", minute:"2-digit"} )}</td>
            </tr>

        ))}
        </tbody>
      </Table>
      
    </div>
    );
  }
  
  export default TuntiEnnuste;