import React from "react";
import { FaStore, FaPhoneAlt } from "react-icons/fa";
import { LuMilk } from "react-icons/lu";
const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800 px-4 py-16">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-blue-600">About Gorakhnath Dairy Shop</h1>
        <p className="text-lg text-gray-500 mt-4">
          Quality Dairy Products, Fresh and Natural, Delivered with Love
        </p>
      </section>

      {/* Our Story */}
      <section className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-semibold text-blue-600">Our Story</h2>
        <p className="mt-4 max-w-3xl text-lg text-gray-700">
          Gorakhnath Dairy Shop was founded with the vision of bringing the freshest, most
          delicious dairy products to our community. With years of experience and a love for
          quality, we source only the best milk and dairy products, ensuring each product is
          made with care and dedication. Our commitment to quality and customer satisfaction
          has helped us become a trusted name in the community.
        </p>
      </section>

      {/* Our Mission */}
      <section className="bg-blue-50 p-8 text-center mb-12">
        <h2 className="text-3xl font-semibold text-blue-600">Our Mission</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-700">
          Our mission is simple: to provide high-quality, fresh dairy products to our customers
          every single day. We believe in the importance of natural and pure products, free from
          artificial preservatives, and are committed to delivering a healthier lifestyle with every
          product we offer.
        </p>
      </section>

      {/* Products and Services */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-600 text-center">Our Products</h2>
        <div className="flex justify-center gap-8 mt-8">
          <div className="text-center flex flex-col items-center ">
            <LuMilk size={50} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold">Fresh Milk</h3>
            <p className="mt-2 text-gray-700">Our milk is sourced directly from local farms, ensuring freshness and purity.</p>
          </div>
          <div className="text-center flex flex-col items-center ">
            <FaStore size={50} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold">Curd & Yogurt</h3>
            <p className="mt-2 text-gray-700">Made with natural ingredients, our curd and yogurt are rich in taste and health benefits.</p>
          </div>
          <div className="text-center flex flex-col items-center ">
            <FaPhoneAlt size={50} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold">Home Delivery</h3>
            <p className="mt-2 text-gray-700">We offer fast and reliable home delivery, ensuring your dairy products are always fresh.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us? */}
      <section className="bg-gray-100 p-8 text-center mb-12">
        <h2 className="text-3xl font-semibold text-blue-600">Why Choose Us?</h2>
        <p className="mt-4 text-lg text-gray-700">
          At Gorakhnath Dairy Shop, we pride ourselves on the following values:
        </p>
        <ul className="list-disc list-inside mt-6 text-left max-w-3xl mx-auto text-gray-700">
          <li>Quality: Only the best, purest dairy products.</li>
          <li>Freshness: Direct from farm to table, every day.</li>
          <li>Customer Care: We're always here to help and serve you.</li>
          <li>Trusted by the community for over 20 years.</li>
        </ul>
      </section>

      {/* Contact Information */}
      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-blue-600">Get in Touch</h2>
        <p className="mt-4 text-lg text-gray-700">
          Feel free to reach out to us for inquiries, feedback, or to place an order.
        </p>
        <div className="mt-6 text-lg text-gray-700">
          <p>Phone: (+977)  </p>
          <p>Email: info@gorakhnathdairy.com</p>
          <p>Address: Panauti,KavrePalanchowk</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
