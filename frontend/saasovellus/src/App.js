import logo from './logo.svg';
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
