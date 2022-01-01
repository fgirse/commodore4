import React from 'react'
import StyledHeroWohin from '../components/HeroWohin';
import Heading1 from '@/components/Headings/Heading1'; 
import Image from 'next/image';
import Modal from '../components/Modal'
const Kontact = () => {
    return (
        <div>
            <>
        <div className="mx-auto">
         <StyledHeroWohin                                     >
            
              <Heading1 className="">Wohin?</Heading1>
    
            
            <div className="mt-44 p-6 flex flex-col items-start gapy-5 w-4/12">
                
                    <div className="bg-gray-900 opacity-80">
                        <Image ClassName="" src="/lighthousebw.svg" alt="illustration" height={150} width={120} layout='responsive'/>
                    </div>

                    <div className="mt-12">
                        <Modal></Modal>
                    </div>
            </div>
        </StyledHeroWohin>
                                          
        </div>
        </> 
        </div>
    )
}

export default Kontact
