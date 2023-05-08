import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './sass/main.scss';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="fine-scents-react">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
