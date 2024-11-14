import React from 'react';
import heroImage from '../Images/girlwithMilk.png';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa'; // Import the icons

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
                            "We serve Fresh Milk", 1000,
                            'We serve Butter',
                            1000,
                            'We serve Icecream',
                            1000,
                            'We serve Bread',
                            1000
                        ]}
                        wrapper="span"
                        speed={30}
                        style={{ fontSize: '2em', display: 'inline-block', fontFamily: 'monospace' }}
                        repeat={Infinity}
                    />
                    <br/>
                    <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300">
                        Shop Now
                    </button>
                </div>
                <div className="w-1/2 mt-6 md:mt-0 relative">
                    <img src={heroImage} alt="Dairy Products" className="w-full h-auto object-contain opacity-90" />
                </div>
            </header>
            {/* Social Media Icons */}
            <div className="text-center">
  <p className="text-gray-600 mb-2">Follow us on social media</p>
            <div className="flex justify-center mt-4 gap-4 bg-transparent">
    <a
        href="https://www.facebook.com/subashtimlcena"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2 text-blue-600 hover:text-blue-500 hover:scale-110 transition-all duration-300"
        title="Follow us on Facebook"
    >
        <FaFacebook size={30} />
    </a>
    <a
        href="https://maps.app.goo.gl/vR2Gf2bKMQbQh5xS8"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2 text-red-600 hover:text-red-500 hover:scale-110 transition-all duration-300"
        title="Find us on Google Maps"
    >
        <FaMapMarkerAlt size={30} />
    </a>
    <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-2 text-blue-400 hover:text-blue-300 hover:scale-110 transition-all duration-300"
        title="Follow us on Twitter"
    >
        <FaTwitter size={30} />
    </a>
    </div>
</div>

        </div>
    );
}

export default HomePage;
