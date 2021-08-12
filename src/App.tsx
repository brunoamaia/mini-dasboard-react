import React from 'react';

import { Content } from './components/Content'
import { NavBar } from './components/NavBar'

import './styles/app.css'

class App extends React.Component {
  render() {
    return (
      <main>
        <NavBar />
        <Content />
      </main>
    )
  }
}

export default App;
