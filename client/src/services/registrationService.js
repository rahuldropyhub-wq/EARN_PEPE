import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const submitRegistration = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/registrations`, data);
    return response.data; // { success: true, message: '...', registrationId: '...' }
  } catch (error) {
    console.error("Failed to save registration", error);
    throw new Error(error.response?.data?.message || 'Registration failed. Please try again.');
  }
};

export const getRegistrations = async () => {
  try {
    const response = await axios.get(`${API_URL}/registrations`);
    return response.data; // Array of registration objects
  } catch (error) {
    console.error("Failed to fetch registrations", error);
    return [];
  }
};
