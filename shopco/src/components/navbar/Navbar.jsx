import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-shopco.png';
import cart from '../../assets/images/cart-icon.png';
import profile from '../../assets/images/profile-icon.png';
import hamburger from '../../assets/images/hamburger.png';
import search from '../../assets/images/search-icon.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar if clicked outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);
  

  return (
    <div>
        {/* Navbar for small screens */}
      <div className="flex shadow-lg justify-between gap-6 mt-11 mx-[5vw] py-5 items-center p-4 md:hidden">
         {/* Hamburger icon */}
            <button onClick={toggleSidebar} className="text-black">
          <img src={hamburger} alt="Hamburger-icon" className="h-8" />
            </button>
         {/* Logo */}
         <img src={logo} alt="Logo" className="h-8" />
         <div className='flex flex-row gap-3'>
            <Link to="/categories"><img src={search} alt="search-icon" /></Link>
            <Link to="/cart"><img src={cart} alt="cart" /> </Link>
            <Link to="/profile"><img src={profile} alt="profile" /></Link>
                
        </div>

      </div>
      
      {/* Full navbar for md & lg screens */}
        
      <div className='hidden md:flex shadow-lg mt-11 mx-[5vw] px-4 py-5 flex-row justify-between items-center gap-5'>
        <div>
            <Link to="/"><img src={logo} alt="logo" /> </Link>
        </div>
        <div>
            <ul className='flex flex-row justify-between gap-5'>
            <li className='hover:text-md transition duration-300 text-sm'><Link to="/about">Shop</Link></li>
            <li className='hover:text-md transition duration-300 text-sm'><Link to="/about">On Sale</Link></li>
            <li className='hover:text-md transition duration-300 text-sm'><Link to="/contact">New arrivals</Link></li>
            <li className='hover:text-md transition duration-300 text-sm'><Link to="/brands">Brands</Link></li>
            
            </ul>
        </div>
        <div className="relative w-3/4 h-16 shadow-lg"> {/* Added shadow-lg for box shadow */}
            <input type="text"
                className="w-full p-2 pl-4 h-full pr-28 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Search for Products..." />
            <button className="absolute right-2 top-2 h-3/4 bg-blue-800 hover:bg-black text-white px-4 py-2         rounded-r-lg">Search   </button>
      </div>
        <div className='flex flex-row gap-3'>
            <Link to="/cart"><img src={cart} alt="cart" className='w-[35px] h-[35px] md:w-[35px] md:h-[35px]'/> </Link>
            <Link to="/profile"><img src={profile} alt="profile" className='w-[35px] h-[35px] md:w-[35px] md:h-[35px]' /></Link>
                
        </div>
        </div>

        {/* Sidebar for small screens (opens on click) */}
      {isOpen && (
        <>
          {/* Overlay for blur effect */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-10"></div>

          {/* Sidebar */}
          <div
            ref={sidebarRef}
            className={`fixed top-0 left-0 h-full bg-white shadow-lg z-20 transform transition-transform duration-300 ${
              isOpen ? 'translate-x-0' : '-translate-x-full'
            } w-[30%]`}
          >
            <button
              className="p-2 text-black"
              onClick={toggleSidebar}
            >
              Close
            </button>
            <ul className="p-4">
              <li className="my-4">
                <Link to="/arrivals" className='hover:text-lg transition duration-300'>
                  New Arrivals
                </Link>
              </li>
              <li className="my-4">
                <Link to="/sales" className='hover:text-lg transition duration-300'>
                  On Sale
                </Link>
              </li>
              <li className="my-4">
                <Link to="/brands" className='hover:text-lg transition duration-300'>
                  Brands
                </Link>
              </li>
              
             
            </ul>
            <div className='fixed bottom-0 flex flex-col gap-2'>
            <Link to="/signup" className='shadow-lg transform hover:scale-110 items-center px-4 justify-center transition duration-300'>
          Sign Up </Link>
         
            <Link to="/login" className='shadow-lg transform hover:scale-110 items-center px-4 justify-center transition duration-300'>
              Login </Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Navbar