import React from 'react';
import { Clock, Calendar, AlertCircle, CheckCircle } from 'lucide-react';

export default function TimeSheet() {
    // Mock data for attendance
    const attendanceData = [
        { date: '2023-10-01', inTime: '08:00 AM', outTime: '05:00 PM', totalHours: '9h', status: 'Present' },
        { date: '2023-10-02', inTime: '08:15 AM', outTime: '05:15 PM', totalHours: '9h', status: 'Present' },
        { date: '2023-10-03', inTime: '08:00 AM', outTime: '04:30 PM', totalHours: '8.5h', status: 'Early Leave' },
        { date: '2023-10-04', inTime: '-', outTime: '-', totalHours: '-', status: 'Absent' },
        { date: '2023-10-05', inTime: '08:00 AM', outTime: '05:00 PM', totalHours: '9h', status: 'Present' },
        // Add more mock data as needed
        { date: '2023-10-06', inTime: '08:05 AM', outTime: '05:05 PM', totalHours: '9h', status: 'Present' },
        { date: '2023-10-07', inTime: '-', outTime: '-', totalHours: '-', status: 'Weekend' },
        { date: '2023-10-08', inTime: '-', outTime: '-', totalHours: '-', status: 'Weekend' },
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'Present': return 'bg-green-100 text-green-700';
            case 'Absent': return 'bg-red-100 text-red-700';
            case 'Early Leave': return 'bg-yellow-100 text-yellow-700';
            case 'Weekend': return 'bg-slate-100 text-slate-500';
            default: return 'bg-slate-100 text-slate-700';
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12 font-['Poppins',sans-serif]">
            <div className="max-w-6xl mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                                <Clock className="w-8 h-8 text-blue-600" />
                                My Time Sheet
                            </h1>
                            <p className="text-slate-500 mt-2">View your attendance details for this month.</p>
                        </div>
                        <div className="flex items-center gap-4 bg-blue-50 px-6 py-3 rounded-xl border border-blue-100">
                            <Calendar className="w-5 h-5 text-blue-600" />
                            <span className="font-semibold text-blue-700">October 2023</span>
                        </div>
                    </div>
                </div>

                {/* Attendance Table */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-100 text-slate-600 uppercase text-sm font-semibold tracking-wider">
                                    <th className="p-6">Date</th>
                                    <th className="p-6">In Time</th>
                                    <th className="p-6">Out Time</th>
                                    <th className="p-6">Total Hours</th>
                                    <th className="p-6">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {attendanceData.map((record, index) => (
                                    <tr key={index} className="hover:bg-slate-50 transition-colors">
                                        <td className="p-6 font-medium text-slate-800">{record.date}</td>
                                        <td className="p-6 text-slate-600">{record.inTime}</td>
                                        <td className="p-6 text-slate-600">{record.outTime}</td>
                                        <td className="p-6 text-slate-600">{record.totalHours}</td>
                                        <td className="p-6">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${getStatusColor(record.status)}`}>
                                                {record.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}
