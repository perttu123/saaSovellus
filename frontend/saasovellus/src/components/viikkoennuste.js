import Table from 'react-bootstrap/Table';

//Viikkoennuste taulukko
const ViikkoEnnuste = () => {
    return (
    <div className='oee'>
  
      <Table className='table' style={{ maxWidth: '1000px', fontSize:'20px', borderRadius: '10px' }} bordered striped>
        <thead>
          <tr>
            <th>Sää</th>
            <th>Lämpötila</th>
            <th>Päivä </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src="saa.png" alt="Image" style={{ maxWidth: '45px' }} /></td>
            <td>-1 C</td>
            <td>Maanantai 17.3.2024</td>
          </tr>
          <tr>
            <td></td>
            <td>-2 C</td>
            <td>Tiistai 18.3.2024</td>
          </tr>
          <tr>
            <td></td>
            <td>-2 C</td>
            <td>Keskiviikko 19.3.2024</td>
          </tr>
          <tr>
            <td></td>
            <td>-2 C</td>
            <td>Torstai 20.3.2024</td>
          </tr>
          <tr>
            <td></td>
            <td>-2 C</td>
            <td>Perjantai 21.3.2024</td>
          </tr>
          <tr>
            <td></td>
            <td>-2 C</td>
            <td>Lauantai 22.3.2024</td>
          </tr>
          <tr>
            <td></td>
            <td>-2 C</td>
            <td>Sunnuntai 23.3.2024</td>
          </tr>
        </tbody>
      </Table>
      
    </div>
    );
  }
  
  export default ViikkoEnnuste;