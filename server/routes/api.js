import express from 'express';
import { pool } from '../server.js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// 1. Submit a registration
router.post('/registrations', async (req, res) => {
  const { fullName, email, contactNumber, phonePeNumber } = req.body;

  if (!fullName || !email || !contactNumber || !phonePeNumber) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  try {
    const query = `
      INSERT INTO registrations (full_name, email, contact_number, phone_pe_number)
      VALUES ($1, $2, $3, $4)
      RETURNING id, created_at
    `;
    const values = [fullName, email, contactNumber, phonePeNumber];
    
    const result = await pool.query(query, values);
    
    res.status(201).json({
      success: true,
      message: 'Registration submitted successfully',
      registrationId: result.rows[0].id
    });
  } catch (error) {
    console.error('Database Error:', error);
    res.status(500).json({ success: false, message: 'Server error saving registration.' });
  }
});

// 2. Fetch all registrations (Admin)
router.get('/registrations', async (req, res) => {
  try {
    const query = `SELECT * FROM registrations ORDER BY created_at DESC`;
    const result = await pool.query(query);
    
    // Format keys for frontend compatibility
    const formattedData = result.rows.map(row => ({
      id: row.id,
      fullName: row.full_name,
      email: row.email,
      contactNumber: row.contact_number,
      phonePeNumber: row.phone_pe_number,
      timestamp: row.created_at
    }));

    res.status(200).json(formattedData);
  } catch (error) {
    console.error('Database Error:', error);
    res.status(500).json({ success: false, message: 'Server error fetching registrations.' });
  }
});

// 3. Admin Login
router.post('/admin/login', (req, res) => {
  const { username, password } = req.body;
  
  if (username === process.env.ADMIN_USER && password === process.env.ADMIN_PASS) {
    // In a production app, issue a JWT token here. For this phase, a simple success flag is sufficient.
    res.status(200).json({ success: true, token: 'mock-jwt-token-123' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid admin credentials' });
  }
});

export default router;
