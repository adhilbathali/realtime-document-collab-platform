import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleApiCall } from '../utils/apiUtils';
import { toast } from 'react-toastify';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:5000';


    const handleLogin = async (e) => {
        e.preventDefault();
        if(!email || !password){
            toast.error('Please fill all the fields');
            return;
        }
        const payload = {email, password}
        const { success, data, error } = await handleApiCall('post', `${API_ENDPOINT}/api/auth/login`, payload);
        if (success) {
            localStorage.setItem('user', JSON.stringify({ username: data.username, token: data.token }));
            toast.success('Login successful!');
            navigate('/dashboard');
        } else {
            toast.error(error || 'Login failed');
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <p>Don't have an account? <a href="/register">Register</a></p>
        </div>
    );
};

export default Login;