import React from 'react';
import bgimage from "../assets/GQLR6101.JPG";
import concept from "../assets/concept.PNG";
import opportinuty from "../assets/opportunity.WEBP";
import mission from "../assets/mission.JPG";


const Home = () => {
  return (
    <div className='bg-slate-50 '>
        <div className='pt-10 '>
                <img src={bgimage} alt= "bgimage" />
        </div>
        <div className="px-5  justify-between items-center w-full h-full md:max-w-[1240px] m-auto " >
        <div className=''> 

            <div className='md:flex gap-10 text-justify '>
                <div>
                    <h3 className='text-blue-400 text-3xl font-bold  py-4 text-justify'>Why Fort Worth Africa  
                        Funeral Foundation? 
                    </h3>
                </div>
                <div>
                    <p className='font-sans font-normal py-1'>
                    Our mission is to make sure that opportunity to be part of our community should rip benefit that comes with it. Such as personal grow, be educated in financial literacy, etc.
                    <br /><button className='bg-blue-500 w-48 rounded-sm font-semibold  p-4  hover:bg-blue-600 text-white text-2xl px-2 '>READ MORE</button> 
                    </p>
                </div>
            </div>
            <div className='md:flex  gap-5 py-5'  >
                    <div className='my-5 md:w-1/3 text-justify'>
                        <figure className='bg-slate-200 rounded-xl p-8 '>
                            <div className='w-32 '><img src={concept} alt=""   /></div>
                            <h4 className=' font-bold text-2xl'>Concept</h4>
                            <p>
                            Our mission is to make sure that everyone that get the opportunity to be part of our community should rip the benefit that comes with it. Such as personal grow, be educated in financial literacy, etc.  </p>
                        </figure>
                    </div>

                <div className='my-5 md:w-1/3 text-justify'>
               
                    <figure className='bg-slate-200 rounded-xl p-8   '>
                    <div className='w-28 rounded-full  '><img src={mission} alt=""   /></div>
                        <h3 className='font-bold text-2xl'>FWAFF’s long term mission</h3>
                        <p >
                        We have seen how people come to America and loose they are way in the process. Which I myself is one of them. And that is one of the thing that we will mostly focus about
                        </p>
                    </figure>
                </div>
                

                <div className='my-5 md:w-1/3 text-justify'>
                    <figure className='bg-slate-200 rounded-xl p-8  '>
                    <div className='w-28 rounded-full  '><img src={opportinuty} alt=""   /></div>
                        <h3 className='font-bold text-2xl'>Opportunities</h3>
                        <p>
                        The problem that we face now in our community is luck of information and guidance and <br /> that’s what FWAFF is bring to our community. 
                        </p>
                    </figure>
                </div>
            </div>

            <div  className=''>
                    <h3 className='mb-5 text-center text-2xl font-semibold md:text-4xl' >Contact With Us</h3>
                    <form className='bg-white rounded-lg p-8 md:px-32 '>
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
                </div>
        </div>
    </div>
    </div>
  )
}

export default Home