import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {BsPerson,BsBriefcase} from 'react-icons/bs'
import {HiOutlineClipboardList} from 'react-icons/hi'
import {TiContacts} from 'react-icons/ti'
import {SlGraduation} from 'react-icons/sl'
import { Link, animateScroll as scroll } from "react-scroll";

const NavbarPersonal = () => {
  return (
    <div className='relative flex flex-col items-center justify-between w-[2.2rem] lg:w-[3rem] h-[13rem] lg:h-[18rem] border-[2px] border-purple-700 rounded-[20px] py-[1rem] text-[16px] lg:text-[24px] text-gray-300 backdrop-blur-sm'>
                <Link
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            href="Despre Noi"
            className='py-[.5rem]'
          ><span><TiContacts /></span></Link>
               <Link
            activeClass="active"
            to="About me"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
            href="Despre Noi"
            className='py-[.5rem]'
          ><span><BsPerson /></span></Link>
               <Link
            activeClass="active"
            to="Portofolio"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            href="Despre Noi"
            className='py-[.5rem]'
          ><span><BsBriefcase /></span></Link>
               <Link
            activeClass="active"
            to="Studies"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            href="Despre Noi"
            className='py-[.5rem]'
          ><span><SlGraduation/></span></Link>
       
    </div>
  )
}

export default NavbarPersonal