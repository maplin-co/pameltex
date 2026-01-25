import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        setIsLoading(true);

        // Simulate API call and registration
        setTimeout(() => {
            // Save user to mock DB in localStorage
            const newUser = {
                name: formData.name,
                email: formData.email,
                password: formData.password
            };

            const existingUsers = JSON.parse(localStorage.getItem('pameltex_users_db') || '[]');
            // Simple duplication check
            if (existingUsers.some(u => u.email === formData.email)) {
                alert("Email already registered!");
                setIsLoading(false);
                return;
            }

            existingUsers.push(newUser);
            localStorage.setItem('pameltex_users_db', JSON.stringify(existingUsers));

            // Auto-login after signup
            localStorage.setItem('pameltex_auth', 'true');
            localStorage.setItem('pameltex_user_name', formData.name);
            localStorage.setItem('pameltex_user_email', formData.email);

            setIsLoading(false);
            // Redirect to Dashboard
            navigate('/dashboard');
        }, 1500);
    };

    return (
        <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8f9fa', padding: '40px 20px' }}>
            <div style={{ background: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', maxWidth: '400px', width: '100%', border: '1px solid #eee' }}>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <h1 style={{ fontSize: '28px', color: 'var(--brand-purple)', marginBottom: '10px' }}>Create Account</h1>
                    <p style={{ color: '#666' }}>Join Pameltex to start your wellness journey</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#333' }}>Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '16px' }}
                            placeholder="e.g. Sarah Jones"
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#333' }}>Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '16px' }}
                            placeholder="name@example.com"
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="password" style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#333' }}>Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            minLength={8}
                            style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '16px' }}
                            placeholder="Min. 8 characters"
                        />
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#333' }}>Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            minLength={8}
                            style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '16px' }}
                            placeholder="Re-enter password"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="btn btn-solid"
                        style={{ width: '100%', padding: '14px', fontSize: '16px', background: 'var(--brand-teal)', border: 'none' }}
                    >
                        {isLoading ? 'Creating Account...' : 'Sign Up'}
                    </button>
                </form>

                <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#666' }}>
                    Already have an account? <Link to="/login" style={{ color: 'var(--brand-teal)', fontWeight: '600' }}>Sign In</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
