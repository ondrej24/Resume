import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';


const Contact = () => {
  return (
    <div name='contact' className='screenSettings flex justify-center items-center px-4'>
      <form method='POST' action='https://getform.io/f/221bc4eb-211d-42d8-a4b8-607557e62277' className='max-w-[600px] w-full flex flex-col'>
        <div className='h-fit'>
          <div className='py-4'>
            <p className='bigText'>Contact</p>
          </div>
          <p className='mb-4'>Fill the form below or send me an email to o.pollach@gmail.com</p>
        </div>
        <input className='placeholder-gray-700 text-gray-700 bg-gray-300 my-2' placeholder='Name' type="text" name='name'></input>
        <input className='placeholder-gray-700 text-gray-700 bg-gray-300 my-2' placeholder='E-mail' type="email" name='email'></input>
        <textarea className='my-2 placeholder-gray-700 text-gray-700 bg-gray-300' placeholder='Message' type="message" name='message' rows="10"></textarea>
        <button className='buttonHover mx-auto group'>Send message
          <span className='group-hover:-rotate-90 duration-200 ml-2'>
            <HiArrowNarrowRight />
          </span>
        </button>
      </form>
    </div>
  )
}

export default Contact;