import React from 'react';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon 
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    hotel: [
      { name: 'About Us', path: '#about' },
      { name: 'Careers', path: '#careers' },
      { name: 'Press', path: '#press' },
      { name: 'Contact', path: '#contact' }
    ],
    rooms: [
      { name: 'Ocean Suite', path: '#ocean-suite' },
      { name: 'Garden Villa', path: '#garden-villa' },
      { name: 'Beachfront Suite', path: '#beachfront-suite' }
    ],
    experiences: [
      { name: 'Spa & Wellness', path: '#spa' },
      { name: 'Dining', path: '#dining' },
      { name: 'Activities', path: '#activities' },
      { name: 'Events', path: '#events' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white py-10 mt-auto">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Contact Information */}
          <div>
            <img
              src="/logo-white.svg"
              alt="Awa Hotel"
              className="h-16 mb-6"
            />
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5" />
                <a href="tel:+1234567890" className="hover:text-awa-accent transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5" />
                <a href="mailto:info@awahotel.com" className="hover:text-awa-accent transition-colors">
                  info@awahotel.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPinIcon className="h-5 w-5" />
                <p>123 Paradise Street, Tropical Island</p>
              </div>
            </div>
          </div>

          {/* Hotel Links */}
          <div>
            <h3 className="text-xl font-serif mb-6">Hotel</h3>
            <ul className="space-y-3">
              {footerLinks.hotel.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="hover:text-awa-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Rooms Links */}
          <div>
            <h3 className="text-xl font-serif mb-6">Rooms</h3>
            <ul className="space-y-3">
              {footerLinks.rooms.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="hover:text-awa-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Experiences Links */}
          <div>
            <h3 className="text-xl font-serif mb-6">Experiences</h3>
            <ul className="space-y-3">
              {footerLinks.experiences.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="hover:text-awa-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              {currentYear} Awa Hotel. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#sitemap" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;