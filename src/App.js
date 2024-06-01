import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import { BookProvider } from './context/BookContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import BookPage from './components/BookPage';
import CartPage from './components/CartPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ProfilePage from './components/ProfilePage';
import AdminPage from './components/AdminPage';
import './App.css';
import './styles.css';

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <BookProvider>
            <Router>
              <div className="app">
                <Header />
                <main className="main">
                <Routes>
                <Route exact path="/" element={<HomePage />} />
                    <Route path="/book/:bookId" element={<BookPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                </Routes>
                </main>
                <Footer />
              </div>
            </Router>
          </BookProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;