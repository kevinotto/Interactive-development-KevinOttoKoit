import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
             <ul style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginRight: '20px' }}>
                    <Link to="/">Home</Link>
                </li>
                <li style={{ marginRight: '20px' }}>
                    <Link to="/about">About</Link>
                </li>
                <li style={{ marginRight: '20px' }}>
                    <Link to="/contacts">Contacts</Link>
                </li>
                <li>
                    <Link to="/admin">Admin</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;