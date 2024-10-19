import React from 'react';
import './Header.style.css';
import Logo from '../../../assets/Logo';

const Header: React.FC = () => {
  return (
    <nav>
      <Logo />
      <input type="checkbox" id="nav-check" />
      <div className="nav-header"></div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <a href="https://www.linkedin.com/in/jhonatan-david-berrios-86b499210/">Linkedin</a>
        <a href="https://github.com/jhonatanBrr">GitHub</a>
      </div>
    </nav>
  );
};

export default Header;
