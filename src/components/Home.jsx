import React from 'react';
// import { HiArrowNarrowRight } from 'react-icons/hi';


const Home = () => {
  return (
    <div name='home' className='screenSettings'>

      {/* Container */}
      <div className='px-4 sm:px-0 max-w-[1000px] mx-auto flex flex-col h-full justify-center'>
        <p className='text-xl sm:text-3xl text-[#b44040]'>Hi, my name is</p>
        <h1 className='text-3xl sm:text-6xl text-[#b53333] py-3'>Ondřej Pollach.</h1>
        <p className='text-2xl sm:text-5xl text-[#999999]'>I am a front-end web developer. </p>
        <p className='text-base sm:text-lg text-[#999999] py-3 max-w-[700px]'>
          I graduated from Energetics at Brno University of Technology (Czech Republic).
          Now I would like to start my career as a web developer.
        </p>
        {/* <div className='text-[#eeeeee] mt-3'>
          <button className='buttonHover group '>
            See my work
            <span className='group-hover:rotate-90 duration-200 ml-2'>
              <HiArrowNarrowRight />
            </span>
          </button>
        </div> */}
      </div>

    </div>
  )
}

export default Home;