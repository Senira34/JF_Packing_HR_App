import React from 'react';
import { Briefcase, ArrowLeft } from 'lucide-react';
import { jobs } from '../data/mockData';

export default function Jobs({ onJobClick, onBack }) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 font-['Poppins',sans-serif]">
            <div className="mb-8">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors mb-4"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Home
                </button>
                <h1 className="text-3xl font-bold text-slate-900">All Open Positions</h1>
                <p className="text-slate-600 mt-2">Explore all available opportunities and join our team.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.map((job) => (
                    <div key={job.id} className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                            <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                                <Briefcase className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                                {job.department}
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {job.title}
                        </h3>
                        <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                            {job.description}
                        </p>
                        <button
                            onClick={() => onJobClick && onJobClick(job)}
                            className="w-full py-2.5 rounded-lg border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
