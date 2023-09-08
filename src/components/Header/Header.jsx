import React from 'react';
import s from './Header.module.css'
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.title}>
        <h2>Social Network</h2>
      </div>
      <div className={s.navigation}>
        <Navbar/>
      </div>

    </header>
  )
}


export default Header;