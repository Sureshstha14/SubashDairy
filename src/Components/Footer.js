import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-4 md:mb-0">
                        <h5 className="text-xl font-bold">HamroDairy</h5>
                        <p className="mt-2">Your source for fresh, organic dairy products.</p>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h6 className="font-semibold">Links</h6>
                        <ul className="mt-2">
                            <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="/" className="text-gray-400 hover:text-white">About</a></li>
                            <li><a href="/" className="text-gray-400 hover:text-white">Products</a></li>
                            <li><a href="/" className="text-gray-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="font-semibold">Contact Us</h6>
                        <p className="mt-2">Email: info@hamrodairy.com</p>
                        <p>Phone: +123 456 7890</p>
                    </div>
                </div>
                <div className="mt-6 border-t border-gray-600 pt-4 text-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} HamroDairy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
