import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section class="hero page-hero" style={{ padding: '100px 0', background: 'var(--bg-dark)' }}>
            <div class="container">
                <h1 class="hero-title" style={{ fontSize: '36px' }}>404 - Page Not Found</h1>
                <p class="hero-subtitle">The page you are looking for does not exist.</p>
                <Link to="/" class="btn btn-solid">Return Home</Link>
            </div>
        </section>
    );
};

export default NotFound;
