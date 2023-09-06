import React from 'react';
import s from './Header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <div>
        <img className={s.logo} src='https://png2.cleanpng.com/sh/3b7452e989cb09a33e74553ab9d668f6/L0KzQYi4UsAyN5I7SZGAYUK0RLW3U8U2bmQ7SJC5OEi0R4K7WcE2OWM2S6MDNEO2RYO4TwBvbz==/5a214d0355f360.0881714915121318433521.png' alt='logo' />
      </div>
      <div className={s.title}>
        <h2>Social Network</h2>
      </div>
    </header>
  )
}


export default Header;