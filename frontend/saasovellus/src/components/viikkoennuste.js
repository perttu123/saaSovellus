import Table from 'react-bootstrap/Table';

//Viikkoennuste taulukko
const ViikkoEnnuste = ({data}) => {
  
    return (
    <div className='oee'>
  
      <Table className='table' style={{ maxWidth: '1000px', fontSize:'20px', border: '2px solid black', padding: "20px" }} bordered striped>
        <thead>
          <tr>
            <th>Sää</th>
            <th>min</th>
            <th>max</th>
            <th>Päivä </th>
          </tr>
        </thead>
        <tbody>
          
          {data.map((item)=>(
          
          <tr>
            <td><img src={item.image} alt="Image" style={{ maxWidth: '45px' }} /></td>
            <td>{item.min} °C</td>
            <td>{item.max} °C</td>
            <td>{item.date}</td>
          </tr>

          ))}
        </tbody>
      </Table>
      
    </div>
    );
  }
  
  export default ViikkoEnnuste;