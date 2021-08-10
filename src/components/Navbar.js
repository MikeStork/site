import React from 'react';
import './Navbar.css';
const Navbar = () => {
    return (
        <section data-testid='Navbar'>
            <ul>
                <li><a href="/">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/location">Location</a></li>
            </ul>
        </section>
    )
}

export default Navbar
