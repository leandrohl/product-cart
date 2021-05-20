import React from 'react';

import Menu from './components/Menu'

import './styles/global.css'

import Routes from './routes';

function App() {
  return (
    <div>
      <Menu/>
      <Routes/>
    </div>
  );
}

export default App;
