import React from 'react';
import { jobs } from '../data/mockData';
import { Phone, MapPin, Briefcase, User, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const SupportPartnerView = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8 pt-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h2 className="text-4xl font-bold text-slate-800 mb-2">Support Partners</h2>
                        <p className="text-slate-500 text-lg">Contact details for operational support across departments</p>
                    </div>
                    <button
                        onClick={onBack}
                        className="px-6 py-2 bg-white text-slate-700 font-medium rounded-full shadow-sm hover:shadow-md transition-all border border-slate-200"
                    >
                        Back to Home
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobs.map((job, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            key={job.id}
                            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    <User className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-600 rounded-full">
                                    {job.department}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-800 mb-1">{job.supportPartner}</h3>
                            <div className="flex items-center gap-2 text-slate-500 mb-4 text-sm">
                                <Briefcase className="w-4 h-4" />
                                <span>Supporting: {job.title}</span>
                            </div>

                            <div className="space-y-3 pt-4 border-t border-slate-100">
                                <div className="flex items-center gap-3 text-slate-600">
                                    <MapPin className="w-4 h-4 text-slate-400" />
                                    <span className="text-sm">{job.floor}</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-600">
                                    <Building2 className="w-4 h-4 text-slate-400" />
                                    <span className="text-sm">Ext: {job.extension}</span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-600">
                                    <Phone className="w-4 h-4 text-slate-400" />
                                    <span className="text-sm font-medium">{job.mobile}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SupportPartnerView;
