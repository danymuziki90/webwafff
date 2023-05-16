/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { FaCopyright, FaFacebookSquare, FaInstagram,  FaPhoneAlt, FaTwitter} from "react-icons/fa"
import {CgMail} from "react-icons/cg";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Footer = () => {
  useEffect (() => {
    Aos.init();
  }, []
  )

  return (
    <div className='bg-[#030e11] pb-8 pt-8 text-white' >
        <div className="px-8 md:flex gap-5 justify-between  w-full h-full md:max-w-[1240px] m-auto " >
        <div className='p-1' data-aos ="fade-up"><h2 className='mb-3 text-[#05cad8d3]  font- text-justify text-2xl ' >Who we are</h2>
            <p className=' text-2xs font-thin  text-white '>We are the proof living of our community and <br /> young motivated individuals that want <br /> to see our community successes.  
            </p>
        </div>
        <div  className='p-1 md:mr-8' data-aos ="fade-up"><h2 className='mb-4 text-[#05cad8d3]  font- text-justify text-2xl' >Links</h2>
          <div className='font-thin text-white text-2xs'>
              <div><a href="about">About</a></div>
              <div><a href="new">News</a></div>
              <div><a href="contact">Contact</a></div>
            </div> 
        </div>
        <div  className='p-1 md:ml-8' data-aos ="fade-up"><h2 className='mb-4 text-[#05cad8d3]  font- text-justify text-2xl' >Find us on</h2>
          <div className='font-thin text-white text-2xs mb-5'>
              <p className='flex items-center w-96 gap-3 mb-3' >
              <FaPhoneAlt size={12}/>
              <a href="tel:+">+1234567890</a>
              </p>
              <p className='flex items-center w-96 gap-3' >
              <CgMail size={19}/>
              <a href="mailto:"> fwaff@gmail.com</a>
              </p> 
          </div>
        </div>

        <div  className=' pb-7' data-aos ="fade-up">
        <h2 className=' text-[#05cad8d3]  font- text-justify text-2xl'>Social media</h2>
          <div className='flex  gap-5 pt-4'>
              <FaFacebookSquare size={40} color='#2563eb'/>
              <FaInstagram size={40} color='#be123c'/>
              <FaTwitter  size={40} color='1d4ed8'/>
            </div>
        </div>
        
      </div>
      <div className=' text-white text-center pt-6 flex justify-center items-center gap-2'>
        <FaCopyright/> 
          <p>
           Copyright 2023 by The FWAFF
          </p>
        </div>
      
    </div>
  )
}

export default Footer