import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartProvider } from './contexts/CartContext';
import { ClientProvider } from './contexts/ClientContext';

ReactDOM.render(
  <React.StrictMode>
    <ClientProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

