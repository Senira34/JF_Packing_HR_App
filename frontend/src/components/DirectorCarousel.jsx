import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import d1 from '../assets/d1.jpg';
import d2 from '../assets/d2.jpg';

const directors = [
    {
        id: 1,
        name: "Mr. S.B. Perera",
        title: "Director",
        qualifications: "FCMA/CGMA(UK), B.Sc Mech. Eng. (Hons)",
        description: "Mr. Shrihan B. Perera was appointed to the Board of PrimeFlex Packaging Pvt Ltd on the 20th of February 2025.",
        image: d1
    },
    {
        id: 2,
        name: "Mr. S. D. R. Arudpragasam",
        title: "Chairman",
        qualifications: "FCMA (UK)",
        description: "Mr. S. D. R. Arudpragasam was appointed as the Chairman of PrimeFlex Packaging Pvt Ltd on 24th August 2017.",
        image: d2
    }
];

export default function DirectorCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % directors.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + directors.length) % directors.length);
    };

    return (
        <div className="relative w-full max-w-5xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center text-red-600 mb-12 uppercase">
                Profiles of the Board of Directors
            </h2>

            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden min-h-[400px] border border-slate-100">
                <div className="flex items-center justify-between h-full p-8 md:p-12">

                    {/* Navigation Left */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6 text-slate-700" />
                    </button>

                    {/* Content Area */}
                    <div className="w-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
                            >
                                {/* Image Side */}
                                {/* Image Side */}
                                <div className="w-48 h-56 md:w-64 md:h-72 flex-shrink-0 bg-slate-200 rounded-xl overflow-hidden shadow-inner">
                                    {directors[currentIndex].image ? (
                                        <img
                                            src={directors[currentIndex].image}
                                            alt={directors[currentIndex].name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-400 bg-slate-100">
                                            User Image
                                        </div>
                                    )}
                                </div>

                                {/* Text Side */}
                                <div className="flex-1 text-center md:text-left space-y-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-800">{directors[currentIndex].name}</h3>
                                        <p className="text-lg font-semibold text-slate-600">{directors[currentIndex].title}</p>
                                        <p className="text-sm text-slate-500">{directors[currentIndex].qualifications}</p>
                                    </div>

                                    <p className="text-slate-600 leading-relaxed max-w-2xl">
                                        {directors[currentIndex].description}
                                    </p>

                                    <button className="text-red-600 font-semibold hover:text-red-700 underline underline-offset-4">
                                        Read More
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Right */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                    >
                        <ChevronRight className="w-6 h-6 text-slate-700" />
                    </button>

                </div>
            </div>
        </div>
    );
}
