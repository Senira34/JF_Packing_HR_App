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
                            <h2 className="text-4xl md:text-5xl font-bold text-blue-600 tracking-tight">
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
                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                    <span>Member</span>
                                </div>

                                {/* Certification Badges Row */}
                                <div className="flex flex-wrap justify-center gap-6">
                                    {/* Badge 1 */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-16 h-16 md:w-20 md:h-20 border-4 border-blue-500 rounded-full flex items-center justify-center text-blue-500 font-bold text-sm relative">
                                            <CheckCircle className="w-8 h-8" />
                                            <span className="absolute -bottom-2 text-[10px] bg-white px-1 text-slate-500">SGS</span>
                                            <span className="absolute -top-2 text-[8px] bg-white px-1 text-slate-400 rotate-[-45deg] left-0 origin-bottom-right">FSSC 20000</span>
                                        </div>
                                    </div>
                                    {/* Badge 2 */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-16 h-16 md:w-20 md:h-20 border-4 border-blue-500 rounded-full flex items-center justify-center text-blue-500 font-bold text-sm relative">
                                            <CheckCircle className="w-8 h-8" />
                                            <span className="absolute -bottom-2 text-[10px] bg-white px-1 text-slate-500">SGS</span>
                                            <span className="absolute -top-2 text-[8px] bg-white px-1 text-slate-400">GMP</span>
                                        </div>
                                    </div>
                                    {/* Badge 3 */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-16 h-16 md:w-20 md:h-20 border-4 border-blue-500 rounded-full flex items-center justify-center text-blue-500 font-bold text-sm relative">
                                            <CheckCircle className="w-8 h-8" />
                                            <span className="absolute -bottom-2 text-[10px] bg-white px-1 text-slate-500">SGS</span>
                                            <span className="absolute -top-2 text-[8px] bg-white px-1 text-slate-400">HACCP</span>
                                        </div>
                                    </div>
                                </div>

                                {/* ISO Badges Row */}
                                <div className="flex flex-wrap justify-center gap-6">
                                    {/* Badge 4 */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-16 h-16 md:w-20 md:h-20 border-4 border-blue-500 rounded-full flex items-center justify-center text-blue-500 font-bold text-sm relative">
                                            <CheckCircle className="w-8 h-8" />
                                            <span className="absolute -bottom-2 text-[10px] bg-white px-1 text-slate-500">SGS</span>
                                            <span className="absolute -top-2 text-[8px] bg-white px-1 text-slate-400 rotate-[-45deg] left-0 origin-bottom-right">ISO 9001</span>
                                        </div>
                                    </div>
                                    {/* Badge 5 */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-16 h-16 md:w-20 md:h-20 border-4 border-blue-500 rounded-full flex items-center justify-center text-blue-500 font-bold text-sm relative">
                                            <CheckCircle className="w-8 h-8" />
                                            <span className="absolute -bottom-2 text-[10px] bg-white px-1 text-slate-500">SGS</span>
                                            <span className="absolute -top-2 text-[8px] bg-white px-1 text-slate-400">ISO 22000</span>
                                        </div>
                                    </div>
                                    {/* UKAS Badge */}
                                    <div className="flex flex-col items-center justify-center w-16 h-20 md:w-20 md:h-24 border border-slate-300 p-2">
                                        <div className="text-[10px] text-center font-bold">UKAS</div>
                                        <div className="text-[8px] text-center text-slate-500">MANAGEMENT SYSTEMS</div>
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
