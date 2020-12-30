import React, { Fragment } from "react";
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
    <div className="navbar-brand">Note App</div>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to='/' exact>
          Главная
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" aria-current="page" to='/about'>
          Информация
        </NavLink>
      </li>
 
    </ul>
  </nav>
);
