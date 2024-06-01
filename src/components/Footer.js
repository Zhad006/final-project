import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './Footer.css';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footer ${theme}`}>
      <p>&copy; {new Date().getFullYear()} Book Store. Все права защищены.</p>
    </footer>
  );
};

export default Footer;