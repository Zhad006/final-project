import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './NotFoundPage.css';

const NotFoundPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`not-found ${theme}`}>
      <h1>404 - Not Found</h1>
    </div>
  );
};

export default NotFoundPage;