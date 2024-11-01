<div className='mt-11 mx-[5vw] py-5 flex flex-row justify-between items-center gap-5'>
        <div>
            <Link to="/"><img src={logo} alt="logo" /> </Link>
        </div>
        <ul className='flex flex-row justify-between gap-5'>
            
            <li className='text-sm'><Link to="/about">New arrivals</Link></li>
            <li className='text-sm'><Link to="/contact">On Sale</Link></li>
            <li className='text-sm'><Link to="/brands">Brands</Link></li>
            
        </ul>
        <div className="relative w-3/4 h-16 shadow-lg"> {/* Added shadow-lg for box shadow */}
            <input type="text"
                className="w-full p-2 pl-4 h-full pr-28 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Search for Products..." />
            <button className="absolute right-2 top-2 h-3/4 bg-blue-800 hover:bg-black text-white px-4 py-2         rounded-r-lg">Search   </button>
      </div>
        <div className='flex flex-row gap-3'>
            <Link to="/cart"><img src={cart} alt="cart" /> </Link>
            <Link to="/profile"><img src={profile} alt="profile" /></Link>
                
        </div>
  </div>