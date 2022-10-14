import React from 'react'

const About = () => {
  return (
    <div name='about' className='screenSettings'>
      <div className='flex flex-col w-full h-full justify-center items-center'>
        <div className='max-w-[1000px] w-full gap-8 grid grid-cols-2'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='bigText'>About</p>
          </div>
          <div>
          </div>
        </div>
        <div className='max-w-[1000px] w-full gap-8 grid sm:grid-cols-2 px-4'>
          <div className='sm:text-right text-3xl'>
            <p>
              Let me introduce myself a little bit...
            </p>
          </div>
          <div>
            <p>
              I want to get better at things I'm already familiar with and learn new things that I find exciting.
              Fields that I'm passionate about are <strong>energetics</strong> (mainly sustainability and renewables), 
              <strong> programming</strong>  (front-end for now) and <strong>finance</strong> (retail investing).
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About