import React, { useState } from 'react';
import { Calendar, FileText, Send, CheckCircle } from 'lucide-react';

export default function ApplyLeave() {
    const [formData, setFormData] = useState({
        leaveType: 'Annual Leave',
        startDate: '',
        endDate: '',
        reason: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally send the data to a backend
        console.log('Leave Application Submitted:', formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000); // Reset after 3 seconds
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12 font-['Poppins',sans-serif]">
            <div className="max-w-3xl mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-100/50">
                        <FileText className="w-8 h-8" />
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Apply for Leave</h1>
                    <p className="text-slate-600 text-lg">Submit your leave request for approval.</p>
                </div>

                {/* Form Container */}
                <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 relative overflow-hidden">

                    {submitted && (
                        <div className="absolute inset-x-0 top-0 bg-green-500 text-white p-4 text-center font-semibold transition-transform animate-in slide-in-from-top-full">
                            <div className="flex items-center justify-center gap-2">
                                <CheckCircle className="w-5 h-5" />
                                Leave Application Submitted Successfully!
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-8">

                        {/* Leave Type */}
                        <div className="space-y-4">
                            <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide">Leave Type</label>
                            <div className="relative">
                                <select
                                    name="leaveType"
                                    value={formData.leaveType}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none appearance-none font-medium text-slate-700"
                                >
                                    <option>Annual Leave</option>
                                    <option>Casual Leave</option>
                                    <option>Sick Leave</option>
                                    <option>Maternity/Paternity Leave</option>
                                    <option>Unpaid Leave</option>
                                </select>
                                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                            </div>
                        </div>

                        {/* Dates Row */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide">Start Date</label>
                                <div className="relative">
                                    <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input
                                        type="date"
                                        name="startDate"
                                        value={formData.startDate}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-14 pr-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none font-medium text-slate-700"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide">End Date</label>
                                <div className="relative">
                                    <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input
                                        type="date"
                                        name="endDate"
                                        value={formData.endDate}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-14 pr-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none font-medium text-slate-700"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Reason */}
                        <div className="space-y-4">
                            <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide">Reason</label>
                            <textarea
                                name="reason"
                                value={formData.reason}
                                onChange={handleChange}
                                required
                                rows="4"
                                placeholder="Please describe the reason for your leave..."
                                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all outline-none font-medium text-slate-700"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xl shadow-blue-600/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
                        >
                            <Send className="w-5 h-5" />
                            Submit Request
                        </button>

                    </form>
                </div>

            </div>
        </div>
    );
}
