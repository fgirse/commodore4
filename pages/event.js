/* eslint-disable prettier/prettier */
import React from 'react';
import StyledButton from '@/components/Buttons/Button';
import StyledHeroEvent from '../components/HeroEvent';
import Heading2 from '@/components/Headings/Heading2'; 
import theme from "theme-ui-sketchy-preset";
import Image from 'next/image'
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
                                                                                                                                                                                                                                                                                                                                                                                                                             

function event() {
    return (
        <>
        <div className="mx-auto">
         <StyledHeroEvent>
            
              <Heading2 className="">DEIN EVENT</Heading2>

            <div className="mt-60 p-6 flex flex-col items-start w-4/12">
                
            <ThemeProvider theme={theme}>
  
  
  <div>
  <Card
        mb={5}
        mt={2}
        sx={{
          maxWidth: 400,
          padding: "20px",
          color: "#ffffff",
          backgroundColor: "orange",
          border: "3px white solid",
          boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
        }}
      > 
        <Text className="text-xl">
        <p className="uppercase font-bold text-yellow-800">Sie planen einen privaten oder geschäftlichen Event?</p>
        <p className="text-sm text-justify"> Wir bieten Ihnen gerne eine ideale Plattform für ein unvergesslichen Event im Kreise Ihrer Freunde oder/ und Geschäftspartner (Catering möglich!!!) Sprechen Sie uns an, Kontaktieren Sie uns telfonisch oder schreiebn Sie uns eien mail. Wir begleiten Sie gerne professionell und unkompliziert bei der Planung Ihres individuellen Events!</p>
       </Text>
      </Card>
  </div>
</ThemeProvider>

                    <div className="ml-60">
                        <StyledButton>e-mail Rettungsanker</StyledButton>
                    </div>
            </div>
        </StyledHeroEvent>
                                          
        </div>
        </>
        )
   }
   export default event