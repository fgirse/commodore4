/* eslint-disable prettier/prettier */
import React from 'react'
import { Heading1 } from '@/components/Headings/Heading1.styles'
import  { useState, useEffect } from 'react';
import { useTable } from 'react-table';

export default function Drinks()  {
      
  
      const [tabelleBL, setTabelleBL] = useState([])
  


      const Token = '41c4813ea4f746fbbdd2bdb9c5250aa4';
      const Url = 'https://api.football-data.org/v2/competitions/2002/standings?';
      const url2 = (Url, { headers: { 'X-Auth-Token': Token }})
      const url3 = "https://api.randomuser.me/";
      const url4 = "https://api.football-data.org/v2/competitions/2002/standings?X-Auth-Token=41c4813ea4f746fbbdd2bdb9c5250aa4"



        
      
        return (
          <div className="text-red-500 text-6xl">
            Drinks
          </div>
        );
      }
    
    