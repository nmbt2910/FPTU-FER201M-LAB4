import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Films.css';

const useThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return [isDarkTheme, toggleTheme];
};

const Header = () => {
  const [isDarkTheme, toggleTheme] = useThemeToggle();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="dark-mode-switch">
        <label htmlFor="darkModeSwitch">Dark Mode</label>
        <input
          type="checkbox"
          id="darkModeSwitch"
          checked={isDarkTheme}
          onChange={toggleTheme}
        />
      </div>
    </header>
  );
};

export default Header;