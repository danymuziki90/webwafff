/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import {menu, close, logo} from '../assets';


function Navbar () {
      const [toggle, setToggle ] =useState(true );
	  const handleClick = ()=>setToggle(!toggle)
      return (
    <div className='w-screen h-[80px]  bg-white fixed drop-shadow-lg'>
      <nav className='flex px-8  justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>
          <div > 
              <a href="#" className='cursor-pointer font-4xl  '>FWAFF </a> 
          </div>
          <div >
            <div className='flex items-center '>
                <ul className='hidden md:flex gap-5'>
                      <li className=' ps-10 hover:animate-bounce translate-x-5 p-2 hover:text-red-950 hover:text-2xl' ><a href="Home "  >Home</a></li>
                      <li className=' ps-10 hover:animate-bounce translate-x-5 p-2 hover:text-red-950 hover:text-2xl'><a href="About" >About</a></li>
                      <li className=' ps-10 hover:animate-bounce translate-x-5 p-2 hover:text-red-950 hover:text-2xl'><a href="New" >News</a></li>
                      <li className=' ps-10 hover:animate-bounce translate-x-5 p-2 hover:text-red-950 hover:text-2xl'><a href="Contact" >Contact</a></li> 
                      <li className=' ps-10 hover:animate-bounce translate-x-5 p-2  hover:text-red-950 hover:text-2xl'><a href="Login" >Login</a></li>

                </ul>
            </div>

            <div className=' md:hidden cursor-pointer ' onClick={handleClick }>
                <img src={!toggle?close:menu} alt="menu" className='w-[28px] h-[28px] object-contain m-5'/>
            </div>

          </div>
      </nav>
      <div className='transition'>
        <ul className={!toggle? 'bg-white w-full md:hidden' :'hidden  '} >
                      <li className=' ps-10 hover:animate-bounce translate-x-5 p-2  hover:text-red-950 hover:text-2xl' ><a href="Home "  >Home</a></li>
                      <li className=' ps-10 hover:animate-bounce translate-x-5 p-2 hover:text-red-950 hover:text-2xl'><a href="About" >About</a></li>
                      <li className=' ps-10 hover:animate-bounce translate-x-5 p-2 hover:text-red-950 hover:text-2xl'><a href="New" >New</a></li>
                      <li className=' ps-10 hover:animate-bounce translate-x-5 p-2 hover:text-red-950 hover:text-2xl'><a href="Contact" >Contact</a></li> 
                      <li className=' ps-10 hover:animate-bounce translate-x-5 p-2  hover:text-red-950 hover:text-2xl'><a href="Login" >Login</a></li>
        </ul> 
      </div>
          
    </div>
  )
}

export default Navbar