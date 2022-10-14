import React from 'react';
import HTML_icon from '../assets/html.png';
import CSS_icon from '../assets/css.png';
import JavaScript_icon from '../assets/javascript.png';
import React_icon from '../assets/react.png';
import GitHub_icon from '../assets/github.png';
import Node_icon from '../assets/node.png';


const Skills = () => {
  return (
    <div name='skills' className='screenSettings'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full '>
        <div className='mt-40 pl-4 sm:pl-28'>
          <div className='py-4'>
            <p className='bigText'>Skills</p>
          </div>
          <p>These are the technologies I am familiar with.</p>
          <p className='text-sm italic'>For more, please have a look at my LinkedIn.</p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 w-full gap-4 text-center pt-10 '>
          <div>
            <img src={HTML_icon} alt='HTML' className='w-20 mx-auto hover:scale-125 duration-500'></img>
            <p className='my-4'>HTML</p>
          </div>
          <div>
            <img src={CSS_icon} alt='CSS' className='w-20 mx-auto hover:scale-125 duration-500'></img>
            <p className='my-4'>CSS</p>
          </div>
          <div>
            <img src={JavaScript_icon} alt='JavaScript' className='w-20 mx-auto hover:scale-125 duration-500'></img>
            <p className='my-4'>JavaScript</p>
          </div>
          <div>
            <img src={React_icon} alt='React.js' className='w-20 mx-auto hover:scale-125 duration-500'></img>
            <p className='my-4'>React.js</p>
          </div>
          <div>
            <img src={GitHub_icon} alt='Github' className='w-20 mx-auto hover:scale-125 duration-500'></img>
            <p className='my-4'>GitHub</p>
          </div>
          <div>
            <img src={Node_icon} alt='Node.js' className='w-20 mx-auto hover:scale-125 duration-500'></img>
            <p className='my-4'>Node.js</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills;