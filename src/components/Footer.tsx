
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-soft-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-soft-purple to-soft-dark-purple flex items-center justify-center text-white font-bold">
                BS
              </div>
              <span className="text-xl font-bold">BeginnerSoft</span>
            </div>
            <p className="text-gray-300">
              Innovating Simplicity, Empowering Growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-soft-purple transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-soft-purple transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-soft-purple transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-soft-purple transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-soft-purple transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-soft-purple transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-soft-purple transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-soft-purple transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-soft-purple transition-colors">
                  Software Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-soft-purple transition-colors">
                  Web Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-soft-purple transition-colors">
                  IT Consultancy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-soft-purple transition-colors">
                  Mobile Applications
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-soft-purple transition-colors">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-soft-purple flex-shrink-0 mt-1" />
                <span className="text-gray-300">Banepa, Kavre, Nepal</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-soft-purple flex-shrink-0" />
                <a href="tel:+977XXXXXXXXX" className="text-gray-300 hover:text-soft-purple transition-colors">
                  +977 XX XXXX XXX
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-soft-purple flex-shrink-0" />
                <a href="mailto:info@beginnersoft.com" className="text-gray-300 hover:text-soft-purple transition-colors">
                  info@beginnersoft.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} BeginnerSoft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
