import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './LoginPage.css';

function LoginPage({ loginHandler }) {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(credentials);
      console.log("Login response:", response);

      // Check for access token
      if (response && response.access_token) {
       
        localStorage.setItem('access_token', response.access_token);

        loginHandler(); // Set isAuthenticated = true
        toast.success('Signed in successfully!', {
          position: 'top-center',
          autoClose: 500,
          onClose: () => navigate('/dashboard'),
        });
      } else {
        toast.error('Login failed. No token received.', {
          position: 'top-center',
          autoClose: 1000,
        });
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Invalid credentials. Please try again.', {
        position: 'top-center',
        autoClose: 1000,
      });
    }
  };

  return (
    <div className="login-container">
      <ToastContainer />
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Login to access your secure notes</p>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              name="username"
              value={credentials.username}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <label>Username</label>
          </div>
          <div className="input-container">
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
            <label>Password</label>
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="signup-link">
          Don't have an account? <a href="/register">Sign up</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
