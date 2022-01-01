/* eslint-disable prettier/prettier */
import React from 'react';

import StyledButton from '@/components/Buttons/Button';
import StyledHeroEvent from '../components/HeroEvent';
import Heading1 from '@/components/Headings/Heading1'; 
import Image from 'next/image';                                                                                                                                                                                                                                                                                                                                                                                                                             

function geschichte() {
    return (
        <>
        <div className="mx-auto">
         <StyledHeroEvent>
            
              <Heading1 className="">Die Geschichte</Heading1>
    
            
            <div className="mt-44 p-6 flex flex-col items-start gapy-5 w-4/12">
                
                    <div className="bg-gray-900 opacity-80">
                            <p className="text-yellow-400 text-2xl px-2 py2">Sie planen privaten oder geschäftlichen Event?</p>
                            <p className="text-gray-100 text-1xl  px-2 py2">Wir bieten Ihnen gerne eine ideale Plattform für ein unvergesslichen Event im Kreise Ihrer Freunde oder/ und Geschäftspartner (Catering möglich!!!) Sprechen Sie uns an, Kontaktieren Sie uns telfonisch oder schreiebn Sie uns eien mail. Wir begleiten Sie gerne professionell und unkompliziert bei der Planung Ihres individuellen Events!</p>
                    </div>

                    <div className="mt-12">
                        <StyledButton>e-mail Rettungsanker</StyledButton>
                    </div>
            </div>
        </StyledHeroEvent>
                                          
        </div>
        </>
        )
   }
   export default geschichte