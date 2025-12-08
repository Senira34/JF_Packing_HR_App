import React from 'react'
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white mt-auto font-['Poppins',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* Logo */}
              <img src={logo} alt="Packaging Logo" className="h-12 md:h-12 lg:h-12 w-auto brightness-0 invert" />
            </div>

            <p className="text-gray-400 mb-3 leading-relaxed text-sm">
              306, Minuwangoda Rd, Kotugoda
            </p>
            <p className="text-gray-500 text-sm italic">
              "This website has been developed as a <span className='font-bold'>2025 project by Group 14 of the Kelaniya University Master of Business Studies (MBS) program</span>. The primary purpose of the platform is to address and reduce the hidden costs associated with employee recruitment in a flexible packaging company. By providing structured career guidance, training pathways, and role-specific skill requirements, the website aims to minimize skill mismatches, shorten the learning curve of new recruits, and ultimately improve employee retention"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4 border-b border-gray-800 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {['Home', 'Departments', 'Jobs', 'Forms', 'HelpDesk', 'About Us'].map((item) => (
                <li key={item} className="hover:text-blue-500 cursor-pointer transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-base font-semibold mb-4 border-b border-gray-800 pb-2 inline-block">Opening Hours</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <span className="block text-white font-medium mb-1">Mon - Fri:</span>
                8:00 am to 5:00 pm
              </li>
              <li>
                <span className="block text-white font-medium mb-1">Saturday:</span>
                8:00 am to 1:00 pm
              </li>
              <li>
                <span className="block text-red-400 font-medium mb-1">Sunday:</span>
                Closed
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold mb-4 border-b border-gray-800 pb-2 inline-block">Contact Us</h4>

            <div className="space-y-4 text-xs text-gray-400">
              <div>
                <h5 className="text-white font-medium mb-1">Office/Sales</h5>
                <p>No : 98, Sri Sangaraja Mawatha,</p>
                <p>Colombo 10, Sri Lanka</p>
              </div>

              <div>
                <h5 className="text-white font-medium mb-1">Factory</h5>
                <p>No 306, Minuwangoda Road,</p>
                <p>Kotugoda, Sri Lanka</p>
              </div>

              <div>
                <h5 className="text-white font-medium mb-1">Contact</h5>
                <p className="mb-0.5 hover:text-blue-400 transition cursor-pointer">info@primeflexpackaging.lk</p>
                <p className="mb-0.5 hover:text-blue-400 transition cursor-pointer">marketing@primeflexpackaging.lk</p>
                <p className="text-white mt-1">(+94) 11 22 33 214</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-xs">
          <p>&copy; 2024 PrimeFlex Packaging Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
