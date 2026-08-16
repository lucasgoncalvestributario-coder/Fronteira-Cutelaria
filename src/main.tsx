import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { LOGO_URL } from './data/cutelariaData';

// Pre-instantiate and warm image cache immediately
if (typeof window !== 'undefined') {
  const preloadedLogo = new Image();
  preloadedLogo.src = LOGO_URL;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
