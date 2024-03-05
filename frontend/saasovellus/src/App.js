import TypesExample from './components/navbar';
import './App.css';
import { ApiHaku } from './components/ApiHaku';
import { useState, useEffect } from 'react';

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
      <TypesExample/>
    </div>
  );
}

export default App;
