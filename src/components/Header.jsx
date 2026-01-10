import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header class="header">
            <div class="container header-container">
                <Link to="/" class="logo">
                    <span class="logo-p">P</span>ameltex
                    <span class="logo-sub">Leading Innovation</span>
                </Link>
                <nav class={`nav ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/our-company" class="nav-link" onClick={() => setIsMenuOpen(false)}>Our Company</Link>
                    <Link to="/individual-therapy" class="nav-link" onClick={() => setIsMenuOpen(false)}>Individual Therapy</Link>
                    <Link to="/corporate-services" class="nav-link" onClick={() => setIsMenuOpen(false)}>Corporate Services</Link>
                    <Link to="/faq" class="nav-link" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
                    <Link to="/contact" class="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                    <a href="#" class="btn btn-outline" onClick={() => setIsMenuOpen(false)}>Log in</a>
                    <Link to="/contact" class="btn btn-solid" onClick={() => setIsMenuOpen(false)}>Book Session</Link>
                </nav>
                <button class="menu-toggle" aria-label="Menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
