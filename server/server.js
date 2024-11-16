import dotenv from 'dotenv';
import express from 'express';
import session from 'express-session';
import axios from 'axios';
import { requireAuth } from '@clerk/clerk-sdk-node';

// Load environment variables
dotenv.config();

const app = express();

// Get environment variables
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const SESSION_SECRET = process.env.SESSION_SECRET || 'default-session-secret';
const CLERK_API_KEY = process.env.CLERK_API_KEY;

if (!GEMINI_API_KEY) {
  console.error('Missing Gemini API Key');
  process.exit(1);
}

if (!CLERK_API_KEY) {
  console.error('Missing Clerk API Key');
  process.exit(1);
}

// Middleware for parsing JSON data
app.use(express.json());

// Configure session
app.use(
  session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);

// Clerk authentication middleware
const authenticate = requireAuth();

// Route: Recognize Sign Language (Protected)
app.post('/api/recognize-sign-language', authenticate, async (req, res) => {
  const { videoFrame } = req.body;

  try {
    const response = await axios.post(
      'https://ai.google.dev/gemini/v1/recognize',
      { image: videoFrame },
      { headers: { Authorization: `Bearer ${GEMINI_API_KEY}` } }
    );

    res.json({ text: response.data.text });
  } catch (error) {
    console.error('Gemini API error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/speech-to-text', async (req, res) => {
  const { audioData } = req.body;

  try {
    const response = await axios.post(
      'https://ai.google.dev/gemini/v1/speech-to-text',
      { audio: audioData },
      { headers: { Authorization: `Bearer ${GEMINI_API_KEY}` } }
    );

    res.json({ text: response.data.transcript });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// Sample protected route
app.get('/api/protected', authenticate, (req, res) => {
  res.json({ message: 'You are authenticated!', userId: req.auth.userId });
});

// Sample public route
app.get('/api/public', (req, res) => {
  res.json({ message: 'This is a public route' });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
