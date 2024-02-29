import React, { useState, useEffect, useMemo } from "react";
import meImg from "./Images/Me.png";
import { BsMouse, BsPerson, BsHandIndexThumb } from "react-icons/bs";
import {AiOutlineLinkedin,AiFillGithub,AiFillPhone} from 'react-icons/ai'
import css from "./Images/css.svg";
import html from "./Images/html.svg";
import js from "./Images/js.svg";
import nodejs from "./Images/nodejs.png";
import expressjs from "./Images/expressjs.webp";
import firebase from "./Images/firebase.svg";
import react from "./Images/React-icon.svg";
import tailwind from "./Images/tailwind.svg";

import NavbarPersonal from "../Navbar/NavbarPersonal";
import { AiOutlineArrowRight } from "react-icons/ai";
import MovingSlider from '../MovingSlider/MovingSlider'
import fmiLogo from "./Images/FMILogo.png";
import portofolioPresentation from "./Images/Postare.jpg";
import { Link, animateScroll as scroll } from "react-scroll";
import motoDesktop from "../Portofoliu/Images/4motoForRent.webp";
import motoPhone from "../Portofoliu/Images/4MotoForRentPhone.webp";
import bidhouseDesktop from "../Portofoliu/Images/Bidhouse.webp";
import bidhousePhone from "../Portofoliu/Images/BidhousePhone.webp";
import scoalaDeSoferiDesktop from "../Portofoliu/Images/scoalaDeSoferi.webp";
import scoalaDeSoferiPhone from "../Portofoliu/Images/scoalaDeSoferiPhone.webp";
import lorenaLashStudioDesktop from "../Portofoliu/Images/LorenaLashStudio.webp";
import lorenaLashStudioPhone from "../Portofoliu/Images/LorenaLashStudioPhone.webp";
import scoalaPopteanDesktop from "../Portofoliu/Images/scoalaPoptean.png";
import scoalaPopteanPhone from "../Portofoliu/Images/scoalaPopteanPhone.png";

