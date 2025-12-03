import React from 'react'
import { Home, Users, Briefcase, FileText, HelpCircle, LogOut, ChevronDown, Menu, X } from 'lucide-react'

export default function Navbar({ setIsLoggedIn, setCurrentPage, setSelectedJob, departments, jobs, forms, helpDeskCategories }) {
    const navLinks = [
        { name: 'Home', icon: Home, hasDropdown: false },
        { name: 'Departments', icon: Users, hasDropdown: true, items: departments },
        { name: 'Jobs', icon: Briefcase, hasDropdown: true, items: jobs?.map(j => j.title) },
        { name: 'Forms', icon: FileText, hasDropdown: true, items: forms },
        { name: 'HelpDesk', icon: HelpCircle, hasDropdown: true, items: helpDeskCategories }
    ];

    const [hoveredMenu, setHoveredMenu] = React.useState(null)
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
  return (
    <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 font-['Poppins',sans-serif] ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "bg-transparent py-4 md:py-6 text-gray-800"}`}>
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => { setCurrentPage('home'); setSelectedJob(null); }}>
            <h1 className="text-2xl font-bold text-slate-900">JF Packaging HR</h1>
        </div>

        {/* Desktop Nav */}
        <div className={`max-md:fixed max-md:top-0 max-md:left-0 max-md:h-full max-md:bg-white/95 max-md:backdrop-blur max-md:flex-col max-md:justify-center transition-all duration-300 ${isMenuOpen ? 'max-md:w-full' : 'max-md:w-0 max-md:overflow-hidden'} md:flex items-center gap-8 font-medium`}>
            {/* Close button for mobile */}
            <button 
                onClick={() => setIsMenuOpen(false)}
                className="md:hidden absolute top-4 right-4 bg-gray-800 hover:bg-black text-white p-2 rounded-md transition"
            >
                <X className="w-6 h-6" />
            </button>

            {navLinks.map((link, i) => (
                <div
                    key={i}
                    className="relative group max-md:w-full max-md:text-center"
                    onMouseEnter={() => link.hasDropdown && setHoveredMenu(link.name)}
                    onMouseLeave={() => setHoveredMenu(null)}
                >
                    <button
                        onClick={() => {
                            if (!link.hasDropdown) {
                                setCurrentPage('home');
                                setSelectedJob(null);
                                setIsMenuOpen(false);
                            }
                        }}
                        className={`flex items-center gap-1 hover:text-gray-600 transition-all ${isScrolled ? "text-gray-700" : "text-gray-800"}`}
                    >
                        <span>{link.name}</span>
                        {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                    </button>

                    {link.hasDropdown && hoveredMenu === link.name && (
                        <div className="absolute bg-white font-normal flex flex-col gap-2 w-max rounded-lg p-4 top-full left-0 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg mt-1 z-50">
                            {link.name === 'Jobs' ? (
                                link.items?.map((jobTitle, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            setSelectedJob(jobs.find(j => j.title === jobTitle));
                                            setCurrentPage('job-detail');
                                            setHoveredMenu(null);
                                            setIsMenuOpen(false);
                                        }}
                                        className="text-left hover:translate-x-1 hover:text-slate-500 transition-all"
                                    >
                                        {jobTitle}
                                    </button>
                                ))
                            ) : (
                                link.items?.map((subItem, idx) => (
                                    <div
                                        key={idx}
                                        className="hover:translate-x-1 hover:text-slate-500 transition-all cursor-pointer"
                                    >
                                        {subItem}
                                    </div>
                                ))
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
            <button
                onClick={() => setIsLoggedIn(false)}
                className="hidden md:block bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-full font-medium transition"
            >
                Logout
            </button>

            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden bg-gray-800 hover:bg-black text-white p-2 rounded-md transition"
            >
                <Menu className="w-6 h-6" />
            </button>
        </div>
    </nav>
  )
}
