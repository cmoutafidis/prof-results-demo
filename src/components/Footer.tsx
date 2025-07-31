import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Links */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <Link
              to="/cookiebeleid"
              className="text-white hover:text-red-400 transition-colors duration-200 underline"
            >
              Cookies + Privacy
            </Link>
            <Link
              to="/cookiebeleid"
              className="text-white hover:text-red-400 transition-colors duration-200 text-xl font-medium"
            >
              ProfResults
            </Link>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="https://static.wixstatic.com/media/9192c1_ca6c03821c7e4bb48936887c2bfe94cc~mv2.png/v1/fill/w_275,h_169,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9192c1_ca6c03821c7e4bb48936887c2bfe94cc~mv2.png"
              alt="ProfResults"
              className="h-20 w-auto opacity-80 hover:opacity-100 transition-opacity duration-200"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;