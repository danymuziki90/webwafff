import React, { useEffect } from 'react';
import together from "../assets/together.JPG";
import ahadi from "../assets/ahadi.JPG";
import espoir from "../assets/espoir.JPG";
import esther from "../assets/esther.JPG";
import petro from "../assets/Petro.JPG";
import serge from "../assets/serge.JPG";
import suzy from "../assets/suzy.JPG";
import Aos from 'aos';
import 'aos/dist/aos.css'

const About = () => {
  useEffect (() => {
    Aos.init();
  },[]
  )
  return (

    <main  className='pt-24 px-5 sm:px-1 justify-between items-center w-full max-h-full md:max-w-[1240px] mx-auto ' data-AOS="fade-up" >
            <img src={together} alt= "bgimage" className='md:px-60'   />
      <section className=' text-justify bg-slate-50 px-5 md:sm:px-40 max-h-max ' data-aos="fade-up" >
        <h1 className='font-medium text-blue-600  text-3xl text-center py-2' data-aos="fade-up" >Fort Worth Africa Funeral Foundation</h1>
        <p className='mb-5' data-aos="fade-up" > Our mission here is to provide guidance to our community, Support in any situation, Personal growth, educational etc... Which is crucial to adapt in this country. And that is what FWAYG want to provide for our community</p>
        <h2 className='font-bold   text-xl py-2 text-[#000000] ' data-aos="fade-up" >FWAFF Concept</h2>
        <p className='' data-aos="fade-up" > We have seen how people come to America and loose they are way in the process. Which I myself is one of them. And that is one of the thing that we will mostly focus about, helping others by :
               <br />
              -Provide guidance in the ways that our community has gain knowledge for the shot period that we have been here. <br /> 
              -We will guide our community in different ways of life. 
    
        </p>
 
        <h2 className='font-bold   text-xl py-2 text-[#000000]  ' data-aos="fade-up" >FWAFF’s long term mission</h2>
        <p data-aos="fade-up" > 
        Our  mission is to make sure that everyone that get the opportunity to be part of our community should rip the benefit that comes with it. Such as personal grow, be educated in financial literacy, etc. <br /> Most of us that come here get influence by the wrong people and that change the course of our lives. 
        FWAFF want to change that in our community : <br /> <br /> <span>
               - We  will provide personal growth physically and mentally to our community. <br /> 
                - We  will guide our community on the road of success. <br />
               - We  will provide educational support to young, adult, and parents.
                </span>
        </p>
 
        <h2 className='font-bold   text-xl py-2 text-[#000000] ' data-aos="fade-up" >Opportunities</h2>
        <p className='mb-10' data-aos="fade-up" >
        The problem that we face now in our community is luck of information and guidance and that’s what FWAFF is bring to our community. 
        <span>One of the problem that we have is adaptation.  <br />
          The second problem is financial literacy
          The third problem is personal growth
          We are the proof living of our community and young motivated individuals that want to see our community successes.  
          </span>

        </p>

        <article className=' ' >
          <h2 className='justify-center items-center text-center text-4xl font-semibold text-blue-600' data-aos="fade-up">Our  Team</h2>
          <div className='grid md:grid-cols-3 gap-5 sm:gap-1  mx-auto max-w-[1240px]'>

            <figure className='w-42 sm:w-72 shadow-xl my-4  rounded-lg bg-white h-62' data-aos="fade-left" >
              <img src={serge} alt="president" className='rounded-t-xl h-5/6 w-full' />
              <figcaption className='text-center font-medium pt-3'>
                  <div className='text-sky-500'>SERGE </div> 
                  <div className='text-slate-700'>President</div>  
            </figcaption>
            </figure>

            <figure className='w-42 sm:w-72 shadow-xl my-4  rounded-lg bg-white h-62' data-aos="fade-left">
            <img src={suzy} alt="vice president" className='rounded-t-xl h-5/6 w-full'   />
              <figcaption className='text-center font-medium pt-3 '>
                  <div className='text-sky-500'>SUZY</div> 
                  <div className='text-slate-700'>Vice President</div>  
            </figcaption>
            </figure>

            <figure className='w-42 sm:w-72 shadow-xl my-4  rounded-lg bg-white h-62' data-aos="fade-left">
              <img src={ahadi} alt="communitcation and affairs " className='rounded-t-xl w-full h-5/6'   />
              <figcaption className='text-center font-medium pt-3'>
                  <div className='text-sky-500'>AHADI </div> 
                  <div className='text-slate-700'>Communication and Affairs</div>  
             </figcaption>
            </figure>

            <figure className='w-42 sm:w-72 shadow-xl my-4  rounded-lg bg-white h-62' data-aos="fade-left">
              <img src={espoir} alt="representative" className='rounded-t-xl w-full h-5/6'   />
              <figcaption className='text-center font-medium  pt-3'>
                  <div className='text-sky-500'>ESPOIR</div> 
                  <div className='text-slate-700'>Representative</div>  
            </figcaption>
            </figure>
            <figure className='w-42 sm:w-72 shadow-xl my-4  rounded-lg bg-white h-62' data-aos="fade-left">
              <img src={esther} alt="event organizer" className='rounded-t-xl w-full h-5/6'   />
              <figcaption className='text-center font-medium pt-3'>
                  <div className='text-sky-500'>ESTHER</div> 
                  <div className='text-slate-700'>Event Organizer</div>  
            </figcaption>
            </figure>

            <figure className='w-42 sm:w-72 shadow-xl my-4  rounded-lg bg-white h-62' data-aos="fade-left">
              <img src={petro} alt="treasure" className='rounded-t-xl w-full h-5/6'  />
              <figcaption className='text-center font-medium pt-3 '>
                  <div className='text-sky-500'>PETRO</div> 
                  <div className='text-slate-700'>Treasure</div>  
            </figcaption>
            </figure>

          </div>
        </article>
      
      </section>
      
    </main>
  )
}

export default About
