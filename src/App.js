import logo from './logo.svg';
import './App.css';
import React, { useState} from "react";
import axios, * as others from 'axios';



function App() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await axios.get('http://localhost:8081/posts');
        setData(response.data);
    }
  return (
    <div className="App">
        <div>
            <button className="fetch-button" onClick={fetchData}>
                Fetch Data
            </button>
        </div>
        {data.map(data =>  <div style={{ display:'flex', alignItems: 'center', justifyContent:'center', flexDirection: 'column'}}  key = {data.id}>
                <p>{data.id}</p>
                <p>{data.text}</p>
            </div>
        )}
    </div>
  );
}

export default App;
