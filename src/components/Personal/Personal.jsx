import React, { useState, useEffect, useMemo } from "react";
import meImg from "./Images/Me.png";
import { BsMouse, BsPerson, BsHandIndexThumb } from "react-icons/bs";
import { AiOutlineLinkedin, AiFillGithub, AiFillPhone } from "react-icons/ai";
import css from "./Images/css.svg";
import html from "./Images/html.svg";
import js from "./Images/js.svg";
import nodejs from "./Images/nodejs.png";
import expressjs from "./Images/expressjs.webp";
import firebase from "./Images/firebase.svg";
import react from "./Images/React-icon.svg";
import nextjs from "./Images/nextjs.svg";
import clerk from "./Images/clerk.png";
import tailwind from "./Images/tailwind.svg";
import sanity from "./Images/sanity.png";
import stripe from "./Images/stripe.svg";
import redux from "./Images/redux.svg";
import mongodb from "./Images/mongodb.svg";
import github from "./Images/github-mark-white.svg";
import typescript from "./Images/typescript.svg";
import java from "./Images/java.svg";
import csharp from "./Images/csharp.svg";
import cpp from "./Images/cpp.svg";
import python from "./Images/python.svg";
import NavbarPersonal from "../Navbar/NavbarPersonal";
import { AiOutlineArrowRight } from "react-icons/ai";
import MovingSlider from "../MovingSlider/MovingSlider";
import fmiLogo from "./Images/FMILogo.png";
import portofolioPresentation from "./Images/generalPresentation.webp";
import { Link, animateScroll as scroll } from "react-scroll";
import motoDesktop from "../Portofoliu/Images/4motoForRent.webp";
import motoPhone from "../Portofoliu/Images/4MotoForRentPhone.webp";
import bidhouseDesktop from "../Portofoliu/Images/Bidhouse.webp";
import bidhousePhone from "../Portofoliu/Images/BidhousePhone.webp";
import splWheelsDesktop from "../Portofoliu/Images/spl-wheels.webp";
import splWheelsPhone from "../Portofoliu/Images/spl-mobile.webp";
import lorenaLashStudioDesktop from "../Portofoliu/Images/LorenaLashStore.png";
import lorenaLashStudioPhone from "../Portofoliu/Images/LorenaLashStorePhone.png";
import scoalaPopteanDesktop from "../Portofoliu/Images/scoalaPoptean.png";
import scoalaPopteanPhone from "../Portofoliu/Images/scoalaPopteanPhone.png";
import socialPlatformDesktop from "../Portofoliu/Images/social-platform-desktop.webp";
import socialPlatformPhone from "../Portofoliu/Images/social-platform-mobile.webp";
import { IoIosDocument } from "react-icons/io";

