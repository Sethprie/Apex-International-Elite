'use client';

import { Mail, Phone, Globe, Instagram, Linkedin, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#032b4a' }} className="text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h4 className="text-lg font-bold mb-4" style={{ color: '#b29559' }}>
              Apex International Elite
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Global leaders in luxury product distribution, connecting premium markets across five continents.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4" style={{ color: '#b29559' }}>
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4" style={{ color: '#b29559' }}>
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Premium Distribution</li>
              <li className="text-gray-300">Strategic Consulting</li>
              <li className="text-gray-300">Global Logistics</li>
              <li className="text-gray-300">Exclusive Partnerships</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4" style={{ color: '#b29559' }}>
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" style={{ color: '#b29559' }} />
                <a href="mailto:info@apexelite.com" className="text-gray-300 hover:text-white transition-colors">
                  info@apexelite.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" style={{ color: '#b29559' }} />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5" style={{ color: '#b29559' }} />
                <span className="text-gray-300">www.apexelite.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-8" style={{ backgroundColor: '#b29559', opacity: 0.3 }}></div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center mb-8">
          <h4 className="text-lg font-bold mb-4" style={{ color: '#b29559' }}>
            Follow Us
          </h4>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/apexinternationalelite29/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ backgroundColor: '#b29559' }}
            >
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ backgroundColor: '#b29559' }}
            >
              <Facebook className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ backgroundColor: '#b29559' }}
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ backgroundColor: '#b29559' }}
            >
              <Twitter className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-8" style={{ backgroundColor: '#b29559', opacity: 0.3 }}></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left text-sm text-gray-300">
          <p>
            &copy; 2026 Apex International Elite. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
