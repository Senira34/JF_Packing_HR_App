import React from 'react';
import { Briefcase, ArrowLeft, CheckCircle } from 'lucide-react';

export default function JobDetail({ selectedJob, onBack }) {
  if (!selectedJob) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 pt-32 font-['Poppins',sans-serif] ">
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

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/20">
                Apply for this Position
              </button>
              <button className="px-8 py-3 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl font-semibold transition-all">
                Share Job
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
