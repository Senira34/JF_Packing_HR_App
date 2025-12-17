import React, { useState } from 'react';
import { Briefcase, ArrowLeft, CheckCircle, Phone, MapPin, Building2, User, X, Upload, MessageSquare, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import manageImage from '../assets/manager.jpeg';
import TrainMeModal from './TrainMeModal';

export default function JobDetail({ selectedJob, onBack }) {
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [showMsgModal, setShowMsgModal] = useState(false);
  const [showCertModal, setShowCertModal] = useState(false);
  const [showTrainMeModal, setShowTrainMeModal] = useState(false);

  if (!selectedJob) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 pt-24 lg:pt-32 font-['Poppins',sans-serif] relative">
      <button
        onClick={onBack}
        className="mb-8 text-slate-600 hover:text-blue-600 flex items-center gap-2 font-medium transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Open Positions
      </button>

      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="p-6 md:p-8 lg:p-10">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-blue-50 rounded-xl">
                <Briefcase className="w-10 h-10 text-blue-600" />
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">{selectedJob.title}</h1>
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

            <button
              onClick={() => setShowTrainMeModal(true)}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95 whitespace-nowrap"
            >
              <Youtube className="w-5 h-5" />
              Train Me
            </button>
          </div>

          <div className="border-t border-slate-100 pt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-8">
              {/* Left Column: Description & Qualifications */}
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">Job Description</h2>
                <p className="text-slate-600 leading-relaxed mb-8">{selectedJob.description}</p>

                {selectedJob.qualifications && selectedJob.qualifications.length > 0 && (
                  <>
                    <h2 className="text-xl font-bold text-slate-900 mb-4">Qualifications</h2>
                    <ul className="space-y-3 text-slate-600 mb-8">
                      {selectedJob.qualifications.map((qualification, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5"></span>
                          {qualification}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              {/* Right Column: Key Responsibilities */}
              <div>
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
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-3 pt-4 items-center w-full border-t border-slate-100 mt-8">
              <button
                onClick={() => setShowApplyModal(true)}
                className="flex-1 w-full lg:w-auto px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/20 text-sm whitespace-nowrap justify-center"
              >
                Apply for this Position
              </button>
              <button
                onClick={() => setShowSupportModal(true)}
                className="flex-1 w-full lg:w-auto px-4 py-3 bg-slate-800 text-white hover:bg-slate-900 rounded-xl font-semibold transition-all shadow-lg shadow-slate-800/20 flex items-center justify-center gap-2 text-sm whitespace-nowrap"
              >
                <User className="w-5 h-5" />
                Support Partner Details
              </button>
              <button
                onClick={() => setShowCertModal(true)}
                className="flex-1 w-full lg:w-auto px-4 py-3 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl font-semibold transition-all shadow-lg shadow-slate-200/20 flex items-center justify-center gap-2 text-sm whitespace-nowrap"
              >
                <Upload className="w-5 h-5" />
                Upload Certificates
              </button>
            </div>
          </div>
        </div>
      </div>

      <TrainMeModal
        isOpen={showTrainMeModal}
        onClose={() => setShowTrainMeModal(false)}
        jobTitle={selectedJob.title}
        videos={selectedJob.trainingVideos}
      />

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
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto z-10 flex flex-col md:flex-row"
            >
              {/* Left Content Section */}
              <div className="flex-1 p-8">
                <div className="flex justify-between items-start mb-6 w-full">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Support Partner</h3>
                    <p className="text-slate-500">Dedicated support for this role</p>
                  </div>
                  <button
                    onClick={() => setShowSupportModal(false)}
                    className="p-2 hover:bg-slate-100 rounded-full transition-colors md:hidden"
                  >
                    <X className="w-6 h-6 text-slate-500" />
                  </button>
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

                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={() => setShowMsgModal(true)}
                      className="flex-1 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-5 h-5" />
                      Send Message
                    </button>
                    <button
                      onClick={() => setShowSupportModal(false)}
                      className="flex-1 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-all"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Image Section */}
              <div className="hidden md:block w-full md:w-2/5 bg-slate-100 relative h-auto md:min-h-full">
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
                  className="hidden md:block absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-md"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Apply Job Modal */}
      <AnimatePresence>
        {showApplyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowApplyModal(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">Apply for this Position</h3>
                    <p className="text-slate-500">Share your details and CV with us</p>
                  </div>
                  <button
                    onClick={() => setShowApplyModal(false)}
                    className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-slate-500" />
                  </button>
                </div>

                <form onSubmit={(e) => {
                  e.preventDefault();
                  setShowApplyModal(false);
                  alert("Application Submitted Successfully!");
                }} className="space-y-6">

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-700">Full Name</label>
                      <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-700">Email Address</label>
                      <input type="email" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-700">Phone Number</label>
                      <input type="tel" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="+94 77 123 4567" />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-700">Portfolio / LinkedIn</label>
                      <input type="url" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="https://linkedin.com/in/..." />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700">Upload CV / Resume</label>
                    <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer group">
                      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Upload className="w-6 h-6" />
                      </div>
                      <p className="text-sm font-medium text-slate-700">Click to upload or drag and drop</p>
                      <p className="text-xs text-slate-400 mt-1">PDF, DOCX (Max 5MB)</p>
                      <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 transition-all active:scale-[0.98]">
                      Submit Application
                    </button>
                  </div>

                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Message Modal */}
      <AnimatePresence>
        {showMsgModal && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowMsgModal(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto z-10"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-slate-900">Send Message</h3>
                  <button onClick={() => setShowMsgModal(false)} className="p-2 hover:bg-slate-100 rounded-full">
                    <X className="w-5 h-5 text-slate-500" />
                  </button>
                </div>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  setShowMsgModal(false);
                  alert("Message Sent Successfully!");
                }} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Subject</label>
                    <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" placeholder="Inquiry about..." />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Message</label>
                    <textarea required rows="4" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" placeholder="Type your message here..."></textarea>
                  </div>
                  <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20">
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Upload Certificates Modal */}
      <AnimatePresence>
        {showCertModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCertModal(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto z-10"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-slate-900">Upload Certificates</h3>
                  <button onClick={() => setShowCertModal(false)} className="p-2 hover:bg-slate-100 rounded-full">
                    <X className="w-5 h-5 text-slate-500" />
                  </button>
                </div>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  setShowCertModal(false);
                  alert("Certificates Uploaded Successfully!");
                }} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Certificate Name</label>
                    <input type="text" required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g. Degree Certificate" />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700">Upload File</label>
                    <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:bg-slate-50 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                      <p className="text-sm font-medium text-slate-700">Click or drag file here</p>
                      <p className="text-xs text-slate-400">PDF, JPG, PNG (Max 5MB)</p>
                      <input type="file" className="hidden" accept=".pdf,.jpg,.png" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Additional Comments</label>
                    <textarea rows="2" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" placeholder="Any details..."></textarea>
                  </div>
                  <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20">
                    Submit Certificates
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
