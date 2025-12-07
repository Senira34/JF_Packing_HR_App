import React from 'react';
import DirectorCarousel from '../components/DirectorCarousel';
import { Target, Eye, Leaf } from 'lucide-react';

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-white font-['Poppins',sans-serif] pt-20">

            {/* 1. Company Overview Section */}
            <section className="relative py-16 md:py-24 overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-50 to-transparent -z-10" />

                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Right Image (Visuals) - shown first on mobile for impact, or second on desktop */}
                        <div className="w-full lg:w-1/2 lg:order-2">
                            <div className="relative">
                                {/* Placeholder for the complex composite image of factory/tree/workers */}
                                <div className="w-full aspect-video bg-gradient-to-tr from-blue-100 to-green-100 rounded-2xl shadow-lg border-4 border-white flex items-center justify-center">
                                    <span className="text-slate-400 font-medium">Company Overview Visuals</span>
                                </div>
                                {/* Decorative elements */}
                                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-400/20 rounded-full blur-2xl" />
                            </div>
                        </div>

                        {/* Left Text */}
                        <div className="w-full lg:w-1/2 lg:order-1 space-y-6">
                            <div>
                                <h2 className="text-lg font-semibold text-slate-500 mb-1">J. F. Packaging Limited</h2>
                                <h1 className="text-4xl md:text-5xl font-bold text-red-600">Company Overview</h1>
                            </div>

                            <p className="text-slate-700 leading-relaxed text-lg">
                                Founded in 1987, our company was established as a family business and Lankem Ceylon PLC fully acquired this company in 2015.
                                Now we are one of Sri Lanka’s premier packaging companies, with a workforce of 150 people using cutting-edge technology and stringent adherence to the highest international standards.
                            </p>
                            <p className="text-slate-700 leading-relaxed">
                                These are the defining factors that gave us the edge: Our incredible TEAM of Qualified, Skilled, overseas trained, and Motivated personnel,
                                equipped and working with an ultra-modern state-of-the-art Factory, certified to run according to the standards of ISO9001:2008, ISO 22000:2005 and HACCP certification FSSC 22000.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Vision & Mission Section */}
            <section className="py-20 relative bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
                    <div className="flex flex-col md:flex-row gap-8 items-center justify-center relative z-10">

                        {/* Vision Circle */}
                        <div className="w-72 h-72 md:w-80 md:h-80 bg-orange-500 rounded-full flex flex-col items-center justify-center p-8 text-center text-white shadow-xl hover:scale-105 transition-transform duration-300 z-10">
                            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                            <p className="text-sm md:text-base leading-relaxed font-medium">
                                "To serve the customers with Packaging Solutions beyond Expectations..."
                            </p>
                        </div>

                        {/* Center Dark Circle (Values) */}
                        <div className="w-[22rem] h-[22rem] md:w-[28rem] md:h-[28rem] bg-[#002b49] rounded-full flex items-center justify-center p-10 text-white shadow-2xl -my-10 md:my-0 md:-mx-8 z-20">
                            <ul className="text-xs md:text-sm space-y-3 list-disc pl-4 text-slate-200">
                                <li>We believe to understand the intrinsic needs of packaging that a customer needs.</li>
                                <li>We work with customers closely, providing innovative ideas.</li>
                                <li>We believe in Ethics, values and work with sincerity.</li>
                                <li>We consider our suppliers as partners.</li>
                                <li>We treat the earth with respect and align ourselves to be environmentally friendly.</li>
                            </ul>
                        </div>

                        {/* Mission Circle */}
                        <div className="w-64 h-64 md:w-72 md:h-72 bg-red-600 rounded-full flex flex-col items-center justify-center p-8 text-center text-white shadow-xl hover:scale-105 transition-transform duration-300 z-10">
                            <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                            <Target className="w-12 h-12 mx-auto opacity-80" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Eco-Friendly Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Left Text */}
                        <div className="w-full lg:w-1/2 space-y-6">
                            <h2 className="text-4xl font-bold text-green-600 flex items-center gap-3">
                                Eco-Friendly <Leaf className="w-8 h-8" />
                            </h2>
                            <p className="text-slate-700 leading-relaxed font-medium">
                                With the latest technology in place, J. F. Packaging Limited has been an environmentally friendly Organization and committed to protect nature for future generations.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "A MOU is signed with HOLCIM for environmentally friendly disposal of waste",
                                    "Factory equipped with UPS protecting products against power failures",
                                    "Solvent-less laminator is operator friendly and environmental friendly",
                                    "Installed printers function as environmental supportive",
                                    "Operators take extra precautionary measures to minimize waste",
                                    "Minimizing startup time and planning longer production runs"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600">
                                        <span className="w-2 h-2 mt-2 bg-green-500 rounded-full flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Graphic */}
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <div className="relative w-full max-w-md">
                                {/* Placeholder for Tree Machine Graphic */}
                                <div className="aspect-[4/5] bg-green-50 rounded-3xl border-2 border-green-100 flex flex-col items-center justify-center p-8 text-center">
                                    <Leaf className="w-24 h-24 text-green-300 mb-4" />
                                    <span className="text-green-800 font-semibold">Eco-Friendly Process Visual</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Board of Directors */}
            <section className="py-12 bg-slate-50">
                <DirectorCarousel />
            </section>

        </div>
    );
}
