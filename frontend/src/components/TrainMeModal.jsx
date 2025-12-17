import React, { useState } from 'react';
import { X, PlayCircle, MonitorPlay, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TrainMeModal({ isOpen, onClose, jobTitle, videos = [] }) {
    const [selectedVideo, setSelectedVideo] = useState(null);

    // If no videos are available, we can show a placeholder or nothing
    const hasVideos = videos && videos.length > 0;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-['Poppins',sans-serif]">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl h-[80vh] overflow-hidden flex flex-col md:flex-row z-10"
                    >
                        {/* Header for Mobile (shows above split view) */}
                        <div className="md:hidden p-4 border-b flex justify-between items-center bg-white">
                            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                <Youtube className="w-6 h-6 text-red-600" />
                                Training: {jobTitle}
                            </h3>
                            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full">
                                <X className="w-6 h-6 text-slate-500" />
                            </button>
                        </div>

                        {/* Left/Top Side: Video Player */}
                        <div className="flex-1 bg-black relative flex items-center justify-center bg-slate-900">
                            {selectedVideo ? (
                                <div className="w-full h-full flex flex-col">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                                        title={selectedVideo.title}
                                        className="w-full h-full aspect-video"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            ) : (
                                <div className="text-center p-8 text-slate-400">
                                    <MonitorPlay className="w-16 h-16 mx-auto mb-4 opacity-50" />
                                    <p className="text-lg font-medium">Select a video to start training</p>
                                    <p className="text-sm mt-2 opacity-75">Browse the playlist on the right</p>
                                </div>
                            )}
                        </div>

                        {/* Right/Bottom Side: Playlist */}
                        <div className="w-full md:w-96 bg-white border-l border-slate-200 flex flex-col">
                            <div className="hidden md:flex p-6 border-b border-slate-100 justify-between items-center bg-white sticky top-0 z-10">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900">Training Playlist</h3>
                                    <p className="text-sm text-slate-500">{jobTitle}</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                                {hasVideos ? (
                                    videos.map((video, index) => (
                                        <div
                                            key={video.id || index}
                                            onClick={() => setSelectedVideo(video)}
                                            className={`group cursor-pointer p-3 rounded-xl flex gap-4 transition-all duration-300 ${selectedVideo?.id === video.id
                                                    ? 'bg-blue-50 border-blue-200 ring-1 ring-blue-200'
                                                    : 'hover:bg-slate-50 border border-transparent hover:border-slate-200'
                                                }`}
                                        >
                                            <div className="relative w-32 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-slate-200">
                                                <img
                                                    src={video.thumbnail}
                                                    alt={video.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                                    <PlayCircle className={`w-8 h-8 ${selectedVideo?.id === video.id ? 'text-blue-600' : 'text-white'
                                                        } drop-shadow-md`} />
                                                </div>
                                            </div>
                                            <div className="flex-1 min-w-0 py-1">
                                                <h4 className={`text-sm font-semibold line-clamp-2 mb-1 ${selectedVideo?.id === video.id ? 'text-blue-700' : 'text-slate-700'
                                                    }`}>
                                                    {video.title}
                                                </h4>
                                                <p className="text-xs text-slate-500 flex items-center gap-1">
                                                    <Youtube className="w-3 h-3" />
                                                    Watch Now
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-12 text-slate-500">
                                        <p>No training videos available for this role yet.</p>
                                    </div>
                                )}
                            </div>

                            <div className="p-4 border-t border-slate-100 bg-slate-50">
                                <p className="text-xs text-center text-slate-400">
                                    Powered by JF Packing Learning Hub
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
