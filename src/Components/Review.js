import React from 'react'
import { FaCheckCircle, FaSeedling, FaHome } from 'react-icons/fa';

const Review = () => {
  return (
    <div>
         {/* Features Section */}
         <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
                        <div className="p-6 border rounded shadow-lg text-center">
                            <div className="text-4xl text-blue-600 mb-4">
                                <div className='flex justify-center'>
                                    <FaCheckCircle />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-700">Quality Products</h3>
                            <p className="mt-2 text-gray-600">We ensure the highest quality in all our dairy products.</p>
                        </div>
                        <div className="p-6 border rounded shadow-lg text-center">
                            <div className="text-4xl text-green-600 mb-4">
                                <div className='flex justify-center'>
                                    <FaSeedling />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-700">Sustainable Farming</h3>
                            <p className="mt-2 text-gray-600">Our practices prioritize sustainability and animal welfare.</p>
                        </div>
                        <div className="p-6 border rounded shadow-lg text-center">
                            <div className="text-4xl text-yellow-600 mb-4">
                                <div className='flex justify-center'>
                                    <FaHome />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-700">Locally Sourced</h3>
                            <p className="mt-2 text-gray-600">Supporting local farmers and communities is our priority.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Testimonials Section */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800">What Our Customers Say</h2>
                    <div className="mt-6">
                        <blockquote className="text-center italic text-gray-600">
                            "HamroDairy products are simply the best! The freshness and quality are unmatched."
                            <footer className="mt-4 font-semibold">- A Happy Customer</footer>
                        </blockquote>
                    </div>
                </div>
            </section>

    </div>
  )
}

export default Review