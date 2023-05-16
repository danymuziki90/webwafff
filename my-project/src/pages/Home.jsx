import React from 'react';
import bgimage from "../assets/GQLR6101.JPG";
import opportinuty from "../assets/opportinuty.JPG";
import mision from "../assets/mission.JPG";
import concept from "../assets/concept.JPG"
import Contact from './Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Home = () => {
    useEffect (() => {
        Aos.init();
      },[]
      )
  return (
    <main className='bg-slate-100 '>
        <section className='pt-24 md:pt-2 ' data-aos ="fade-up">
                <img src={bgimage} alt= "bgimage" className='w-full h-full md:px-40'/>
        </section>
        <article className="px-4  justify-between items-center w-full h-full md:max-w-[1240px] m-auto " data-aos ="fade-up" >
        <section className=''> 

            <section className='md:flex gap-20 text-justify ' data-aos ="fade-up">
                <div>
                    <h3 className='text-blue-400 md:text-3xl text-2xl font-bold  py-4 text-justify' data-aos ="fade-up">Why Fort Worth Africa Funeral Foundation? 
                    </h3>
                </div>
                <div className='' data-aos ="fade-up">
                    <p className='font-sans font-normal py-1' data-aos ="fade-up">
                    Our mission is to make sure that opportunity to be part of our community should rip benefit that comes with it. Such as personal grow, be educated in financial literacy, etc.
                    <br /><button className='bg-blue-500 w-48 rounded-sm font-semibold  p-4  mt-10 hover:bg-blue-600 text-white text-2xl px-2 ' data-aos ="fade-up">READ MORE</button> 
                    </p>
                </div>
            </section>


            <section className='md:flex  gap-5 py-5 max-w-[1240px] mx-auto md:grip-cols-3 '  >
                    <article className='hover:scale-105 duration-300 my-20  text-justify bg-slate-200 rounded-xl p-8  ' data-aos ="fadde-up">
                            <img src={concept} alt=""  className='w-[300px] h-[200px] rounded-2xl mx-auto mt-[-6rem]' data-aos ="fade-up"/>
                            <h4 className=' font-bold text-2xl text-center'>Concept</h4>
                            <p>
                            Our mission is to make sure that everyone that get the opportunity to be part of our community should rip the benefit that comes with it. Such as personal grow, be educated in financial literacy, etc.  
                            </p>
                            <button className='border-2  border-black hover:border-none  hover:bg-blue-500 rounded-md p-1 uppercase text-sm'>Loarn more</button>
                        </article>

                        <article className='hover:scale-105 duration-300 my-20  text-justify bg-slate-200 rounded-xl p-8 ' data-aos ="fade-up">
                                    <img src={mision} alt=""  className='w-[300px] h-[200px] rounded-2xl mx-auto mt-[-6rem]' data-aos ="fade-up" />
                                    <h3 className='font-bold text-2xl text-center'>FWAFF’s long term mission</h3>
                                    <p >
                                    We have seen how people come to America and loose they are way in the process. Which I myself is one of them. And that is one of the thing that we will mostly focus about
                                    </p> <button className='border-2  border-black hover:border-none  hover:bg-blue-500 rounded-md p-1 uppercase text-sm'>Loarn more</button>
                        </article>
                

                        <article className='hover:scale-105 duration-300 my-20 text-justify bg-slate-200 rounded-xl p-8 ' data-aos ="fade-up">
                            <img src={opportinuty} alt=""   className='w-[300px] h-[200px] rounded-2xl mx-auto mt-[-6rem]' data-aos ="fade-up"/>
                            <h3 className='font-bold text-2xl text-center'>Opportunities</h3>
                            <p>
                                The problem that we face now in our community is luck of information and guidance and that’s what FWAFF is bring to our community. 
                            </p>
                            <button className='border-2  border-black hover:border-none  hover:bg-blue-500 rounded-md p-1 uppercase text-sm'>Loarn more</button>
                        </article>
            </section>

            <section  className=' pb-10'  data-aos ="fade-up">
                    <h3 className='mb-10 -mt-20 text-center text-3xl font-semibold md:text-5xl' data-aos ="fade-up" >Contact With Us</h3>
                    <form className='bg-white rounded-lg  md:px-32 p-10' data-aos ="fade-up">
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
                            <button type="submit" className='bg-blue-500 w-48 rounded-sm font-semibold  p-3'>Send Message</button>
                        </div>
                    </form>
                    <div></div>
                </section>
        </section>
    </article>
    </main>
  )
}

export default Home