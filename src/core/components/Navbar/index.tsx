import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
    <div className="navbar">
        <Link to="/home">
          <h1 className="navbar-item">
             Bootcamp DevSuperior
         </h1>
        </Link>
        
    </div>
);

export default Navbar;