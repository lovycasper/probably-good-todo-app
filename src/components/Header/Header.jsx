import React from 'react';
import style from './Header.module.scss';

function Header() {
  return (
    <div className={style.Header}>
      <h1>ToDooOoooOOOoo!</h1>
      
      <div className={style.HeaderMenu}>
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export default Header;