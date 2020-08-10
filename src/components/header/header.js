import React from 'react';
import './header.scss';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header>
        <h1>RESTy</h1>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/history'>History</NavLink></li>
        </ul>
      </header>
    );
    };
    
    
export default Header;