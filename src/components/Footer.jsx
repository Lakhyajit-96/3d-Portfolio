import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container'>
        <p>
          © 2025 <strong>Lakhyajit Changmai</strong>. All rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.link} 
              target={link.name === 'Contact' ? '_self' : '_blank'}
            >
              <img
                src={link.iconUrl}
                alt={link.name}
                className={`w-6 h-6 object-contain transition-colors duration-300 ${
                  link.name === 'GitHub' 
                    ? 'dark:invert dark:brightness-0 dark:contrast-100' 
                    : ''
                }`}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
