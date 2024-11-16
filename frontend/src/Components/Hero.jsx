import React from 'react'
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <main className='relative cursor-none'>
    <section  className='fixed  w-full h-screen z-1 m-0 p-0 '>
         <Spline scene="https://prod.spline.design/w9UV86ba4SaGa2Yv/scene.splinecode" className='absolute h-[100%]'/>
    </section>
    <section className=' p-3 absolute md:mt-[600] xl:mt-[650px] sm:mt-[400px] mt-[400px] ml-5  flex flex-col justify-between items-start overflow-hidden md:w-3/5'>
    <h1 className='text-white font-main font-extrabold md:text-8xl text-7xl'>
    Changing Lives
    </h1>
    <p className='text-white w-full mt-10 text-justify font-main'>
       Unlock the power of connection through American Sign Language (ASL). 
      Our project is dedicated to empowering individuals by making ASL 
      more accessible, understandable, and fun to learn. Dive into our 
      resources, explore interactive lessons, and start communicating 
      in a whole new way today!
    </p>
    </section>
    
    <section className='fixed right-4 bottom-2 bg-gradient-to-t from-[#000000] 0% to-[#717379] 100% rounded-md p-4'>
    <img src="./src/assets/gemini.png" alt="gemini"
    width={200}
    height={100} />
    </section>

    <section className='fixed flex-2 right-1 bottom-[100px] p-0 b-0 z-2 h-[600px] mr-20 text-white text-center font-main text-2xl flex flex-col justify-center items-start'>
      
        <div><span className='font-main text-white text-7xl '>A</span>merican</div>
        <div><span className='font-main text-white text-7xl '>S</span>ign</div>
        <div><span className='font-main text-white text-7xl '>L</span>anguage </div>
        <div><span className='font-main text-white text-7xl '>M</span>ade</div>
        <div><span className='font-main text-white text-7xl '>E</span>asy</div>
    
    </section>

    </main>
  )
}

export default Hero;