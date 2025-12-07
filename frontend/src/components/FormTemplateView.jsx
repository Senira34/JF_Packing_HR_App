import React from 'react';
import { FileText, Printer, Download, ArrowLeft } from 'lucide-react';

export default function FormTemplateView({ formName, onBack }) {

    const renderFormContent = () => {
        switch (formName) {
            case 'Leave Application':
                return (
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                <label className="text-xs font-bold text-slate-500 uppercase">Employee Name</label>
                                <div className="h-6 mt-1 bg-slate-200 rounded w-3/4 animate-pulse"></div>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                <label className="text-xs font-bold text-slate-500 uppercase">Employee ID</label>
                                <div className="h-6 mt-1 bg-slate-200 rounded w-1/2 animate-pulse"></div>
                            </div>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                            <label className="text-xs font-bold text-slate-500 uppercase">Leave Type</label>
                            <div className="flex gap-4 mt-2">
                                {['Annual', 'Casual', 'Sick', 'Unpaid'].map(type => (
                                    <div key={type} className="flex items-center gap-2">
                                        <div className="w-4 h-4 border-2 border-slate-300 rounded"></div>
                                        <span className="text-sm text-slate-600">{type}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                <label className="text-xs font-bold text-slate-500 uppercase">Start Date</label>
                                <div className="h-6 mt-1 bg-slate-200 rounded w-full animate-pulse"></div>
                            </div>
                            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                <label className="text-xs font-bold text-slate-500 uppercase">End Date</label>
                                <div className="h-6 mt-1 bg-slate-200 rounded w-full animate-pulse"></div>
                            </div>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 h-32">
                            <label className="text-xs font-bold text-slate-500 uppercase">Reason for Leave</label>
                            <div className="space-y-2 mt-2">
                                <div className="h-4 bg-slate-200 rounded w-full animate-pulse"></div>
                                <div className="h-4 bg-slate-200 rounded w-5/6 animate-pulse"></div>
                                <div className="h-4 bg-slate-200 rounded w-4/6 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                );

            case 'Expense Reimbursement':
                return (
                    <div className="space-y-6">
                        <div className="grid grid-cols-3 gap-4 font-bold text-sm text-slate-700 border-b border-slate-300 pb-2">
                            <span>Date</span>
                            <span>Description</span>
                            <span>Amount</span>
                        </div>
                        {[1, 2, 3].map(i => (
                            <div key={i} className="grid grid-cols-3 gap-4 items-center">
                                <div className="h-8 bg-slate-100 rounded border border-slate-200"></div>
                                <div className="h-8 bg-slate-100 rounded border border-slate-200"></div>
                                <div className="h-8 bg-slate-100 rounded border border-slate-200"></div>
                            </div>
                        ))}
                        <div className="flex justify-end pt-4 border-t border-slate-300">
                            <div className="w-1/3 bg-slate-100 p-3 rounded border border-slate-200 flex justify-between items-center">
                                <span className="font-bold text-slate-700">Total:</span>
                                <div className="h-6 w-20 bg-slate-200 rounded animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                );

            default:
                return (
                    <div className="flex flex-col items-center justify-center py-12 text-slate-400">
                        <FileText className="w-16 h-16 mb-4 opacity-50" />
                        <p>Standard Form Template Structure</p>
                        <div className="w-full max-w-md space-y-4 mt-8">
                            <div className="h-8 bg-slate-100 rounded w-full"></div>
                            <div className="h-8 bg-slate-100 rounded w-full"></div>
                            <div className="h-32 bg-slate-100 rounded w-full"></div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12 font-['Poppins',sans-serif]">
            <div className="max-w-4xl mx-auto px-4">

                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-6 transition-colors font-medium"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Back to Home
                </button>

                <div className="bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden relative">

                    {/* Watermark */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.03]">
                        <h1 className="text-9xl font-black -rotate-45">SAMPLE</h1>
                    </div>

                    {/* Banner */}
                    <div className="bg-slate-800 text-white p-6 flex justify-between items-center relative z-10">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                                <FileText className="w-8 h-8" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold">{formName}</h1>
                                <p className="text-slate-400 text-sm">Official Template Preview</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors" title="Print">
                                <Printer className="w-5 h-5" />
                            </button>
                            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors" title="Download">
                                <Download className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Form Content */}
                    <div className="p-8 md:p-12 relative z-10 min-h-[500px]">
                        {renderFormContent()}

                        <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-end text-slate-400 text-sm">
                            <div>
                                <p>JF Packaging Ltd.</p>
                                <p>Internal Document</p>
                            </div>
                            <div>
                                <div className="h-12 w-32 border-b border-slate-300 mb-2"></div>
                                <p>Signature</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