function Personal() {
  const [siteIndex, setSiteIndex] = useState(0);
  const [width, setWidth] = useState(0);
  
  const desktopImg = [
    bidhouseDesktop,
    scoalaPopteanDesktop,
    motoDesktop,
    lorenaLashStudioDesktop,
    scoalaDeSoferiDesktop,
  ];
  const phoneImg = [
    bidhousePhone,
    scoalaPopteanPhone,
    motoPhone,
    lorenaLashStudioPhone,
    scoalaDeSoferiPhone,
  ];
  const sitesLink = [
    "https://bidhousesite.netlify.app/",
    "https://scoala-automoto.ro/",
    "https://4motoforrent.ro/",
    "https://lorenalash.ro/",
    "https://spl-wheels.netlify.app/",
  ];
  const [projectDescriptionIndex, setProjectDescriptionIndex] = useState(0);
  useEffect(() => {
    const interval = setTimeout(() => {
      if (siteIndex < sitesLink.length - 1) setSiteIndex((prev) => (prev += 1));
      else setSiteIndex(0);
    }, 7000);

    return () => clearInterval(interval);
  }, [siteIndex]);
  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };
  
    window.addEventListener('resize', updateWidth);
    updateWidth(); // Initial setting
  
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // The width below which the mobile view should be rendered
  const breakpoint = 1024;
  return (
    <div className="relative h-full flex justify-center bg-[#1A1A1A] text-white">
    <div className="fixed flex items-center right-[2px] lg:right-[1rem] z-50 top-0 h-screen">
      <NavbarPersonal />
    </div>
    <div className="relative flex flex-col items-center w-full lg:w-[65rem] py-[5rem] ">
      <div className="relative flex flex-col w-[90%] lg:w-full">
        <div name="Contact" className="relative flex items-center justify-end ">
          <div className="absolute top-0 lg:top-[7rem] lg:left-[3rem] flex flex-col w-[90%] lg:w-[30rem]">
            <h2 className="  font-extrabold text-[32px] lg:text-[56px] leading-[1.8rem] lg:leading-[3.5rem]">
              POLEAC <br /> LIVIU-STEFAN
            </h2>
            <p className="mt-[.5rem] font-[700] text-[16px] lg:text-[24px]">
              FULL STACK <span className=" text-[#6C33FE]"> DEVELOPER </span>
            </p>
            <p>Hey, welcome to my personal website!</p>
            <p>You can check out my portofolio and my experience.</p>
            <p className="mt-4 text-[14px] ">Click on the next icons to get redirected </p>
            <div className="relative mt-1 flex text-[36px] gap-4 w-[15rem]">  <a className="cursor-pointer" href="https://www.linkedin.com/in/poleac-liviu-stefan" target="_blank"><AiOutlineLinkedin /> </a> <a className="cursor-pointer" href="https://github.com/PoleacLiviuStefan" target="_blank"><AiFillGithub /> </a>
            <a className="cursor-pointer rotate-90" href='tel:+40-753-616-640'><AiFillPhone /> </a>  
            <span className="absolute animate-[clickIconsTutorial_15s_ease-in-out_infinite] text-[28px] font-bold text-purple-400"><BsMouse /><span className="animate-[clickAppear_15s_ease-in-out_infinite]">Click</span></span>
             </div> 
          </div>
          
          <img
            src={meImg}
            className="mt-[15rem] lg:mt-0 w-[700px] shadow-xl"
          />
        </div>
      </div>
      <div className="relative mt-[4rem] flex flex-col items-center text-[20px] w-[1.2rem] h-[4rem] border-[1px] border-white rounded-[20px] py-[.2rem] opacity-[70%]">
        <span className="absolute top-[4.4rem] lg:animate-[mouseTouchDown_1.8s_linear_infinite]">
          {width < breakpoint ? <BsHandIndexThumb /> : <BsMouse />}
        </span>
      </div>

      <div
        name="About me"
        className="mt-[5rem] flex flex-col lg:flex-row items-center "
      >
        <div className="flex flex-col items-center lg:items-start w-[80%] lg:w-[30rem]">
          <span className="flex items-center border-[1px] border-gray-500 text-gray-400 px-[.5rem] rounded-[20px] font-[300] text-[14px] ">
            {" "}
            <span className="mr-2 ">
              <BsPerson />
            </span>
            About me
          </span>
          <h3 className="my-[1rem] text-[20px] lg:text-[32px] font-bold leading-[2rem] text-center">
            HOW I STARTED MY PATH IN WEB DEVELOPMENT
          </h3>
          <p className=" text-gray-400 leading-5 text-justify lg:text-left">
            More than 1 year ago I decided to start my journey in web
            development after some experience with C++. Starting with the
            basic languages like HTML, CSS and JAVASCRIPT, I decided to learn
            a framework, and the best option I found was React. I really
            enjoyed it and I coded every day, starting with basic projects
            like a calculator, movie Finder (with fetching data), then I was
            luckly enough to get project from small clients. Since then I
            learned a lot of stuff, including using NodeJS and Firebase for
            backend, Tailwind CSS, Stripe API, Framer Motion and many more
            React libraries
          </p>
          <Link
          activeClass="active"
          to="Contact"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          href="Contact"
          className='flex items-center mt-[1rem] text-[14px] border-[1px] border-white px-[2.5rem] py-[.7rem]  trasition ease-in-out hover:border-purple-400 hover:text-purple-400 duration-300'
        >
         
            CONTACT ME NOW{" "}
            <span className="ml-2 text-[20px]">
              <AiOutlineArrowRight />
            </span>
           
          </Link>
        </div>
        <div className="flex flex-col mt-[1rem] lg:mt-0 lg:ml-[4rem]">
          <h4 className="font-bold text-[24px]">Technologies used:</h4>
          <div className="mt-[2rem] grid grid-cols-3 gap-[15px]">
            <img src={html} className="w-[50px] " />
            <img src={css} className="w-[40px] " />
            <img src={js} className="w-[40px] " />

            <img src={tailwind} className="w-[40px] " />
            <img src={firebase} className="w-[40px] " />
            <img src={react} className="w-[40px]" />
            <img src={nodejs} className="w-[50px]" />
          </div>
        </div>
      </div>
      <div name="Portofolio" className="flex flex-col items-center py-[5rem]">
        <span className="text-[#6C33FE]">PORTOFOLIO</span>
        <h4 className="text-[20px] lg:text-[32px] font-bold">
          CHECK OUT MY PORTOFOLIO
        </h4>
        <div className=" mt-[5rem]">
          <MovingSlider objectOpacity="100%" rotated={false} />
          <MovingSlider objectOpacity="40%" rotated={true} />
        </div>
        <img src={portofolioPresentation} />
        <div className="relative mt-[2rem]  w-[350px] lg:w-[900px]">
          <a href={sitesLink[siteIndex]}>
            <img
              onLoad={() => {
                if (projectDescriptionIndex < sitesLink.length - 1)
                  setProjectDescriptionIndex(siteIndex);
                else setProjectDescriptionIndex(0);
              }}
              src={desktopImg[siteIndex]}
              alt="Prezentare site pe desktop"
              className="lg:left-0 left-[2.5rem] w-[280px] lg:w-[650px] xl:w-[700px] 2xl:w-[800px] cursor-pointer"
            />
          </a>
          <a href={sitesLink[siteIndex]}>
            {" "}
            <img
              src={phoneImg[siteIndex]}
              alt="Prezentare site pe mobil"
              className="absolute right-[.5rem] lg:right-[11rem] xl:right-[7rem] 2xl:right-0 top-[1rem] lg:top-[5rem] w-[60px] lg:w-[115px] xl:w-[130px] 2xl:w-[150px] cursor-pointer"
            />
          </a>
          <h3 className="mt-[2rem] text-[22px] font-extrabold text-center lg:text-[42px]">
            {" "}
            {(() => {
              switch (projectDescriptionIndex) {
                case 0:
                  return "Bidhouse";
                case 1:
                  return "Scoala Auto Moto Poptean";
                case 2:
                  return "4MOTOFORRENT";
                case 3:
                  return "Lorena Lash Studio";
                case 4:
                  return "Scoala De Soferi Diculescu Ciprian";
                default:
                  return "Unknown Site";
              }
            })()}
          </h3>
          <p className=" text-gray-400 leading-5 text-justify lg:text-left">
            {(() => {
              switch (projectDescriptionIndex) {
                case 0:
                  return "Bidhouse";
                case 1:
                  return "Scoala Auto Moto Poptean";
                case 2:
                  return "4MOTOFORRENT";
                case 3:
                  return "Lorena Lash Studio";
                case 4:
                  return "Scoala De Soferi Diculescu Ciprian";
                default:
                  return "Unknown Site";
              }
            })()}
          </p>
        </div>
        <div className="flex">
          <div
            onClick={() => setSiteIndex(0)}
            className={`relative ${
              siteIndex === 0 ? "border-white" : "border-gray-500"
            } mt-[4rem] mx-4 flex justify-center items-center w-[15px] lg:w-[30px] h-[15px]  lg:h-[30px] rounded-[50%] bg-transparent border-[2px] overflow-hidden cursor-pointer`}
          >
            <span
              className={`w-[70%] h-[70%] bg-white rounded-[50%] bg-opacity-[80%] ${
                siteIndex !== 0 && "hidden"
              } `}
            />
          </div>
          <div
            onClick={() => setSiteIndex(1)}
            className={`relative ${
              siteIndex === 1 ? "border-white" : "border-gray-500"
            } mt-[4rem] mx-4 flex justify-center items-center w-[15px] lg:w-[30px] h-[15px]  lg:h-[30px] rounded-[50%] bg-transparent border-[2px]  overflow-hidden cursor-pointer`}
          >
            <span
              className={`w-[70%] h-[70%] bg-white rounded-[50%] bg-opacity-[80%] ${
                siteIndex !== 1 && "hidden"
              }`}
            />
          </div>
          <div
            onClick={() => setSiteIndex(2)}
            className={`relative ${
              siteIndex === 2 ? "border-white" : "border-gray-500"
            } mt-[4rem] mx-4 flex justify-center items-center w-[15px] lg:w-[30px] h-[15px]  lg:h-[30px] rounded-[50%] bg-transparent border-[2px]  overflow-hidden cursor-pointer`}
          >
            <span
              className={`w-[70%] h-[70%] bg-white rounded-[50%] bg-opacity-[80%] ${
                siteIndex !== 2 && "hidden"
              }`}
            />
          </div>
          <div
            onClick={() => setSiteIndex(3)}
            className={`relative ${
              siteIndex === 3 ? "border-white" : "border-gray-500"
            } mt-[4rem] mx-4 flex justify-center items-center w-[15px] lg:w-[30px] h-[15px]  lg:h-[30px] rounded-[50%] bg-transparent border-[2px]  overflow-hidden cursor-pointer`}
          >
            <span
              className={`w-[70%] h-[70%] bg-white rounded-[50%] bg-opacity-[80%] ${
                siteIndex !== 3 && "hidden"
              }`}
            />
          </div>
          <div
            onClick={() => setSiteIndex(4)}
            className={`relative ${
              siteIndex === 4 ? "border-white" : "border-gray-500"
            } mt-[4rem] mx-4 flex justify-center items-center w-[15px] lg:w-[30px] h-[15px]  lg:h-[30px] rounded-[50%] bg-transparent border-[2px]  overflow-hidden cursor-pointer`}
          >
            <span
              className={`w-[70%] h-[70%] bg-white rounded-[50%] bg-opacity-[80%] ${
                siteIndex !== 4 && "hidden"
              }`}
            />
          </div>
        </div>
      </div>

      <div
        name="Studies"
        className="mt-[15rem] flex flex-col items-center w-[90%] "
      >
        <span className="text-[#6C33FE]">STUDIES</span>
        <h4 className="text-[20px] lg:text-[32px] font-bold text-center">
          ABOUT MY EDUCATION
        </h4>
        <div className="mt-[1rem] flex flex-col items-center  ">
          <img src={fmiLogo} className=" mr-2 w-[50px] lg:w-[70px] " />

          <p className="mt-2 text-center ">
            Currently studying Computer Science at University of Bucharest
            (2nd year for Bachelor's degree)
          </p>
        </div>
        <p className="">
          Finished highschool with the profile of mathematics and informatics.
        </p>
        <div className="flex flex-col items-center ">
          <p className="mt-[2rem] lg:mt-0">Foreign Languages Known:</p>
          <h4 className="mt-4 flex">
            English - <span className="font-bold">B2 Certificate</span>
          </h4>
          <div className="mt-1 flex w-[17rem] h-[2.8rem] border-[1px] border-purple-500 rounded-[8px] p-1">
            <div className="bg-purple-500 w-[2.2rem] h-[2.2rem] rounded-[50%] mx-1" />
            <div className="bg-purple-500 w-[2.2rem] h-[2.2rem] rounded-[50%] mx-1" />
            <div className="bg-purple-500 w-[2.2rem] h-[2.2rem] rounded-[50%] mx-1" />
            <div className="bg-purple-500 w-[2.2rem] h-[2.2rem] h-full rounded-[50%] mx-1" />
            <div className="bg-purple-500 w-[2.2rem] h-[2.2rem] rounded-[50%] mx-1" />
            <div className="bg-transparent border-[2px] border-purple-500 w-[2.2rem] h-[2.2rem] rounded-[50%] mx-1" />
          </div>
          <h4 className="mt-4 flex">French</h4>
          <div className="mt-1 flex w-[17rem] h-[2.8rem] border-[1px] border-purple-500 rounded-[8px] p-1">
            <div className="bg-purple-500 w-[2.2rem] h-[2.2rem] rounded-[50%] mx-1" />
            <div className="bg-purple-500 w-[2.2rem] h-[2.2rem] rounded-[50%] mx-1" />
            <div className="bg-transparent border-[2px] border-purple-500 w-[2.2rem] h-[2.2rem] rounded-[50%] mx-1" />
            <div className="bg-transparent border-[2px] border-purple-500 w-[2.2rem] h-[2.2rem] h-full rounded-[50%] mx-1" />
            <div className="bg-transparent border-[2px] border-purple-500 w-[2.2rem] h-[2.2rem] rounded-[50%] mx-1" />
            <div className="bg-transparent border-[2px] border-purple-500 w-[2.2rem] h-[2.2rem] rounded-[50%] mx-1" />
          </div>
        </div>
      </div>
   
    </div>
  </div>
  )
}

export default Personal
