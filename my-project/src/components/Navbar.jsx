/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';


const Navbar = () => {
  const [nav, setNav] = useState(true)

  const handleNav = () =>{
    setNav(!nav);
  };
  return (
    
    <header className='  fixed border-b border-[#7e7d7d11]  flex justify-between items-center bg-white  text-[#000000]  md:flex gap-5 w-full m-auto  '>
          <nav className=' h-24 bg-white flex justify-between items-center  mx-auto   md:flex gap-5   w-full md:max-w-[1240px] m-auto  '>
            <a href='Home' className='  text-3xl font-bold text-[#000000] ml-5'>FWAFF</a>
            <ul className='hidden md:flex gap-10 font-semibold text-xl '>
                  <a href="Home"><li className='p-4 hover:underline'>Home</li></a>
                  <a href="about"><li className='p-4 hover:underline '>About </li></a>
                  <a href="news"><li className='p-4 hover:underline'>News</li></a>
                  <a href="contact"><li className='p-4 hover:underline'>Contact</li></a>
            </ul>
            
          </nav>
          

          <div onClick={handleNav} className='block md:hidden  px-16 '>
          {!nav ? <AiOutlineClose size={30} /> :<AiOutlineMenu size={30}  />}
          </div>
          

          <nav className= {!nav ? 'fixed md:hidden  left-0 top-0 w-[60%] h-full border-r pt-16 border-r-gray-900 bg-black ease-in-out duration-700' : 'fixed left-[-100%] '}>
          <a href='Home' className='  text-3xl font-bold text-[#ffffff] ml-8'>FWAFF</a>
            <ul className=' uppercase text-white md:hidden p-10'>
                  <a href="Home"><li className='p-4 border-b border-gray-500 hover:bg-red-600 '>Home</li></a>
                  <a href="about"><li className='p-4 border-b border-gray-500 hover:bg-red-600'>About </li></a>
                  <a href="news"><li className='p-4 border-b border-gray-500 hover:bg-red-600'>News</li></a>
                  <a href="contact"><li className='p-4 hover:bg-red-600'>Contact</li></a>
              </ul>
          </nav>
    </header>
   
  )
}

export default Navbar;
