import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './RegistrationPage.css';

function RegistrationPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      toast.success('User registered successfully!', {
        position: 'top-center',
        autoClose: 500,
        onClose: () => navigate('/')
      });
    } catch (error) {
      toast.error('Registration failed. Please try again.', {
        position: 'top-center',
        autoClose: 500
      });
    }
  };

  return (
    <div className="login-container">
      <ToastContainer />
      <div className="login-card">
        <h2 className="login-title">Create Account</h2>
        <p className="login-subtitle">Sign up to start taking secure notes</p>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <label>Username</label>
          </div>
          <div className="input-container">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <label>Email</label>
          </div>
          <div className="input-container">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label>Password</label>
          </div>
          <button type="submit" className="login-btn">Register</button>
        </form>
        <div className="signup-link">
          Already have an account? <a href="/">Login</a>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
