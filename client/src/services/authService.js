import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const AUTH_KEY = 'earnpepe_admin_auth';

export const loginAdmin = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/admin/login`, { username, password });
    
    if (response.data.success) {
      // Store token (or flag) in local storage on successful server authentication
      localStorage.setItem(AUTH_KEY, response.data.token);
      return { success: true };
    }
  } catch (error) {
    return { 
      success: false, 
      message: error.response?.data?.message || 'Invalid credentials or server error' 
    };
  }
};

export const logoutAdmin = () => {
  localStorage.removeItem(AUTH_KEY);
};

export const isAdminLoggedIn = () => {
  return !!localStorage.getItem(AUTH_KEY);
};
