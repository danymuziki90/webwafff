import React from 'react';
import CSS from '../App.css'

const Contact = () => {
  return (
    <main className='bg- pt-24 px-5 sm:px-1 justify-between items-center w-full max-h-full md:max-w-[1240px] mx-auto '>
          <h1 className='justify-center items-center text-center text-4xl md:text-7xl'>
            Get In Touch
          </h1>

          <div className='flex'>
          <article className='bg-white w-[50%]'>
          <div>
             <p>CALL US</p>
            <p>+123-345-678</p>
          </div>
          <div>
            <p>LOCATION</p>
            <p></p>
          </div>
          <div>
            <p>GMAIL</p>
            <p>fwaff@gmail.com</p>
          </div>
           
          </article>

          <article  className='w-[50%]'>
        <section  className='pt-24 px-5 sm:px-1 justify-between items-center w-full max-h-full md:max-w-[1240px] mx-auto '  >
                    <form className='rounded-lg  md:px-32 p-10' >
                       <div className=''>
                            <div className=' justify-between py-5 flex  '>
                                <input type="text" name="" id="" placeholder=' Your Name' className='h-10 rounded-md w-6/12 bg-blue-200'  />
                                <input type="email" name="Email" id="" placeholder=' Your Email' className='h-10 rounded-md w-5/12 bg-blue-200'/>          
                            </div>
                            <div>
                                <input type="text" name="" id="" placeholder=' Subject:' className='h-20 rounded-md  bg-blue-200 w-full' />
                            </div>
                            <div className='py-5 '>
                                <input type="text" name="" id="" placeholder=' Message:' className='h-40 rounded-md bg-blue-200 w-full' />
                            </div>
                       </div>

                        <div className=''>
                            <button type="submit" className=' border-2 border-gray-900 hover:bg-[#7aabe2] w-48 rounded-lg font-semibold  p-3'>Send Message</button>
                        </div>
                    </form>
                    
                </section>
        </article>
          </div>
        
    </main>
  )
}

export default Contact