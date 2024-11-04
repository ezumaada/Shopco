import React from 'react';
import { Link } from 'react-router-dom';
import hugLarge from '../../assets/images/rectangle2.png';
import hugSmall from '../../assets/images/Rectangle-2.png';
import star from '../../assets/images/vector-star.png';

const Card = ({ title, description }) => {
    return (
        <div className="max-w-[250px] shadow-md rounded-md px-3">
            <h2 className="font-bold text-black text-2xl mb-3">{title}</h2>
            <p className='text-slate-600'>{description}</p>
        </div>
    );
};

const Header = () => {
    return (
        <div className="mx-[5vw] relative flex flex-col md:flex-row items-start md:items-center">
            {/* Text Content */}
            <div className="md:absolute md:w-1/2 z-10 p-5 bg-white/80 md:bg-transparent md:text-white text-left md:pl-[5vw]">
                <h1 className="font-extrabold text-black text-4xl md:text-5xl">
                    FIND CLOTHES <br /> THAT MATCH <br /> YOUR STYLE
                </h1>
                <p className="text-black my-5">
                    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                </p>
                <div>
                    <Link to="/categories">
                        <button className="bg-black w-full md:w-1/4 items-center transform hover:scale-110 transition duration-300 text-white my-5 rounded-md px-3 py-2">
                            Shop Now
                        </button>
                    </Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    <Card title="200+" description="International Brands." />
                    <Card title="2,000+" description="High-Quality Products." />
                    <Card title="30,000+" description="Happy Customers." />
                </div>
            </div>

            {/* Image for different screen sizes */}
            <div className="w-full relative  h-full overflow-hidden">
                <img src={star} alt="star" className='absolute top-5 right-3 ' />
                {/* Large screen image */}
                <img src={hugLarge} alt="Background Large" className="hidden md:block w-full h-auto object-cover" />
                {/* Small screen image */}
                <img src={hugSmall} alt="Background Small" className="block md:hidden w-full h-auto object-cover" />
            </div>
        </div>
    );
};

export default Header;
