/* eslint-disable prettier/prettier */
import React from 'react';
import StyledButton from '@/components/Buttons/Button';
import StyledHeroWohin from '../components/HeroWohin';
import Heading2 from '@/components/Headings/Heading2'; 
import theme from "theme-ui-sketchy-preset";
import Image from 'next/image'
import SimpleMap  from"../components/SimpleMap"
import OEV from '../components/icons/svg/SVGOeV'
import Modal from '../components/Modal'
import {
  jsx,
  ThemeProvider,
  Flex,
  Box,
  NavLink,
  Button,
  Card,
  Text,
  Label,
  Checkbox,
  Select,
  Textarea,
  Radio,
  Input,
  Badge,
  Alert,
  Divider,
  Styled as S
} from "theme-ui";
import { ClientSideRowModelSteps } from 'ag-grid-community';

const Kontakt = () => {
    return (
      <>
         <StyledHeroWohin>
            <main>

            
              <Heading2 className="mr-2 ">wohin?</Heading2>

            <div className="mt-48 ml-96 p-6 flex flex-col items-start w-11/12">

                     <p className="text-grey-100 text-5xl">Adelhauserstrasse 7c</p>
                     <p className="text-grey-100 text-5xl">79098 Freiburg</p>
                    
                     <OEV className="" widths="" height="6vh"></OEV>
                     <p className=" text-grey-100 text-5xl">Tram: Holzmarkt</p>
                     <p className=" text-grey-100 text-2xl">Linie 1 - 3 + 5</p>  
             </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
            
            <div className='w-11/12 '>
            <Modal></Modal>
            </div>

            </main>    

              

        </StyledHeroWohin>
                                          
      
        </>
    )
}

export default Kontakt