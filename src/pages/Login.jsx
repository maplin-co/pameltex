import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation Logic
        const users = JSON.parse(localStorage.getItem('pameltex_users_db') || '[]');
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            // Success
            localStorage.setItem('pameltex_auth', 'true');
            localStorage.setItem('pameltex_user_name', user.name);
            localStorage.setItem('pameltex_user_email', user.email);
            navigate('/dashboard');
        } else {
            // Failure
            alert("Invalid email or password. Please try again or create an account.");
        }
    };

    return (
        <section className="login-section" style={{ padding: '100px 0', background: 'var(--bg-light)', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
            <div className="container" style={{ maxWidth: '400px' }}>
                <div className="login-card" style={{ background: '#fff', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                    <h1 style={{ fontSize: '28px', marginBottom: '10px', textAlign: 'center', color: 'var(--bg-dark)' }}>Log In</h1>
                    <p style={{ textAlign: 'center', marginBottom: '30px', color: '#666' }}>Welcome back to Pameltex</p>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group" style={{ marginBottom: '20px' }}>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: '500', fontSize: '14px' }}>Email address</label>
                            <input
                                type="email"
                                id="email"
                                className="form-input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }}
                            />
                        </div>
                        <div className="form-group" style={{ marginBottom: '30px' }}>
                            <label htmlFor="password" style={{ display: 'block', marginBottom: '8px', fontWeight: '500', fontSize: '14px' }}>Password</label>
                            <input
                                type="password"
                                id="password"
                                className="form-input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px' }}
                            />
                        </div>
                        <button type="submit" className="btn btn-solid" style={{ width: '100%', borderRadius: '4px' }}>Log In</button>
                    </form>

                    <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '14px' }}>
                        <a href="#" style={{ color: 'var(--brand-green)', textDecoration: 'none' }}>Forgot password?</a>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#666' }}>
                        Don't have an account? <Link to="/signup" style={{ color: 'var(--brand-teal)', fontWeight: '600' }}>Sign Up</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
