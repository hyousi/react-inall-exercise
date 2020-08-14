import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.less';

export default function Navbar() {
  return (
    <nav>
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
          <NavLink to='/timer'>在线倒计时器</NavLink>
        </li>
      </ul>
    </nav>
  );
}
