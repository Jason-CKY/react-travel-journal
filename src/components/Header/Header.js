import React from 'react'
import './Header.css'
import logo from '../../images/logo.png'

function Header() {
  return (
    <header className='header'>
        <img src={logo} alt=""/>
        <span className='header--title'>my travel journal.</span>
    </header>
  );
}

export default Header;
