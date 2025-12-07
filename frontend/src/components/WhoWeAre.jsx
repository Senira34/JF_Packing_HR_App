import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function WhoWeAre() {
    return (
        <section className="relative py-20 overflow-hidden font-['Poppins',sans-serif]">
            {/* Background with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-blue-50 -z-10" />

            {/* Decorative blurred blobs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-50 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 relative">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-indigo-600 bg-clip-text text-transparent tracking-tight">
                                Who we are?
                            </h2>
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight">
                                The Leading Manufacture in Flexible Packaging
                            </h3>
                        </div>

                        <p className="text-slate-600 text-lg leading-relaxed">
                            J. F. Packaging Ltd welcomes you to a world of high-quality packaging with a conscience.
                            We lay great emphasis on delivering world-standard product packaging and preserving the environment,
                            starting with our own pristine surroundings in which our complex is located.
                        </p>

                        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg shadow-blue-600/30 transition-all transform hover:scale-105">
                            Read More
                        </button>
                    </div>

                    {/* Right Content - Card */}
                    <div className="relative">
                        {/* Card Container */}
                        <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl relative z-10 border border-slate-100">
                            {/* Header Text */}
                            <div className="text-center mb-8">
                                <p className="text-slate-800 font-semibold mb-1">
                                    We Are a FSSC 22000, ISO 22000 & ISO 9001
                                </p>
                                <p className="text-slate-800 font-semibold">
                                    Certified Company
                                </p>
                            </div>

                            {/* Logos Area */}
                            <div className="flex flex-col items-center gap-8">
                                {/* Sedex Logo Area */}
                                <div className="flex items-center gap-4 text-3xl font-bold text-slate-800">
                                    <span className="text-slate-600">Sedex</span>
                                    <span className="text-slate-600 mt-1">|</span>
                                    <span className="text-slate-600">Member</span>
                                </div>

                                {/* Certification Badges Row */}
                                <div className="flex flex-wrap justify-center gap-x-8 gap-y-10">
                                    {/* Badge 1 */}
                                    <div className="relative group">
                                        <div className="w-20 h-20 border-[3px] border-orange-500 rounded-full flex items-center justify-center text-orange-500 bg-white z-10 relative">
                                            <CheckCircle className="w-8 h-8" />
                                        </div>
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-[10px] font-bold text-slate-500 whitespace-nowrap z-20">FSSC 20000</span>
                                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-2 text-[10px] font-bold text-slate-500 z-20">SGS</span>
                                    </div>

                                    {/* Badge 2 */}
                                    <div className="relative group">
                                        <div className="w-20 h-20 border-[3px] border-orange-500 rounded-full flex items-center justify-center text-orange-500 bg-white z-10 relative">
                                            <CheckCircle className="w-8 h-8" />
                                        </div>
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-[10px] font-bold text-slate-500 whitespace-nowrap z-20">GMP</span>
                                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-2 text-[10px] font-bold text-slate-500 z-20">SGS</span>
                                    </div>

                                    {/* Badge 3 */}
                                    <div className="relative group">
                                        <div className="w-20 h-20 border-[3px] border-orange-500 rounded-full flex items-center justify-center text-orange-500 bg-white z-10 relative">
                                            <CheckCircle className="w-8 h-8" />
                                        </div>
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-[10px] font-bold text-slate-500 whitespace-nowrap z-20">HACCP</span>
                                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-2 text-[10px] font-bold text-slate-500 z-20">SGS</span>
                                    </div>

                                    {/* Badge 4 */}
                                    <div className="relative group">
                                        <div className="w-20 h-20 border-[3px] border-orange-500 rounded-full flex items-center justify-center text-orange-500 bg-white z-10 relative">
                                            <CheckCircle className="w-8 h-8" />
                                        </div>
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-[10px] font-bold text-slate-500 whitespace-nowrap z-20">ISO 9001</span>
                                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-2 text-[10px] font-bold text-slate-500 z-20">SGS</span>
                                    </div>

                                    {/* Badge 5 */}
                                    <div className="relative group">
                                        <div className="w-20 h-20 border-[3px] border-orange-500 rounded-full flex items-center justify-center text-orange-500 bg-white z-10 relative">
                                            <CheckCircle className="w-8 h-8" />
                                        </div>
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-[10px] font-bold text-slate-500 whitespace-nowrap z-20">ISO 22000</span>
                                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-2 text-[10px] font-bold text-slate-500 z-20">SGS</span>
                                    </div>

                                    {/* UKAS Badge */}
                                    <div className="flex flex-col items-center justify-center w-20 h-24 border border-slate-300 p-2 bg-white">
                                        <div className="text-[10px] text-center font-bold">UKAS</div>
                                        <div className="text-[8px] text-center text-slate-500 leading-tight my-1">MANAGEMENT SYSTEMS</div>
                                        <div className="text-[10px] font-bold">0005</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Background Blob behind card */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-white/50 rounded-[4rem] -z-10 blur-xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}
