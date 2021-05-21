import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './contexts/CartContext';
import { ClientProvider } from './contexts/ClientContext';

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <ClientProvider>
          <App />
      </ClientProvider>
    </CartProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

