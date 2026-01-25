import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p style={{ marginBottom: '20px', color: '#555' }}><strong>Contact:</strong> +267 72 534 203 | info@pameltex.com |
                    Plot 18680 Khuhurutse St Phase 2, Gaborone</p>
                <p className="crisis-text">If you are in a crisis or any other person may be in danger - don't use this site. <Link
                    to="/resources" style={{ color: 'var(--brand-teal)', fontWeight: 'bold' }}>These resources</Link> can provide you with immediate help.</p>
                <p style={{ marginTop: '30px', fontSize: '11px', color: '#aaa' }}>Web dev by Ras Ali</p>
            </div>
        </footer>
    );
};

export default Footer;
