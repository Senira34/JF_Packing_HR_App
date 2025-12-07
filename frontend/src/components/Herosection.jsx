import { ArrowRight, Play, Users, CheckCircle, BarChart } from 'lucide-react';
import hrimage from '../assets/heroimg.jpeg'

export default function Herosection() {
  return (
    <div className="relative overflow-hidden bg-white font-['Poppins',sans-serif]">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-50/50 blur-3xl"></div>
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-50/50 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              HR Management Platform
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15] mb-6 tracking-tight">
              Empower Your <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-indigo-600">
                JF Packaging
              </span>
              <br className="hidden lg:block" />
              Workforce Potential
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Streamline operations, boost engagement, and make data-driven decisions with our all-in-one HR solution. Designed for modern teams.
            </p>




          </div>

          {/* Hero Image / Visuals */}
          <div className="flex-1 w-full relative lg:h-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-white">
              <img
                src={hrimage}
                alt="Modern Office Team"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Decorative Dots */}
          <div className="absolute -z-10 -bottom-10 -right-10 w-24 h-24 opacity-20">
            <div className="grid grid-cols-6 gap-2">
              {[...Array(36)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-blue-600 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
