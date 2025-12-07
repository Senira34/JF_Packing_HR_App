import React, { useState } from 'react';
import { Briefcase, ArrowLeft, CheckCircle, Phone, MapPin, Building2, User, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
// Importing the image directly if using a bundler like Vite usually requires import, or using /src/assets path if public.
// Since the user is using Vite, standard import is preferred, or absolute path from public.
// If manage.png is in src/assets, and we are in components, path is ../assets/manage.png.
import manageImage from '../assets/manager.jpeg';

export default function JobDetail({ selectedJob, onBack }) {
  const [showSupportModal, setShowSupportModal] = useState(false);

  if (!selectedJob) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 pt-32 font-['Poppins',sans-serif] relative">
      <button
        onClick={onBack}
        className="mb-8 text-slate-600 hover:text-blue-600 flex items-center gap-2 font-medium transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Open Positions
      </button>

      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
            <div className="p-4 bg-blue-50 rounded-xl">
              <Briefcase className="w-10 h-10 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">{selectedJob.title}</h1>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm font-medium rounded-full">
                  {selectedJob.department}
                </span>
                <span className="px-3 py-1 bg-green-50 text-green-700 text-sm font-medium rounded-full flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  Full Time
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Job Description</h2>
            <p className="text-slate-600 leading-relaxed mb-8">{selectedJob.description}</p>

            <h2 className="text-xl font-bold text-slate-900 mb-4">Key Responsibilities</h2>
            <ul className="space-y-3 text-slate-600 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5"></span>
                Lead and manage team operations effectively to ensure smooth workflow.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5"></span>
                Ensure strict compliance with international quality standards and certifications.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5"></span>
                Collaborate with cross-functional teams to drive innovation and efficiency.
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5"></span>
                Identify areas for improvement and drive continuous improvement initiatives.
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 flex-wrap">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/20">
                Apply for this Position
              </button>
              <button
                onClick={() => setShowSupportModal(true)}
                className="px-8 py-3 bg-slate-800 text-white hover:bg-slate-900 rounded-xl font-semibold transition-all shadow-lg shadow-slate-800/20 flex items-center gap-2"
              >
                <User className="w-5 h-5" />
                Support Partner Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Support Partner Modal */}
      <AnimatePresence>
        {showSupportModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSupportModal(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden z-10 flex flex-col md:flex-row"
            >
              {/* Left Content Section */}
              <div className="flex-1 p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Support Partner</h3>
                    <p className="text-slate-500">Dedicated support for this role</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                      <User className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-800">{selectedJob.supportPartner}</h4>
                      <span className="text-base text-slate-500 block">{selectedJob.department}</span>
                    </div>
                  </div>

                  <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <div className="flex items-center gap-4 text-slate-700">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        <MapPin className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Location</p>
                        <span className="font-medium">{selectedJob.floor}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-slate-700">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        <Building2 className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Extension</p>
                        <span className="font-medium">{selectedJob.extension}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-slate-700">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        <Phone className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Contact</p>
                        <span className="font-medium">{selectedJob.mobile}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowSupportModal(false)}
                    className="w-full py-4 bg-slate-900 hover:bg-black text-white font-semibold rounded-xl transition-all shadow-lg shadow-slate-900/10"
                  >
                    Close Details
                  </button>
                </div>
              </div>

              {/* Right Image Section */}
              <div className="w-full md:w-2/5 bg-slate-100 relative min-h-[300px] md:min-h-full">
                <img
                  src={manageImage}
                  alt="Manager"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                  <p className="text-white font-medium text-lg leading-tight">
                    "We are here to support your success in every step."
                  </p>
                </div>
                <button
                  onClick={() => setShowSupportModal(false)}
                  className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-md"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
