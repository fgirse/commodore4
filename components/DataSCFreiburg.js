/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import team from 'pages/team'
import { data } from 'autoprefixer'
import Image from 'next/image'
import SVGSCFreiburgEmblem from'components/icons/svg/SVGSCFREIBURG';



const DataSCFreiburg = () => {
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
        setTabelleBL(response.data.standings[0].table[5])
        console.log(response.data.standings[0].table[5])
    }

    
    

    
    

    return (
        <>
            {/*<h1 className="text-white" id='title'>React Table</h1>*/}
            
            <div className="w-12/12 h-60 flex flex-row gap-x-5 justify-center items-center bg-white opacity-80">
                            <div className="w-96 p-3"><SVGSCFreiburgEmblem/></div>
                            <p className="text-4xl p-3 font-bold text-gray-700">Spiele: {tabelleBL.playedGames}</p>
                            <p className="text-4xl font-bold text-green-400">Siege: {tabelleBL.won}</p>
                            <p className="text-4xl font-bold text-gray-400">Tore: {tabelleBL.goalsFor}</p>
                            <p className="text-4xl font-bold text-gray-400">Gegentore: {tabelleBL.goalsAgainst}</p>

            </div>
        </>
    )
}
    

export default DataSCFreiburg
