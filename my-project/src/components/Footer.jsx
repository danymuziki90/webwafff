/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import {FaBeer, Iconfb} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='bg-slate-800 '>
        <div className="px-8   md:flex gap-5 justify-between  w-full h-full md:max-w-[1240px] m-auto " >
        <div className='p-1'><h2 className=' text-blue-900  font- text-justify text-2xl '>Who we are</h2>
            <p className=' text-xs  text-white '>We are the proof living of our community  and young motivated <br />individuals that want to see our community successes.  

            </p>
        </div>
        <div  className='p-1'><h2 className=' text-blue-900  font- text-justify text-2xl'>Foundation</h2>
          <div className=' text-white text-xs'>
              <div><a href="About">About Us</a></div>
              <div><a href="New">News</a></div>
              <div><a href="Contact">Contact</a></div>
            </div> 
        </div>
        <div  className='p-1'><h2 className=' text-blue-900  font- text-justify text-2xl'>Find us on</h2>
          <div className=' text-white text-xs'>
              <p><a href="tel:+">+1234567890</a></p>
              <p><a href="mailto:"> fwaff@gmail.com</a></p> 
          </div>
        </div>

        <div  className='p-1 pb-7'><h2 className=' text-blue-900  font- text-justify text-2xl'>Social midia</h2>
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