function Personal() {
  const [siteIndex, setSiteIndex] = useState(0);
  const [width, setWidth] = useState(0);

  const desktopImg = [
    bidhouseDesktop,
    lorenaLashStudioDesktop,
    scoalaPopteanDesktop,
    motoDesktop,
    splWheelsDesktop,
    socialPlatformDesktop,
  ];
  const phoneImg = [
    bidhousePhone,
    lorenaLashStudioPhone,
    scoalaPopteanPhone,
    motoPhone,
    splWheelsPhone,
    socialPlatformPhone,
  ];
  const sitesLink = [
    "https://bidhousesite.netlify.app/",
    "https://lorenalash.ro/",
    "https://scoala-automoto.ro/",
    "https://4motoforrent.netlify.app/",
    "https://spl-wheels.netlify.app/",
    "https://social.waygital.ro/explore/",
  ];
  const githubSitesLinks = [
    "https://github.com/PoleacLiviuStefan/bidhousesite",
    "https://github.com/PoleacLiviuStefan/lorenaLash",
    "https://github.com/PoleacLiviuStefan/Driving-school-with-quizz",
    "https://github.com/PoleacLiviuStefan/motoForRent",
    "https://github.com/PoleacLiviuStefan/wheelsshop",
  ];
  const descriptions = [
    "An NFT project single page presentation, with active forms and good looking animations and responsive design.",
    "Ecommerce website integrated with a payment processosr (Stripe), Clerk for authentication, Sanity for data management and an attractive UI fitting the idea of minimalistic and intuitive experience for the user.",
    "Driving school, a complex project with an integrated theoretic test system with a dashboard for admins, where they can add new user and validate the accounts by a given code. Every normal user can make test which will be seen by the admin, also containing informations by the passed test, the answer which where correct or wrong, for both car and motorcycle categories",
    "Motorcycle rental website, a simple landing page",
    "Wheels shop with a shopping cart, with a great UI/UX especaially on the inspecting the wheels options",
    "Simple social app with email/google/reddit/X registration system. This platform has: notification system, upload images and videos endpoint, reset email, recover password, repost posts, add posts to saved/liked sections,searchbar, download media, make account private, disable downloads and disable comments, etc.",
  ];

  const technologiesUsed = [
    <>
      <img src={react} className="w-[70px] h-[70px]" />
      <img src={tailwind} className="w-[70px] h-[70px]" />
    </>,

    <>
      <img src={nextjs} className="w-[60px] h-auto  filter brightness-0 saturate-100 invert" />
      <img src={tailwind} className="w-[70px] h-[70px]" />
      <img src={stripe} className="w-[120px] h-[70px]" />
      <img src={sanity} className="w-[60px] h-[60px]   " />
      <img src={clerk} className="w-[120px] h-auto   filter brightness-0 saturate-100 invert" />
    </>,
    <>
      <img src={react} className="w-[70px] h-[70px]" />
      <img src={tailwind} className="w-[70px] h-[70px]" />
    </>,
    <>
    <img src={react} className="w-[70px] h-[70px]" />
    <img src={tailwind} className="w-[70px] h-[70px]" />
    <img src={firebase} className="w-[70px] h-[70px]" />
    </>,
    <>
      <img src={react} className="w-[70px] h-[70px]" />
      <img src={tailwind} className="w-[70px] h-[70px]" />
      <img src={redux} className="w-[60px] h-[60px]" />
    </>,
    <>
      <img src={react} className="w-[70px] h-[70px]" />
      <img src={tailwind} className="w-[70px] h-[70px]" />
      <img src={nodejs} className="w-[80px] h-[80px]" />
      <img src={mongodb} className="w-[70px] h-[70px]" />
    </>,
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

    window.addEventListener("resize", updateWidth);
    updateWidth(); // Initial setting

    return () => window.removeEventListener("resize", updateWidth);
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
          <div
            name="Contact"
            className="relative flex items-center justify-end "
          >
            <div className="absolute top-0 lg:top-[7rem] lg:left-[3rem] flex flex-col w-[90%] lg:w-[30rem]">
              <h2 className="  font-extrabold text-[32px] lg:text-[56px] leading-[1.8rem] lg:leading-[3.5rem]">
                POLEAC <br /> LIVIU-STEFAN
              </h2>
              <p className="mt-[.5rem] font-[700] text-[16px] lg:text-[24px]">
                FULL STACK <span className=" text-[#6C33FE]"> DEVELOPER </span>
              </p>
              <p>Hey, welcome to my personal website!</p>
              <p>You can check out my portofolio and my experience.</p>
              <p className="mt-4 text-[14px] ">
                Click on the next icons to get redirected{" "}
              </p>
              <div className="relative mt-1 flex text-[36px] gap-4 w-[15rem]">
                {" "}
                <a
                  className="cursor-pointer"
                  href="https://www.linkedin.com/in/poleac-liviu-stefan"
                  target="_blank"
                >
                  <AiOutlineLinkedin />{" "}
                </a>{" "}
                <a
                  className="cursor-pointer"
                  href="https://github.com/PoleacLiviuStefan"
                  target="_blank"
                >
                  <AiFillGithub />{" "}
                </a>
                <a
                  className="cursor-pointer rotate-90"
                  href="tel:+40-753-616-640"
                >
                  <AiFillPhone />{" "}
                </a>
                <a
                  href="/CV.jpg"
                  target="_blank"
                  className="flex items-center "
                >
                  <IoIosDocument /> <span className="text-[13px]">CV</span>
                </a>
              </div>
            </div>

            <img src={meImg} className="mt-[15rem] lg:mt-0 w-[700px] " />
          </div>
        </div>
        <div className="relative mt-[4rem] flex flex-col items-center text-[20px] w-[1.2rem] h-[4rem] border-[1px] border-white rounded-[20px] py-[.2rem] opacity-[70%]">
          <span className="absolute top-[4.4rem] animate-[TouchUp_1.8s_linear_infinite]  lg:animate-[mouseTouchDown_1.8s_linear_infinite]">
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
              Over three years ago, I embarked on my web development journey
              after gaining initial experience with C++. I started by mastering
              foundational languages such as HTML, CSS, and JavaScript before
              choosing to deepen my expertise with a modern framework—React
              proved to be the ideal choice. My passion for coding led me to
              work on daily projects, beginning with simple applications like a
              calculator and a movie finder that incorporated data fetching.
              Soon after, I had the opportunity to undertake projects for small
              clients. Later, I completed a nine-month internship where I
              refined my collaborative skills by working with a team that
              utilized the Kanban methodology. In the first three months of my
              internship, I developed a full-stack application using Next.js,
              PostgreSQL, and Prisma. Following that, I focused on enhancing the
              internal efficiency of the company by developing features for the
              Open-WebUI open-source project, all while expanding my technical
              repertoire by learning FastAPI and Svelte.
            </p>
            <Link
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              href="Contact"
              className="flex items-center mt-[1rem] text-[14px] border-[1px] border-white px-[2.5rem] py-[.7rem]  trasition ease-in-out hover:border-purple-400 hover:text-purple-400 duration-300"
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
              <img src={typescript} className="w-[50px]" />
              <img src={tailwind} className="w-[40px] " />
              <img src={firebase} className="w-[40px] " />
              <img src={react} className="w-[40px]" />
              <img src={nextjs} className="w-[40px]  filter brightness-0 saturate-100 invert" />
              <img src={nodejs} className="w-[50px]" />
              <img src={mongodb} className="w-[50px]" />
              <img src={cpp} className="w-[50px]" />
              <img src={csharp} className="w-[50px]" />
              <img src={java} className="w-[40px]" />
              <img src={python} className="w-[40px]" />
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
          <img
            className="ml-[5rem] lg:ml-[12rem] mt-[5rem] w-[70%] lg:w-[80%] h-[100%]"
            src={portofolioPresentation}
          />
          <div className="flex flex-col items-center relative mt-[2rem]  w-[350px] lg:w-[900px]">
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
                className="absolute right-[-.5rem] lg:right-[11rem] xl:right-[7rem] 2xl:right-0 top-[1rem] lg:top-[5rem] w-[60px] lg:w-[115px] xl:w-[130px] 2xl:w-[150px] cursor-pointer"
              />
            </a>
            <h3 className="mt-[2rem] text-[22px] font-extrabold text-center lg:text-[42px]">
              {" "}
              {(() => {
                switch (projectDescriptionIndex) {
                  case 0:
                    return "Bidhouse";
                  case 1:
                    return "Lorena Lash Studio";
                  case 2:
                    return "4MOTOFORRENT";
                  case 3:
                    return "Scoala Auto Moto Poptean";
                  case 4:
                    return "SPL Wheels";
                  case 5:
                    return "Social Media Platform";
                  default:
                    return "Unknown Site";
                }
              })()}
            </h3>
            <a
              href={(() => {
                switch (projectDescriptionIndex) {
                  case 0:
                    return githubSitesLinks[0];
                  case 1:
                    return githubSitesLinks[1];
                  case 2:
                    return githubSitesLinks[2];
                  case 3:
                    return githubSitesLinks[3];
                  case 4:
                    return githubSitesLinks[4];
                  case 5:
                    return githubSitesLinks[5];
                  default:
                    return "Unknown Site";
                }
              })()}
              target="_blank"
              className="cursor-pointer"
            >
              <img src={github} className="w-[70px] h-[70px] my-[15px]" />
            </a>
            <p className=" text-gray-400 leading-5 text-justify lg:text-left">
              {(() => {
                switch (projectDescriptionIndex) {
                  case 0:
                    return descriptions[0];
                  case 1:
                    return descriptions[1];
                  case 2:
                    return descriptions[2];
                  case 3:
                    return descriptions[3];
                  case 4:
                    return descriptions[4];
                  case 5:
                    return descriptions[5];
                  default:
                    return "Unknown Site";
                }
              })()}
            </p>
            <h3 className="font-extrabold text-center lg:text-[28px] mt-4">
              Technologies Used
            </h3>
            <div className="flex items-center justify-center gap-4 w-full">
              {(() => {
                switch (projectDescriptionIndex) {
                  case 0:
                    return technologiesUsed[0];
                  case 1:
                    return technologiesUsed[1];
                  case 2:
                    return technologiesUsed[2];
                  case 3:
                    return technologiesUsed[3];
                  case 4:
                    return technologiesUsed[4];
                  case 5:
                    return technologiesUsed[5];
                  default:
                    return "Unknown Site";
                }
              })()}
            </div>
          </div>
          <div className="flex">
            {sitesLink.map((site, i) => (
              <div
                key={i}
                onClick={() => setSiteIndex(i)}
                className={`relative ${
                  siteIndex === i ? "border-white" : "border-gray-500"
                } mt-[4rem] mx-4 flex justify-center items-center w-[15px] lg:w-[30px] h-[15px]  lg:h-[30px] rounded-[50%] bg-transparent border-[2px] overflow-hidden cursor-pointer`}
              >
                <span
                  className={`w-[70%] h-[70%] bg-white rounded-[50%] bg-opacity-[80%] ${
                    siteIndex !== i && "hidden"
                  }`}
                />
              </div>
            ))}
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
              (Finish on July 2025)
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
  );
}

export default Personal;
