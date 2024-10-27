import React, { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Milk from '../Images/Milk.jpg';
import Cheese from '../Images/cheese.jpg';
import Yogurt from '../Images/Yogurt.jpg';
import Icecream from '../Images/Icecream.jpg';
import Butter from '../Images/Butter.jpg';

const products = [
    { id: 1, image: Milk, title: 'Fresh Milk', description: 'Organic fresh milk sourced from local farms.' },
    { id: 2, image: Cheese, title: 'Cheese', description: 'Delicious and creamy cheese for all occasions.' },
    { id: 3, image: Yogurt, title: 'Yogurt', description: 'Healthy and tasty yogurt made from pure milk.' },
    { id: 4, image: Butter, title: 'Butter', description: 'Rich and creamy butter perfect for cooking.' },
    { id: 5, image: Icecream, title: 'Ice Cream', description: 'Delightful ice cream in various flavors.' },
];

const MyProduct = () => {
    const carouselRef = useRef(null);

        const items = products.map((product) => (
            <div key={product.id} className="item p-4">
    <img 
        src={product.image} 
        alt={product.title} 
        className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105" 
    />
    <h3 className="text-xl font-semibold mt-2 text-gray-800">{product.title}</h3>
    <p className="text-gray-600">{product.description}</p>
    <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition duration-300">
        Order Now
    </button>
</div>
    ));

    return (
        <div className="my-12 relative">
            <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>
            <AliceCarousel
                ref={carouselRef}
                mouseTracking
                items={items}
                responsive={{ 0: { items: 1 }, 568: { items: 2 }, 1024: { items: 3 } }}
                controlsStrategy="alternate"
                autoPlay
                autoPlayInterval={1000}
                disableButtonsControls
            />
            <button
                className="absolute left-0 top-1/3 transform -translate-y-1/2 bg-slate-500 text-white rounded-full p-2"
                onClick={() => carouselRef.current.slidePrev()}
            >
                &#10094; {/* Previous Arrow */}
            </button>
            <button
                className="absolute right-0 top-1/3 transform -translate-y-1/2 bg-slate-500 text-white rounded-full p-2"
                onClick={() => carouselRef.current.slideNext()}
            >
                &#10095; {/* Next Arrow */}
            </button>
        </div>
    );
};

export default MyProduct;
