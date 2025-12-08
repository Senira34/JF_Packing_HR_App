import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function WhoWeAre() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4 py-20 max-w-7xl mx-auto">
            <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
                <img className="max-w-md w-full object-cover rounded-2xl"
                    src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=451&h=451&auto=format&fit=crop"
                    alt="" />

            </div>
            <div className="text-sm text-slate-600 max-w-lg">
                <h1 className="text-xl uppercase font-semibold text-slate-700">Who we are?</h1>
                <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
                <p className="mt-8">PrimeFlex Packaging Pvt Ltd welcomes you to a world of high-quality packaging with a conscience. We lay great emphasis on delivering world-standard product packaging and preserving the environment, starting with our own pristine surroundings in which our complex is located. </p>
                <button className="flex items-center gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-indigo-600 to-[#8A7DFF] py-3 px-8 rounded-full text-white">
                    <span>Read more</span>
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                            fill="#fff" />
                    </svg>
                </button>
            </div>
        </section>
    );
}
