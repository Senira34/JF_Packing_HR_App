import React from 'react';
import { Zap, ShieldCheck, Leaf } from 'lucide-react';
import heroImg from '../assets/img1.jpg';

export default function CompanyFeatures() {
    return (
        <section className="py-12 md:py-20 bg-white font-['Poppins',sans-serif]">
            <h1 className="text-5xl font-semibold text-center mx-auto text-slate-900">About PrimeFlex </h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-xl mx-auto px-4">
                We are one of Sri Lanka’s premier packaging companies, delivering world-class flexible packaging solutions with precision, quality, and care.
            </p>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 px-4 md:px-8 py-10 relative">
                {/* Blur Effect */}
                <div className="size-[520px] rounded-full absolute blur-[300px] -z-10 bg-[#FBFFE1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

                {/* Image */}
                <img className="max-w-sm w-full rounded-2xl h-auto shadow-2xl border border-slate-100 object-cover"
                    src={heroImg}
                    alt="PrimeFlex Factory" />

                {/* Content */}
                <div className="max-w-lg">
                    <h1 className="text-3xl font-semibold text-slate-900">Our Core Strengths</h1>
                    <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                        Combining cutting-edge technology with stringent ISO standards to empower your products with superior packaging.
                    </p>

                    <div className="flex flex-col gap-8 mt-8">
                        {/* Feature 1 */}
                        <div className="flex items-start gap-4">
                            <div className="size-10 p-2 bg-indigo-50 border border-indigo-100 rounded-lg flex items-center justify-center shrink-0">
                                <Zap className="w-6 h-6 text-indigo-600" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-800">State-of-the-Art Technology</h3>
                                <p className="text-sm text-slate-500 mt-1">Equipped with ultra-modern machinery for extrusion, printing, and lamination.</p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex items-start gap-4">
                            <div className="size-10 p-2 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center shrink-0">
                                <ShieldCheck className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-800">Certified Quality</h3>
                                <p className="text-sm text-slate-500 mt-1">ISO 9001:2008, ISO 22000:2005 & HACCP FSSC 22000 certified operations.</p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex items-start gap-4">
                            <div className="size-10 p-2 bg-green-50 border border-green-100 rounded-lg flex items-center justify-center shrink-0">
                                <Leaf className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-800">Eco-Friendly Focus</h3>
                                <p className="text-sm text-slate-500 mt-1">Committed to sustainability with solvent-less lamination and environmentally supportive processes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
