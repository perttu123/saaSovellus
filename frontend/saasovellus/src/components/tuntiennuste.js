import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

//Tuntiennuste taulukko
const TuntiEnnuste = ({data}) => {

  const [hourData, setHourData] = useState([])

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-based
  const day = String(currentDate.getDate()).padStart(2, '0');
  const hour = String(currentDate.getHours()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}T${hour}:00`;
  
  useEffect(()=>{
    setHourData([]);
    if (data && data.time){
      
      let currentIndex = data.time.indexOf(formattedDate);
      
      for (let index = 0; index < 7; index++) {
        const newHourData = { time: data.time[currentIndex], temp: data.temperature_2m[currentIndex], weather: data.weather_code[currentIndex]};
        setHourData(prevHourData => [...prevHourData, newHourData]);
        currentIndex++;
      }
    }
    console.log(hourData);
  },[data])

    return (
    <div className='oee'>
      
        
      <Table className='table' style={{ maxWidth: '1000px', fontSize:'20px' }} bordered striped>
        <thead>
          <tr>
            <th>Sää</th>
            <th>Lämpötila</th>
            <th>Kellonaika</th>
          </tr>
        </thead>
        
        <tbody>
        {hourData.map((item)=>(
          
            <tr>
            <td><img src="saa.png" alt="Image" style={{ maxWidth: '45px' }}/>{item.weather}</td>
              <td>{item.temp} C</td>
              <td>{new Date(item.time).toLocaleTimeString([], {hour: "2-digit", minute:"2-digit"} )}</td>
            </tr>

        ))}
        </tbody>
      </Table>
      
    </div>
    );
  }
  
  export default TuntiEnnuste;