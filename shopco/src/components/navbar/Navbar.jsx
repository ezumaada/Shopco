import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-shopco.png'

const Navbar = () => {
  return (
    <div className='mt-11 mx-[5vw] py-5 flex flex-row justify-between'>
        <div>
            <Link to="/"><img src={logo} alt="logo" /> </Link>
        </div>
        <ul className='flex flex-row justify-between gap-5'>
            <li>Home</li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            
        </ul>
  </div>
  )
}

export default Navbar