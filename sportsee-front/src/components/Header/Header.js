import React from 'react';
import './Header.scss';
import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="logo"><img  src={logo} alt='Logo SportSee'></img></div>
      <nav className="nav">
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/Profil">Profil</a></li>
          <li><a href="/Reglage">Réglage</a></li>
          <li><a href="/Communaute">Communauté</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
