import React from 'react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.jpg';

export default function LatestCreations() {
    const products = [
        { id: 1, img: img1, title: 'Flexible Packaging' },
        { id: 2, img: img2, title: 'Food Grade Films' },
        { id: 3, img: img3, title: 'Laminated Pouches' },
        { id: 4, img: img4, title: 'Industrial Packaging' },
        { id: 5, img: img5, title: 'High Barrier Films' },
        { id: 6, img: img6, title: 'Custom Printed Bags' },
        { id: 7, img: img7, title: 'Eco-Friendly Wraps' },
        { id: 8, img: img8, title: 'Heavy Duty Sacks' },
    ];

    return (
        <section className="py-12 bg-white">
            <h1 className="text-3xl font-semibold text-center mx-auto text-slate-900">Our Latest Products</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">A visual collection of our most recent products - each piece crafted with intention, emotion, and style.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12 max-w-7xl mx-auto px-4">
                {products.map((product) => (
                    <div key={product.id} className="relative group rounded-lg overflow-hidden h-64 shadow-md hover:shadow-xl transition-all duration-300">
                        <img src={product.img} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 flex flex-col justify-end p-4 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <h1 className="text-xl font-medium">{product.title}</h1>
                            <a href="#" className="flex items-center gap-1 text-sm text-white/70 hover:text-white transition-colors">
                                Show More
                                <svg width="16" height="16" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.125 1.625H11.375V4.875" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5.41602 7.58333L11.3743 1.625" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.75 7.04167V10.2917C9.75 10.579 9.63586 10.8545 9.4327 11.0577C9.22953 11.2609 8.95398 11.375 8.66667 11.375H2.70833C2.42102 11.375 2.14547 11.2609 1.9423 11.0577C1.73914 10.8545 1.625 10.579 1.625 10.2917V4.33333C1.625 4.04602 1.73914 3.77047 1.9423 3.5673C2.14547 3.36414 2.42102 3.25 2.70833 3.25H5.95833" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
