import Table from 'react-bootstrap/Table';

//Tuntiennuste taulukko
const TuntiEnnuste = () => {
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
          <tr>
            <td><img src="saa.png" alt="Image" style={{ maxWidth: '45px' }} /></td>
            <td>-1 C</td>
            <td>10:00</td>
          </tr>
          <tr>
            <td></td>
            <td>-2 C</td>
            <td>11:00</td>
          </tr>
          <tr>
            <td></td>
            <td>-2 C</td>
            <td>12:00</td>
          </tr>
          <tr>
            <td></td>
            <td>-2 C</td>
            <td>13:00</td>
          </tr>
          <tr>
            <td></td>
            <td>-2 C</td>
            <td>14:00</td>
          </tr>
          <tr>
            <td></td>
            <td>-2 C</td>
            <td>15:00</td>
          </tr>
          <tr>
            <td></td>
            <td>-2 C</td>
            <td>16:00</td>
          </tr>
        </tbody>
      </Table>
      
    </div>
    );
  }
  
  export default TuntiEnnuste;