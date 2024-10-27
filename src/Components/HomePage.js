import React, { useEffect, useState } from 'react';
import heroImage from '../Images/girlwithMilk.png';
import { TypeAnimation } from 'react-type-animation';


const HomePage = () => {

    return (
        <div>
            {/* Hero Section */}
            <header className="flex flex-col md:flex-row items-center justify-normal p-8 bg-gray-100">
                <div className="w-1/2">
                    <h1 className="text-5xl font-bold text-gray-800">Welcome to HamroDairy</h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Fresh, organic, and locally sourced dairy products, crafted with care just for you.
                    </p>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            "We serve Fresh Milk", 1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'We serve Butter',
                            1000,
                            'We serve Icecream',
                            1000,
                            'We serve Bread',
                            1000
                        ]}
                        wrapper="span"
                        speed={30}
                        style={{ fontSize: '2em', display: 'inline-block',fontFamily:'monospace' }}
                        repeat={Infinity}
                    />
<br></br>
                    <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300">
                        Shop Now
                    </button>
                </div>
                <div className="w-1/2 mt-6 md:mt-0 relative">
                    <img src={heroImage} alt="Dairy Products" className="w-full h-auto object-contain opacity-90" />
                </div>
            </header>
        </div>
    );
}

export default HomePage;
