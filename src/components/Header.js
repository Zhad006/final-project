import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';
import './Header.css';

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={theme}>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/cart">Корзина</Link>
        {isAuthenticated ? (
          <>
            <Link to="/profile">Мой профиль</Link>
            <Link to="/admin">Admin</Link>
            <button onClick={logout}>Выйти</button>
          </>
        ) : (
          <>
            <Link to="/login">Войти</Link>
            <Link to="/register">Зарегистрироваться</Link>
          </>
        )}
      </nav>
      <button onClick={toggleTheme}>Book Store</button>
    </header>
  );
};

export default Header;