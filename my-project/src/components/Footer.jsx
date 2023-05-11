/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import {FaBeer} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='bg-black pb-20 pt-8' text-white >
        <div className="px-8 md:flex gap-5 justify-between  w-full h-full md:max-w-[1240px] m-auto " >
        <div className='p-1'><h2 className=' text-[#05cad8d3]  font- text-justify text-2xl '>Who we are</h2>
            <p className=' text-xs  text-white '>We are the proof living of our community  and young motivated <br />individuals that want to see our community successes.  

            </p>
        </div>
        <div  className='p-1'><h2 className=' text-[#05cad8d3]  font- text-justify text-2xl'>Foundation</h2>
          <div className=' text-white text-xs'>
              <div><a href="about">About Us</a></div>
              <div><a href="new">News</a></div>
              <div><a href="contact">Contact</a></div>
            </div> 
        </div>
        <div  className='p-1'><h2 className=' text-[#05cad8d3]  font- text-justify text-2xl'>Find us on</h2>
          <div className=' text-white text-xs'>
              <p><a href="tel:+">+1234567890</a></p>
              <p><a href="mailto:"> fwaff@gmail.com</a></p> 
          </div>
        </div>

        <div  className='p-1 pb-7'><h2 className=' text-[#05cad8d3]  font- text-justify text-2xl'>Social midia</h2>
          <div className='text-white text-xs'>
              <p><FaBeer/></p>
              <p><a href="mailto:"> fwaff@gmail.com</a></p> 
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default Footer