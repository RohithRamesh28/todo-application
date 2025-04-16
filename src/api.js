import axios from 'axios';

const API_URL = 'http://localhost:8080/users'; 

// Register
export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

// Login
export const loginUser = async (credentials) => {
  const form = new FormData();
  form.append('username', credentials.username);
  form.append('password', credentials.password);

  const response = await axios.post(`${API_URL}/login`, form);
  return response.data;
};
  