import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import bgim from "../assets/bgim.JPG";

const Contact = () => {
  useEffect (() => {
    Aos.init();
  },[]
  )
  return (
   <div className=' pt-28 px-5 sm:px-1 justify-between items-center w-full max-h-full md:max-w-[1240px] mx-auto mb-10' >
          
          <div className=''>
          <div className=''>
            <h1 className='pb-5 justify-center items-center text-center text-4xl font-semibold md:text-7x sm:font-extrabold'>
                    Get In Touch
            </h1>
            
          </div>

          <article>
            <section >
            <h2 className='text-center sm:text-xl md:text-3xl ' >If you have a question, comment or idea, please fill in the form below and we will get back to you as soon as posssible.</h2>
            <form className=' shadow-2xl bg-white rounded-lg sm:px-48 p-10 border-2 mt-10 pt-16 mx-10' >
                       <div >
                            <div className=' justify-between sm:flex items-center gap-5 pb-5'>
                                <p className='text-lg font-medium'>Name:</p>
                                <input type="text" name="" id="" placeholder=' ' className='h-10 rounded-md w-full border-b-2 border-black '  />
                            </div>
                            <div className=' justify-between sm:flex items-center gap-5 pb-5 '>
                                <p className='text-lg font-medium'>Email:</p>
                                <input type="email" name="Email" id="" placeholder=' ' className='h-10 rounded-md w-full border-b-2 border-black'/>
                            </div>
                            <div className='py-5 sm:flex  gap-5 text-lg font-medium'>
                                <p>Your Question/Comment</p>
                                <input type="text" name="" id="" placeholder=' ' className='h-40 rounded-md  border-2 border-black  w-full' />
                            </div>
                       </div>

                        <div className='  border-2 max-w-fit bg-blue-500 w-48 rounded-xl font-semibold  p-3 '>
                            <button type="submit" className=''>Send Message</button>
                        </div>
                    </form>
            </section>
          </article>
          </div>
    </div>
  )  
}

export default Contact