/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


const Navbar = () => {
  const [nav, setNav] = useState(true)

  const handleNav = () =>{
    setNav(!nav);
  };
  return (
    
    <div className='  fixed border-b border-[#7e7d7d73] bg-white flex justify-between items-center  text-black   md:flex gap-5   w-full m-auto  '>
          <div className=' h-24 bg-white flex justify-between items-center  mx-auto text-black   md:flex gap-5   w-full md:max-w-[1240px] m-auto  '>
            <h1 className='  text-3xl font-bold text-[#0b0b0c] ml-8'>WAFF </h1>
            <ul className='hidden md:flex gap-10 font-semibold text-xl '>
                  <a href="Home"><li className='p-4 '>Home</li></a>
                  <a href="about"><li className='p-4 '>About </li></a>
                  <a href="new"><li className='p-4 '>New</li></a>
                  <a href="contact"><li className='p-4 '>Contact</li></a>
            </ul>
          </div>
          

          <div onClick={handleNav} className='block md:hidden pr-5  '>
          {!nav ? <AiOutlineClose size={24}  /> :<AiOutlineMenu size={24} />}
            
          </div>

          <div className= {!nav ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r p-4 border-r-gray-900 bg-[#000300] ease-in-out duration-700' : 'fixed left-[-100%] '}>
          <h1 className='  text-3xl font-bold text-[#6cb1df] ml-8'>WAFF </h1>
            <ul className=' uppercase text-white md:hidden'>
                  <a href="Home"><li className='p-4 border-b border-gray-500'>Home</li></a>
                  <a href="about"><li className='p-4 border-b border-gray-500'>About </li></a>
                  <a href="new"><li className='p-4 border-b border-gray-500'>New</li></a>
                  <a href="contact"><li className='p-4 '>Contact</li></a>
              </ul>
          </div>
    </div>
   
  )
}

export default Navbar;
