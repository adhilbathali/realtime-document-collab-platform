import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleApiCall } from '../utils/apiUtils';
import { toast } from 'react-toastify';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:5000';

    const handleRegister = async (e) => {
        e.preventDefault();
        if(!username || !email || !password){
            toast.error('Please fill all the fields');
            return;
        }
        const payload = { username, email, password };
        const {success, data, error} = await handleApiCall('post', `${API_ENDPOINT}/api/auth/register`, payload);
        if (success) {
            toast.success('Registration successful!');
            navigate('/login');
        } else {
            toast.error(error || 'Registration failed');
        }
    };

    return (
        <div className="container">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            <p>Already have an account? <a href="/login">Login</a></p>
        </div>
    );
};

export default Register;