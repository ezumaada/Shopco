import React from 'react';
import logo from '../../assets/images/logo-shopco.png';
import visa from '../../assets/images/visa-logo.png';
import master from '../../assets/images/mastercard-logo.png';
import paypal from '../../assets/images/paypal-logo.png';
import apple from '../../assets/images/applepay-logo.png';
import gpay from '../../assets/images/gpay-logo.png';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
   <div className='bg-gray-200 pt-5 flex-col items-center overflow-clip px-[5vw] flex'>
      <section className='flex flex-col md:flex-row'>
        <div className='gap-3 py-4 flex flex-col'>
          <img src={logo} alt="logo" className='w-[200px]' />
           <p className='pr-8'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
        </div>
        <div className='flex flex-row py-4 gap-2 justify-between'>
          <ul>
            <li className='font-semibold text-xl'>COMPANY</li>
            <li><Link to="/about">About</Link></li>
            <li>Features</li>
            <li>Works</li>
            <li>Careers</li>
          </ul>
          <ul>
            <li className='font-semibold text-xl'>HELP</li>
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='flex flex-row py-4 justify-between'>
          <ul>
            <li className='font-semibold text-xl'>FAQ</li>
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
          <ul>
            <li className='font-semibold text-xl'>RESOURCES</li>
            <li>Free eBooks</li>
            <li>Development Tutorials</li>
            <li>How to-Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </section>
      <section className='flex flex-col gap-3 border-t-2 border-slate-300 py-5 md:flex-row items-center md:justify-between'>
        <p>© 2000-2021, All rights reserved</p>
        <div className='flex flex-row gap-2'>
          <img src={visa} alt="visa-card-logo" />
          <img src={master} alt="master-card-logo" />
          <img src={paypal} alt="paypal-card-logo" />
          <img src={apple} alt="applepay-card-logo" />
          <img src={gpay} alt="google-card-logo" />
        </div>
      </section>
   </div>
  )
}

export default Footer