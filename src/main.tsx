import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/assets/global.scss';
import App from './page/App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
