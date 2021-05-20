import React from 'react';

import Menu from './components/Menu'

import { BrowserRouter as Router } from "react-router-dom";

import './styles/global.css'

import Routes from './routes';
import Products from './pages/Products';

function App() {
  return (
    <div>
      <Router>
        <Menu/>
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
