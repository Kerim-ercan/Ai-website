import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { PredictionProvider } from './contexts/PredictionContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PredictionProvider>
        <App />
      </PredictionProvider>
    </BrowserRouter>
  </StrictMode>
);