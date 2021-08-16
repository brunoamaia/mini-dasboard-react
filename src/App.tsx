import React from 'react'
import { Provider } from 'react-redux'

import store from './store'

import Content from './components/Content'
import NavBar from './components/NavBar'

import './styles/app.css'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <main>
          <NavBar />
          <Content />
        </main>
      </Provider>
    )
  }
}

export default App;
