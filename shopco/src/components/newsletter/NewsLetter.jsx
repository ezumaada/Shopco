import React from 'react';
import email from '../../assets/images/email-frame.png';

const NewsLetter = () => {
  return (
    <div className='flex flex-col items-center px-2 justify-around bg-black rounded-2xl my-9 md:flex-row mx-[5vw]'>
        <h1 className='text-white text-3xl font-semibold md:text-4xl'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
        <div className='my-8'>
            <div className="relative my-4">
             <input type="text" placeholder="Enter your email address" className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none"/>
             <img src={email} alt="email-icon" className='absolute left-2 top-1/2 transform -translate-y-1/2' />
            </div>
            
            <button className='text-black bg-white py-2 px-9 rounded-md'>Subscribe to Newsletter</button>
        </div>
    </div>
  )
}

export default NewsLetter