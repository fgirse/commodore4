/* eslint-disable prettier/prettier */
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import LogoNeu from '../components/icons/svg/SvgLogoNeu'
import Flensburger from'../components/icons/svg/SVGFlensburger'
import Ganter from '../components/icons/svg/SVGGanter'
import Astra from '../components/icons/svg/SVGAstra'
import formatDate from '@/lib/utils/formatDate'
import StyledHeroHome from '../components/HeroHome'
import { Heading3 } from '../components/Headings/Heading3.styles'
import { Heading1 } from '@/components/Headings/Heading1.styles'
import Image from 'next/image'
import sketchy from "theme-ui-sketchy-preset"

import {
  jsx,
  Flex,
  Box,
  NavLink,
  ThemeProvider,
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




 export async function getStaticProps() {
   const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

const theme = {
  ...sketchy,
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#33e",
  },

}
export default function Home() {
  return (
    <>
      
      <Heading3>Dein Treffpunkt<br/> in Freiburg</Heading3>
          <StyledHeroHome>
  
                
  
          </StyledHeroHome> 

          <section className="mx-auto mt-5 w-12/12 h-48  bg-gray-800 flex flex-wrap -mx-4 -mb-4 md:mb-0">
 
 
              <div className="px-10 z-10   md:w-1/3 px-4 mb-4 md:mb-0">
                              <p className="text-4xl font-bold uppercase text-yellow-500">öffnungszeiten</p>
                              <p className="mt-2 text-2xl  text-gray-300">Montag bis Donnerstag: 18 bis 24 Uhr</p>
                              <p className="text-2xl  text-gray-300">Freitag und Samstag: 15 bis 03 Uhr</p>
                              <p className="text-2xl  text-gray-300">Sonntag: Ruhetag</p>
              </div>

              <div className="bg-red-800 w-full rounded-2xl md:w-7/12 px-4 mb-4 md:mb-0">

                          <div className='flex flex-row'>
                                  <div className="w-96 lg:w-8/12 lg:mt-7 lg:mt-2 xl:mb-3 ">
                                        <Image src="/portrait-mick1.png" alt="portrait" layout="responsive" height={250} width={185}/>
                                  </div>
                                    <div className='z-20 flex flex-col items-start justify-center'>
                                      <p className="text-3xl p-2 text-yellow-500 upprercase">'Moin Moin</p>
                                      <p className="text-gray-100 text-justify px-4 lg:text-xs">In Hommage an eine typische Kiez-Kneipe auf St.Pauli, haben wir im Herzen von Freiburg ein Lokal eröffnet, welches es so südlich der Elbe wohl kein zweites Mal gibt. Ausgebaut im Stile eines Schiffrumpfes, ist der im Herzen der Altstadt gelegene Rettungsanker-Freiburg idealer Treffpunkt um nach Feierabend nette und interessante Menschen kennenzulernen. Wir sind stolz auf unser buntes, internationales Publikum. Unser Rettungsanker ist auch ideale Location zur Durchführung Ihres privaten oder geschäftlichen Events. Sprechen Sie uns an oder kontaktieren Sie uns vor Ort oder schreiben Sie uns eine email. Wir freuen uns Sie im Rettungsanker begrüsssen zu dürfen <br/><br/>Michael Schreck und das Team des Rettungsanker </p>      
                                    </div>
                                </div>
                            
                          </div>     
                               
        </section> 
        <div className='absolute right-20 z-10 w-3/12 float-right transform -translate-y-32' >   
              <Image  className='absolute' src="/Astraballons.png" alt="portrait" layout="responsive" height={473} width={473}/>  
            </div>
        <Heading1 className=''>Die Kneipe</Heading1>
            <div className='w-2/12 absolute left-60 z-20 -transform -translate-y-36' >   
              <Image src="/rettungsring.png" alt="portrait" layout="responsive" height={473} width={473}/>  
            </div>
            <div className='absolute w-2/12 z-4 transform -translate-y-52' >   
              <Image src="/lighthousebw.svg" alt="portrait" layout="responsive" height={473} width={473}/>  
            </div>                 
                 
              <section className='mt-3 mx=auto w-11/12'>
            <ThemeProvider theme={theme}>
  <div className="ml-32 mt-24 grid grid-cols-3 justify-center items-start gap-24" >
  
  <Card
          mb={5}
          mt={20}
          sx={{
            maxWidth: 400,
            padding: "30px",
            color: "#ffffff",
            backgroundColor: "orange",
            border: "3px white solid",
            boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
          }}onGotPointerCapture={2}
        >
          <div className='border- border-gray-100'>
            <Ganter height="24vh" width="20vw"></Ganter>
          </div>
          <Text>
           <p className="mt-10 text-4xl text-center text-sans font-bold uppercase">Ganter </p>
           <p className="text-xl text-center">leckeres Ganter vom Fass</p>
          </Text>
        </Card>
    
    <Card
          mb={5}
          mt={20}
          sx={{
            maxWidth: 400,
            padding: "30px",
            color: "#ffffff",
            backgroundColor: "orange",
            border: "3px white solid",
            boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
          }}onGotPointerCapture={2}
        >
          <div className='border- border-gray-100'>
            <Astra height="24vh" width="20vw"></Astra>
          </div>
          <Text>
           <p className="mt-10 text-4xl text-center text uppercase font-bold" >Astra Bier</p>
           <p className="text-xl text-center">natürlich direkt vom Kiez Ganter vom Fass</p>
           </Text>
           </Card>
    <Card
          mb={5}
          mt={20}
          sx={{
            maxWidth: 400,
            padding: "30px",
            color: "#ffffff",
            backgroundColor: "orange",
            border: "3px white solid",
            boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
          }}onGotPointerCapture={2}
        >
          <div className='border- border-gray-100'>
          <Flensburger height="24vh" width="wovw"></Flensburger>
          </div>
          <Text>
          <p className="mt-10 text-4xl text-center text uppercase font-bold">Flensburger</p>
           <p className="text-xl text-center">das blonde Herbe aus dem hohen Norden</p>
            </Text>
          </Card>
</div>
    </ThemeProvider>

            </section>
           
              <Heading1 className="mt-2">Impressionen aus dem Rettungsanker</Heading1>
              <div className='w-3/12 absolute'>
            <Image src="/Albers_Illu_white.png" top-5 alt="Impressionen" height="208 " width="195" layout="responsive"/>
          </div>
      


 
              
            <section className='mx=auto w-12/12'>
            <ThemeProvider theme={theme}>
  <div className="mx-auto ml-16 grid grid-cols-3 justify-between items-start grid-4" >

  
  <Card
          mb={5}
          mt={20}
          sx={{
            maxWidth: 433,
            padding: "30px",
            color: "#ffffff",
            backgroundColor: "orange",
            border: "3px white solid",
            boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
          }}onGotPointerCapture={2}
        >
          <div className='border-8 border-gray-100'>
            <Image src="/Impress01.jpg" alt="Impressionen" height="168 " width="300" layout="responsive"/>
          </div>
          <Text>
           <p className="mt-10 text-4xl text-center text-sans font-bold uppercase">Impressionen</p>
           <p className="text-xl text-center"></p>
          </Text>
        </Card>
    


    
    <Card
          mb={5}
          mt={20}
          sx={{
            maxWidth: 433,
            padding: "30px",
            color: "#ffffff",
            backgroundColor: "orange",
            border: "3px white solid",
            boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
          }}onGotPointerCapture={2}
        >
          <div className='border-8 border-gray-100'>
            <Image src="/Impress02.jpg" alt="Impressionen" height="168 " width="300" layout="responsive"/>
          </div>
          <Text>
           <p className="mt-10 text-4xl text-center text">Impressionen</p>
           </Text>
           </Card>
    <Card
          mb={5}
          mt={20}
          sx={{
            maxWidth: 433,
            padding: "30px",
            color: "#ffffff",
            backgroundColor: "orange",
            border: "3px white solid",
            boxShadow: "10px 5px 10px rgba(244, 216, 154, 0.9)",
          }}onGotPointerCapture={2}
        >
          <div className='border-8 border-gray-100'>
            <Image src="/Impress03.jpg" alt="Impressionen" height="168 " width="300" layout="responsive"/>
          </div>
          <Text>
           <p className="mt-10 text-4xl text-center text">Impressionen</p>
          </Text>
          </Card>
</div>
    </ThemeProvider>






            </section>

            <section>
            <div>

            <Heading1 className="mt-16">Impressum</Heading1>
            <div>
              <div className="flex flex-col items-center justify-between">
                  <h1 className='mx-auto w-9/12 text-4xl text-gray-100 text-center'>Rettungsanker Freiburg GbR</h1>
                  <h1 className='mx-auto w-9/12 text-4xl text-gray-100 text-center'>Adelhauserstrasse 7c</h1>
                  <h1 className='mx-auto w-9/12 text-4xl text-gray-100 text-center'>79098 Freiburg / Breisgau</h1>
              </div>
                  
              <div class Name="mt-12">
            <h1 className='mt-5 mx-auto w-9/12 font-mono text-4xl text-yellow-400 text-center'>Geschäftsführung:</h1>
            <h1 className='mx-auto w-9/12 text-4xl text-gray-100 text-center'>Michael Schreck</h1>
            </div>


            <div class Name="mt-12">
            <h1 className='mt-5 mx-auto w-9/12 font-mono text-4xl text-yellow-400 text-center'>Steuernummer:</h1>
            <h1 className='mx-auto w-9/12 text-4xl text-gray-100 text-center'>1234567890</h1>
            </div>

            <div class Name="mt-12">
            <h1 className='mt-5 mx-auto w-9/12 font-mono text-4xl text-yellow-400 text-center'>Gerichtsstand:</h1>
            <h1 className='mb-10 mx-auto w-9/12 text-4xl text-gray-100 text-center'>Freiburg/ Breisgau</h1>
            </div>
           
           </div>





            </div>
            
              
            </section>
</>

  
        
  )}