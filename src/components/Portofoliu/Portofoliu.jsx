import React from 'react'
import motoDesktop from './Images/4motoForRent.webp'
import motoPhone from './Images/4MotoForRentPhone.webp'
import adinaDeskotp from './Images/adinaNails.webp'
import adinaPhone from './Images/AdinaNailsPhone.webp'
import bidhouseDesktop from './Images/Bidhouse.webp'
import bidhousePhone from './Images/BidhousePhone.webp'
import scoalaDeSoferiDesktop from './Images/scoalaDeSoferi.webp'
import scoalaDeSoferiPhone from './Images/scoalaDeSoferiPhone.webp'
import lorenaLashStudioDesktop from './Images/LorenaLashStudio.webp'
import lorenaLashStudioPhone from './Images/LorenaLashStudioPhone.webp'
 
import Fade from 'react-reveal/Fade';

import { useState,useEffect } from 'react'
const Portofoliu = () => {
  const [siteIndex,setSiteIndex]=useState(0)
  const desktopImg=[bidhouseDesktop,motoDesktop,adinaDeskotp,scoalaDeSoferiDesktop,lorenaLashStudioDesktop]
  const phoneImg=[bidhousePhone,motoPhone,adinaPhone,scoalaDeSoferiPhone,lorenaLashStudioPhone]
  const sitesLink=["https://bidhousesite.netlify.app/","https://4motoforrent.ro/","https://adinahirsch.ro/","https://scoaladesoferi-diculescuciprian.ro/","https://lorenalash.ro/"]
  useEffect(() => {
    const interval = setTimeout(() => {
 
      if(siteIndex<sitesLink.length-1)
        setSiteIndex(prev=>prev+=1)
      else
        setSiteIndex(0)
      
    }, 7000);

    return () => clearInterval(interval);
    
  }, [siteIndex]);

  return (
    <div name="Portofoliu" className='relative flex justify-center items-center w-full h-full lg:h-screen mt-[15rem] lg:my-[18rem] lg:py-[12rem]   bg-transparent'>
        <div className='flex flex-col items-center w-[80%] lg:w-[90%]'>
        <Fade>
        <h2 className='relative mb-[5rem] text-[24px] lg:text-[56px]  font-extrabold font-outline-1 lg:font-outline-2    text-transparent font-kanit'>PORTOFOLIU</h2>
        </Fade>
        <Fade>
        <div className='relative  w-[350px] lg:w-[900px]'>
            <a  href={sitesLink[siteIndex]}><img   src={desktopImg[siteIndex]} alt="Prezentare site pe desktop" className="lg:left-0 left-[1.5rem] w-[280px] lg:w-[650px] xl:w-[700px] 2xl:w-[800px] cursor-pointer" /></a>
            <a  href={sitesLink[siteIndex]}> <img src={phoneImg[siteIndex]} alt="Prezentare site pe mobil" className="absolute right-[.5rem] lg:right-[11rem] xl:right-[7rem] 2xl:right-0 top-[1rem] lg:top-[5rem] w-[60px] lg:w-[115px] xl:w-[130px] 2xl:w-[150px] cursor-pointer" /></a>
          </div>
          <div className='flex'>
              <div onClick={()=>setSiteIndex(0)} className={`relative ${siteIndex===0 ? "border-white" : "border-gray-500"} mt-[4rem] mx-4 flex justify-center items-center w-[15px] lg:w-[30px] h-[15px]  lg:h-[30px] rounded-[50%] bg-transparent border-[2px] overflow-hidden cursor-pointer`}><span className={`w-[70%] h-[70%] bg-white rounded-[50%] bg-opacity-[80%] ${siteIndex!==0 && "hidden"} `} /></div>
              <div onClick={()=>setSiteIndex(1)} className={`relative ${siteIndex===1 ? "border-white" : "border-gray-500"} mt-[4rem] mx-4 flex justify-center items-center w-[15px] lg:w-[30px] h-[15px]  lg:h-[30px] rounded-[50%] bg-transparent border-[2px]  overflow-hidden cursor-pointer`}><span className={`w-[70%] h-[70%] bg-white rounded-[50%] bg-opacity-[80%] ${siteIndex!==1 && "hidden"}`} /></div>
              <div onClick={()=>setSiteIndex(2)} className={`relative ${siteIndex===2 ? "border-white" : "border-gray-500"} mt-[4rem] mx-4 flex justify-center items-center w-[15px] lg:w-[30px] h-[15px]  lg:h-[30px] rounded-[50%] bg-transparent border-[2px]  overflow-hidden cursor-pointer`}><span className={`w-[70%] h-[70%] bg-white rounded-[50%] bg-opacity-[80%] ${siteIndex!==2 && "hidden"}`} /></div>
              <div onClick={()=>setSiteIndex(3)} className={`relative ${siteIndex===3 ? "border-white" : "border-gray-500"} mt-[4rem] mx-4 flex justify-center items-center w-[15px] lg:w-[30px] h-[15px]  lg:h-[30px] rounded-[50%] bg-transparent border-[2px]  overflow-hidden cursor-pointer`}><span className={`w-[70%] h-[70%] bg-white rounded-[50%] bg-opacity-[80%] ${siteIndex!==3 && "hidden"}`} /></div>
              <div onClick={()=>setSiteIndex(4)} className={`relative ${siteIndex===4 ? "border-white" : "border-gray-500"} mt-[4rem] mx-4 flex justify-center items-center w-[15px] lg:w-[30px] h-[15px]  lg:h-[30px] rounded-[50%] bg-transparent border-[2px]  overflow-hidden cursor-pointer`}><span className={`w-[70%] h-[70%] bg-white rounded-[50%] bg-opacity-[80%] ${siteIndex!==4 && "hidden"}`} /></div>
          </div>
        </Fade>
        </div>
    </div>
  )
}

export default Portofoliu