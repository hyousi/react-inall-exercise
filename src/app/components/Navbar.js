import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.less';

export default function Navbar() {
  return (
    <nav className='container'>
      <ul>
        <li>
          <NavLink exact to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/calc'>在线计算器</NavLink>
        </li>
        <li>
          <NavLink to='/counter'>在线倒计时器</NavLink>
        </li>
      </ul>
    </nav>
  );
}
