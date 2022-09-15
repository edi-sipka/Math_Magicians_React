/* eslint-disable */
import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import styles from '../Navigation.module.css';

const Navbar = [
  { to: '/', text: 'Home' },
  { to: '/calculator', text: 'Calculator' },
  { to: '/quote', text: 'Quote' },
];

const Nav = () => (
  <BrowserRouter>
    <nav className={styles.navigation}>
      <h1>Math Magicians</h1>
      <ul className={styles.item}>
        {Navbar.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to} className={styles.links}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </BrowserRouter>
);

export default Nav;
