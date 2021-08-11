import React from 'react';

import { Content } from './components/Content'
import { NavBar } from './components/NavBar'

import './styles/app.css'

function App() {
  return (
    <div className="App">
      <main>
        <NavBar />
        <Content />
      </main>
    </div>
  );
}

export default App;
