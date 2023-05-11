import React from 'react';
import bgimage from "../assets/GQLR6101.JPG";

const About = () => {
  return (
    <div>
      <div className='pt-24'>
            <img src={bgimage} alt= "bgimage" />
        </div>
    <div  className='md:flex md:px-2 px-5 justify-between items-center w-full h-full md:max-w-[1240px] mx-auto'>
      <div className=' text-justify bg-slate-50 px-5 md:sm:px-60 ' >
        <h1 className='font-medium text-blue-700  text-3xl text-center py-2'>Fort Worth Africa Funeral Foundation</h1>
        <p > Our mission here is to provide guidance to our community, Support in any situation, Personal growth, educational etc... Which is crucial to adapt in this country. And that is what FWAYG want to provide for our community</p>
    
        <h2 className='font-bold   text-xl py-2 text-[#000000] '>FWAFF Concept</h2>
        <p> We have seen how people come to America and loose they are way in the process. Which I myself is one of them. And that is one of the thing that we will mostly focus about, helping others by :
               <br />
              -Provide guidance in the ways that our community has gain knowledge for the shot period that we have been here. <br /> 
              -We will guide our community in different ways of life. 
    
        </p>
 
        <h2 className='font-bold   text-xl py-2 text-[#000000]  '>FWAFF’s long term mission</h2>
        <p> 
        Our  mission is to make sure that everyone that get the opportunity to be part of our community should rip the benefit that comes with it. Such as personal grow, be educated in financial literacy, etc. <br /> Most of us that come here get influence by the wrong people and that change the course of our lives. 
        FWA YG want to change that in our community . <br /> <span>
                We  will provide personal growth physically and mentally to our community. <br /> 
                We  will guide our community on the road of success. <br />
                We  will provide educational support to young, adult, and parents.
                </span>
        </p>
 
        <h2 className='font-bold   text-xl py-2 text-[#000000] '>Opportunities</h2>
        <p >
        The problem that we face now in our community is luck of information and guidance and that’s what FWAFF is bring to our community. 
        <span>One of the problem that we have is adaptation.  <br />
          The second problem is financial literacy
          The third problem is personal growth
          We are the proof living of our community and young motivated individuals that want to see our community successes.  
          </span>

        </p>
      
      </div>
    </div>
    </div>
  )
}

export default About
