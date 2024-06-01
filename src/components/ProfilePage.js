import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';
import './ProfilePage.css';

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`profile-page ${theme}`}>
      <h1>Мой профиль</h1>
      {user ? (
        <div>
          <p>Email: {user.email}</p>
          {/* Дополнительные данные профиля */}
        </div>
      ) : (
        <p>Нет доступных пользовательских данных.</p>
      )}
    </div>
  );
};

export default ProfilePage;