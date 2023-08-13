import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [userName, setUserName] = useState('')

  const getNames = async () => {
    const response = await axios.get('/names');
    console.log(response);
    setUserName(response.data)
  }

  useEffect(() => {
    getNames()
  }, [])



  return (
    <div>
      <h1>My Frontend</h1>
      <p>my name is {userName}</p>
    </div>

  );
}

export default App;
