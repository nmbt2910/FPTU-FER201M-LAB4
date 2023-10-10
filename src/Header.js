import React from 'react';
import { Link } from 'react-router-dom';
import './Films.css';

const Header = ({ toggleTheme }) => {
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
        <label htmlFor="toggle-theme">Toggle Theme</label>
        <input
          id="toggle-theme"
          type="checkbox"
          onChange={toggleTheme}
        />
      </div>
    </header>
  );
};

export default Header;