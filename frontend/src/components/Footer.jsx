import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white mt-auto font-['Poppins',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">JF Packaging Ltd</h3>
            <p className="text-gray-400">Premier packaging company in Sri Lanka since 1987</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer transition">About Us</li>
              <li className="hover:text-white cursor-pointer transition">Careers</li>
              <li className="hover:text-white cursor-pointer transition">Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Departments</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer transition">Production</li>
              <li className="hover:text-white cursor-pointer transition">Quality Control</li>
              <li className="hover:text-white cursor-pointer transition">R&D</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <p className="text-gray-400">Email: info@jfpackaging.lk</p>
            <p className="text-gray-400">Phone: +94 XX XXX XXXX</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 JF Packaging Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
