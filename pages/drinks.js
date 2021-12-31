/* eslint-disable prettier/prettier */
import React from 'react'
import { Heading1 } from '@/components/Headings/Heading1.styles'
import  { useState, useEffect } from 'react';
import { useTable } from 'react-table';


const Table = () => {
      
  
      const [tabelleBL, setTabelleBL] = useState([])
  


      const Token = '41c4813ea4f746fbbdd2bdb9c5250aa4';
      const Url = 'https://api.football-data.org/v2/competitions/2002/standings?';
      const url2 = (Url, { headers: { 'X-Auth-Token': Token }})
      const url3 = "https://api.randomuser.me/";
      const url4 = "https://api.football-data.org/v2/competitions/2002/standings?X-Auth-Token=41c4813ea4f746fbbdd2bdb9c5250aa4"


      useEffect(() => {
        getData()
    }, [])
  

  const getData = async () => {

      const response = await axios( Url, { headers: { 'X-Auth-Token': Token } })
      console.log(response.data.standings[0].table)
      setTabelleBL(response.data.standings[0].table)
  }

  


    const data = []
        
      function drinks() {
        return (
          <div className="App">
            <table>
              <tr>
                <th>Rang</th>
                <th>Emblem</th>
                <th>Team</th>
                <th>Spiele</th>
                <th>gewonnen</th>
                <th>verloren</th>
                <th>remis</th>
                <th>Tore</th>
                <th>Gegentore</th>
                <th>Differenz</th>
                <th>Punkte</th>

              </tr>
              {data.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val.name}</td>
                    <td>{val.age}</td>
                    <td>{val.gender}</td>
                  </tr>
                )
              })}
            </table>
          </div>
        );
      }}
    
    export default Table