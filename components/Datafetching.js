/* eslint-disable prettier/prettier */
// App.js

import React, { useState, useEffect } from "react";
import axios from 'axios;'
import Table from "./Table";
import "./App.css";

function App() {
  // data state to store the TV Maze API data. Its initial value is an empty array
  const [data, setData] = useState([]);
  
        const Token = '41c4813ea4f746fbbdd2bdb9c5250aa4';
        const Url = 'https://api.football-data.org/v2/competitions/2002/standings?';
        const url2 = (Url, { headers: { 'X-Auth-Token': Token }})
        const url3 = "https://api.randomuser.me/";
        const url4 = "https://api.football-data.org/v2/competitions/2002/standings?X-Auth-Token=41c4813ea4f746fbbdd2bdb9c5250aa4"

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios( Url, { headers: { 'X-Auth-Token': Token } });
      setData(result.data); console.log(result);
    })();
  }, []);

  return (
    <div className="App"></div>
  );
}

export default App;