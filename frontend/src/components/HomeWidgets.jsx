import React from 'react';
import { Briefcase, FileText, Users, ArrowRight } from 'lucide-react';
import { jobs, departments, forms } from '../data/mockData';

export default function HomeWidgets({ onJobClick, onViewAllJobs }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 font-['Poppins',sans-serif]">

      {/* Open Positions Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Open Positions</h2>
            <p className="text-slate-600 mt-2">Join our growing team and make an impact.</p>
          </div>
          <button
            onClick={onViewAllJobs}
            className="hidden sm:flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition"
          >
            View All Jobs <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.slice(0, 3).map((job) => (
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

        <button
          onClick={onViewAllJobs}
          className="w-full sm:hidden mt-6 flex items-center justify-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition"
        >
          View All Jobs <ArrowRight className="w-5 h-5" />
        </button>
      </section>

      {/* Quick Actions & Departments Grid */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Departments */}
      {/* <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Users className="w-6 h-6 text-indigo-600" />
            Our Departments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {departments.map((dept, index) => (
              <div key={index} className="flex items-center p-4 bg-white border border-slate-100 rounded-xl hover:border-indigo-100 hover:shadow-md hover:shadow-indigo-50 transition-all cursor-pointer group">
                <div className="w-2 h-2 rounded-full bg-indigo-400 mr-3 group-hover:scale-125 transition-transform"></div>
                <span className="font-medium text-slate-700 group-hover:text-indigo-700 transition-colors">
                  {dept}
                </span>
              </div>
            ))}
          </div>
        </section> */}

      {/* Quick Forms
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <FileText className="w-6 h-6 text-emerald-600" />
            Quick Forms
          </h2>
          <div className="space-y-3">
            {forms.map((form, index) => (
              <a key={index} href="#" className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl hover:border-emerald-100 hover:shadow-md hover:shadow-emerald-50 transition-all group">
                <span className="font-medium text-slate-700 group-hover:text-emerald-700 transition-colors">
                  {form}
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
        </section> 

      </div>*/}
    </div>
  );
}
