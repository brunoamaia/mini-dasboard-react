import React from 'react';

import Bell from '../../img/bell.svg'
import Cycling from '../../img/cycling.svg'
import Help from '../../img/help.svg'
import Home from '../../img/home.svg'
import Running from '../../img/running.svg'
import Steps from '../../img/steps.svg'

import '../../styles/nav-bar.css'

interface MyProps {
}
interface MyState {
  actualPage: string;
}

export class NavBar extends React.Component<MyProps, MyState> {

  constructor(props: MyProps) {
    super(props)
    this.state = {
      actualPage: 'home'
    }
  }

  handleChangeToContent(content: string) {
    console.log(content);
  }

  render() {
    return (
      <aside>
        <nav>
          <button>
            <img src={Bell} alt="ligar alerta" />
          </button>

          <div className="separator" />

          <button
            className={this.state.actualPage === 'home' ? 'active' : ''}
            onClick={() => this.handleChangeToContent('home')}
          >
            <img src={Home} alt="ir para o início" />
          </button>
          <button
            className={this.state.actualPage === 'cycling' ? 'active' : ''}
            onClick={() => this.handleChangeToContent('cycling')}
          >
            <img src={Cycling} alt="ciclismo" />
          </button>
          <button
            className={this.state.actualPage === 'running' ? 'active' : ''}
            onClick={() => this.handleChangeToContent('running')}
          >
            <img src={Running} alt="corrida" />
          </button>
          <button
            className={this.state.actualPage === 'steps' ? 'active' : ''}
            onClick={() => this.handleChangeToContent('steps')}
          >
            <img src={Steps} alt="passos dados" />
          </button>
          <button className="helper">
            <img src={Help} alt="ajuda" />
          </button>
        </nav>
      </aside>
    )
  }
}
