import React from 'react'
import { Home, Users, Briefcase, FileText, HelpCircle, LogOut, ChevronDown, Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

export default function Navbar({ setIsLoggedIn, setCurrentPage, setSelectedJob, setSelectedForm, setSelectedHelpDeskCategory, departments, jobs, forms, helpDeskCategories }) {
    const navLinks = [
        { name: 'Home', icon: Home, hasDropdown: false },
        { name: 'Departments', icon: Users, hasDropdown: true, items: departments },
        { name: 'Jobs', icon: Briefcase, hasDropdown: true, items: jobs?.map(j => j.title) },
        { name: 'Forms', icon: FileText, hasDropdown: true, items: forms },
        { name: 'HelpDesk', icon: HelpCircle, hasDropdown: true, items: helpDeskCategories },
        { name: 'About Us', icon: Users, hasDropdown: false }
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
                <img src={logo} alt="PrimeFlex Packaging Logo" className="h-8 md:h-10 lg:h-12 w-auto transition-all duration-300 background-invert" />
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
                        className="relative group max-md:w-full max-md:border-b max-md:border-slate-100 last:border-none"
                        onMouseEnter={() => window.innerWidth >= 768 && link.hasDropdown && setHoveredMenu(link.name)}
                        onMouseLeave={() => window.innerWidth >= 768 && setHoveredMenu(null)}
                    >
                        <button
                            onClick={() => {
                                if (link.hasDropdown) {
                                    // Toggle menu on mobile
                                    if (window.innerWidth < 768) {
                                        setHoveredMenu(hoveredMenu === link.name ? null : link.name);
                                    }
                                } else {
                                    if (link.name === 'About Us') {
                                        setCurrentPage('aboutus');
                                    } else {
                                        setCurrentPage('home');
                                    }
                                    setSelectedJob(null);
                                    setIsMenuOpen(false);
                                }
                            }}
                            className={`flex items-center justify-between md:justify-start gap-1 w-full md:w-auto p-4 md:p-0 hover:text-gray-600 transition-all ${isScrolled ? "text-gray-700" : "text-gray-800"}`}
                        >
                            <span className="font-semibold md:font-medium">{link.name}</span>
                            {link.hasDropdown && (
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${hoveredMenu === link.name ? 'rotate-180' : ''}`} />
                            )}
                        </button>

                        {/* Dropdown Menu */}
                        {link.hasDropdown && (
                            <div className={`
                                md:absolute md:bg-white md:shadow-lg md:rounded-lg md:w-max md:top-full md:left-0 md:mt-2
                                max-md:bg-slate-50 max-md:w-full max-md:overflow-hidden transition-all duration-300 ease-in-out
                                ${hoveredMenu === link.name ? 'max-md:max-h-[500px] opacity-100 translate-y-0 visible z-50' : 'max-md:max-h-0 md:opacity-0 md:translate-y-2 md:invisible max-md:opacity-100'}
                            `}>
                                <div className="p-2 md:p-3 flex flex-col gap-1">
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
                                                className="text-left w-full px-4 py-3 md:py-2 md:px-3 hover:bg-slate-100 md:hover:bg-slate-50 rounded-lg text-slate-600 hover:text-blue-600 transition-colors text-sm"
                                            >
                                                {jobTitle}
                                            </button>
                                        ))
                                    ) : (
                                        link.items?.map((subItem, idx) => {
                                            if (subItem === 'HR IS') {
                                                return (
                                                    <div key={idx} className="relative group/submenu w-full">
                                                        <button
                                                            className="flex items-center justify-between w-full text-left px-4 py-3 md:py-2 md:px-3 hover:bg-slate-100 md:hover:bg-slate-50 rounded-lg text-slate-600 hover:text-blue-600 transition-colors text-sm"
                                                        >
                                                            <span>{subItem}</span>
                                                            <span className="text-xs opacity-50">▶</span>
                                                        </button>
                                                        {/* Nested Menu */}
                                                        <div className="md:absolute md:left-full md:top-0 md:ml-2 md:bg-white md:shadow-lg md:p-2 md:w-40 
                                                            max-md:pl-8 max-md:bg-slate-100
                                                            md:opacity-0 md:invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-300 rounded-lg">
                                                            <button
                                                                className="block w-full text-left px-4 py-2 hover:bg-slate-200 md:hover:bg-slate-50 md:rounded text-sm text-slate-600 hover:text-blue-600 transition-colors"
                                                                onClick={() => {
                                                                    setCurrentPage('timesheet');
                                                                    setHoveredMenu(null);
                                                                    setIsMenuOpen(false);
                                                                }}
                                                            >
                                                                Time Sheet
                                                            </button>
                                                            <button
                                                                className="block w-full text-left px-4 py-2 hover:bg-slate-200 md:hover:bg-slate-50 md:rounded text-sm text-slate-600 hover:text-blue-600 transition-colors"
                                                                onClick={() => {
                                                                    setCurrentPage('apply-leave');
                                                                    setHoveredMenu(null);
                                                                    setIsMenuOpen(false);
                                                                }}
                                                            >
                                                                Apply Leave
                                                            </button>
                                                        </div>
                                                    </div>
                                                );
                                            }
                                            return (
                                                <button
                                                    key={idx}
                                                    onClick={() => {
                                                        if (link.name === 'HelpDesk' && subItem === 'Support Partner Details') {
                                                            setCurrentPage('support-partners');
                                                            setSelectedJob(null);
                                                        } else if (link.name === 'Forms') {
                                                            setSelectedForm(subItem);
                                                            setCurrentPage('form-template');
                                                        } else if (link.name === 'HelpDesk' && subItem !== 'Support Partner Details' && subItem !== 'HR IS') {
                                                            setSelectedHelpDeskCategory(subItem);
                                                            setCurrentPage('help-desk');
                                                        }
                                                        setHoveredMenu(null);
                                                        setIsMenuOpen(false);
                                                    }}
                                                    className="text-left w-full px-4 py-3 md:py-2 md:px-3 hover:bg-slate-100 md:hover:bg-slate-50 rounded-lg text-slate-600 hover:text-blue-600 transition-colors text-sm"
                                                >
                                                    {subItem}
                                                </button>
                                            );
                                        })
                                    )}
                                </div>
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
