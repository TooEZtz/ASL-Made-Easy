import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App.jsx'
const clerkFrontendApi = 'YOUR_FRONTEND_API_KEY';

createRoot(document.getElementById('root')).render(
  <ClerkProvider frontendApi={clerkFrontendApi}>
    <App />
  </ClerkProvider>, document.getElementById('root')
);
