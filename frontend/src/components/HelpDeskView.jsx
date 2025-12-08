import React, { useState } from 'react';
import { Monitor, HelpCircle, Wrench, Phone, Mail, Send, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

export default function HelpDeskView({ category, onBack }) {
    const [ticketForm, setTicketForm] = useState({ subject: '', priority: 'Medium', description: '' });

    const renderContent = () => {
        switch (category) {
            case 'IT Support':
                return (
                    <div className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                <h3 className="text-lg font-bold text-blue-900 mb-2 flex items-center gap-2">
                                    <Phone className="w-5 h-5" /> IT Hotline
                                </h3>
                                <p className="text-blue-700 text-2xl font-bold">Ext. 5050</p>
                                <p className="text-blue-600 text-sm mt-1">Available 8:00 AM - 5:00 PM</p>
                            </div>
                            <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                                <h3 className="text-lg font-bold text-indigo-900 mb-2 flex items-center gap-2">
                                    <Mail className="w-5 h-5" /> IT Support Email
                                </h3>
                                <p className="text-indigo-700 text-xl font-bold">itsupport@primeflexpackaging.com</p>
                                <p className="text-indigo-600 text-sm mt-1">Response time: &lt; 2 hours</p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Raise a Support Ticket</h3>
                            <form onSubmit={(e) => { e.preventDefault(); alert("Ticket Created!"); }} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Subject</label>
                                        <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g. Printer not working" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Priority</label>
                                        <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500">
                                            <option>Low</option>
                                            <option>Medium</option>
                                            <option>High</option>
                                            <option>Critical</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Description</label>
                                    <textarea rows="4" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" placeholder="Describe the issue..."></textarea>
                                </div>
                                <button className="w-full md:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all">
                                    Submit Ticket
                                </button>
                            </form>
                        </div>
                    </div>
                );

            case 'HR Queries':
                return (
                    <div className="space-y-8">
                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Quick Contacts */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 col-span-1">
                                <h3 className="text-lg font-bold text-slate-900 mb-4">HR Contacts</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-600"><Phone className="w-4 h-4" /></div>
                                        <div><p className="font-medium text-slate-800">Payroll</p><p className="text-xs text-slate-500">Ext. 2020</p></div>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600"><Phone className="w-4 h-4" /></div>
                                        <div><p className="font-medium text-slate-800">Recruitment</p><p className="text-xs text-slate-500">Ext. 2021</p></div>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600"><Mail className="w-4 h-4" /></div>
                                        <div><p className="font-medium text-slate-800">General HR</p><p className="text-xs text-slate-500">hr@primeflexpackaging.com</p></div>
                                    </li>
                                </ul>
                            </div>

                            {/* FAQs */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 col-span-2">
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Frequently Asked Questions</h3>
                                <div className="space-y-3">
                                    <details className="group bg-slate-50 rounded-xl p-4 transition-all open:bg-blue-50">
                                        <summary className="flex justify-between items-center cursor-pointer font-medium text-slate-700 list-none">
                                            How do I apply for leave?
                                            <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                                        </summary>
                                        <p className="text-slate-600 mt-3 text-sm leading-relaxed">
                                            You can apply for leave through the "HR IS" section in the HelpDesk menu. Select "Apply Leave" and fill out the form.
                                        </p>
                                    </details>
                                    <details className="group bg-slate-50 rounded-xl p-4 transition-all open:bg-blue-50">
                                        <summary className="flex justify-between items-center cursor-pointer font-medium text-slate-700 list-none">
                                            When is the salary credited?
                                            <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                                        </summary>
                                        <p className="text-slate-600 mt-3 text-sm leading-relaxed">
                                            Salaries are credited on the last working day of every month. Payslips are available in the HR IS portal.
                                        </p>
                                    </details>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Ask HR</h3>
                            <form onSubmit={(e) => { e.preventDefault(); alert("Query Sent!"); }} className="space-y-4">
                                <textarea rows="3" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-pink-500" placeholder="Type your query..."></textarea>
                                <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl transition-all">Submit Query</button>
                            </form>
                        </div>
                    </div>
                );

            case 'Facilities Management':
                return (
                    <div className="space-y-8">
                        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-bold text-amber-900 mb-1 flex items-center gap-2"><Wrench className="w-5 h-5" /> Emergency Maintenance</h3>
                                <p className="text-amber-700">For urgent issues (water leaks, power outage), call immediately.</p>
                            </div>
                            <div className="text-right">
                                <p className="text-3xl font-bold text-amber-800">Ext. 9110</p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Report a Facility Issue</h3>
                            <form onSubmit={(e) => { e.preventDefault(); alert("Maintenance Request Submitted!"); }} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Location</label>
                                        <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-amber-500" placeholder="e.g. 2nd Floor Washroom" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700">Issue Type</label>
                                        <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-amber-500">
                                            <option>Electrical</option>
                                            <option>Plumbing</option>
                                            <option>Furniture</option>
                                            <option>AC / HVAC</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Description</label>
                                    <textarea rows="4" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-amber-500" placeholder="Describe the problem..."></textarea>
                                </div>
                                <button className="w-full md:w-auto px-8 py-3 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-xl transition-all">
                                    Submit Request
                                </button>
                            </form>
                        </div>
                    </div>
                );

            case 'General Inquiries':
                return (
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center">
                            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <MapPin className="w-10 h-10 text-slate-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-2">PrimeFlex Packaging Pvt Ltd</h2>
                            <p className="text-slate-600 max-w-md mx-auto">No. 123, Industrial Zone, Biyagama, Sri Lanka.</p>
                            <div className="flex justify-center gap-6 mt-6">
                                <a href="tel:+94112345678" className="flex items-center gap-2 text-slate-700 hover:text-blue-600 font-medium bg-slate-50 px-4 py-2 rounded-lg transition-colors">
                                    <Phone className="w-4 h-4" /> +94 11 234 5678
                                </a>
                                <a href="mailto:info@primeflexpackaging.com" className="flex items-center gap-2 text-slate-700 hover:text-blue-600 font-medium bg-slate-50 px-4 py-2 rounded-lg transition-colors">
                                    <Mail className="w-4 h-4" /> info@primeflexpackaging.com
                                </a>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Us</h3>
                            <form onSubmit={(e) => { e.preventDefault(); alert("Message Sent!"); }} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
                                    <input type="email" placeholder="Your Email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <textarea rows="4" placeholder="How can we help?" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                                <button className="w-full px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2">
                                    <Send className="w-5 h-5" /> Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                );

            default:
                return <div className="p-8 text-center text-slate-500">Select a category</div>;
        }
    };

    const getIcon = () => {
        switch (category) {
            case 'IT Support': return <Monitor className="w-8 h-8 text-blue-600" />;
            case 'HR Queries': return <HelpCircle className="w-8 h-8 text-pink-600" />;
            case 'Facilities Management': return <Wrench className="w-8 h-8 text-amber-600" />;
            case 'General Inquiries': return <Phone className="w-8 h-8 text-green-600" />;
            default: return <HelpCircle className="w-8 h-8 text-slate-600" />;
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12 font-['Poppins',sans-serif]">
            <div className="max-w-4xl mx-auto px-4">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-6 transition-colors font-medium"
                >
                    <ChevronDown className="w-5 h-5 rotate-90" />
                    Back to Home
                </button>

                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                        {getIcon()}
                    </div>
                    <h1 className="text-3xl font-bold text-slate-900">{category}</h1>
                </div>

                {renderContent()}

            </div>
        </div>
    );
}
