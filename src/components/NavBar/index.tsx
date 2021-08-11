import React from 'react';

import Bell from '../../img/bell.svg'
import Cycling from '../../img/cycling.svg'
import Help from '../../img/help.svg'
import Home from '../../img/home.svg'
import Running from '../../img/running.svg'
import Steps from '../../img/steps.svg'

import '../../styles/nav-bar.css'

export function NavBar() {
  const actualPage = 'home'
  function handleChangeToContent(content: string) {
    console.log(content);
  }

  return (
    <aside>
      <nav>
        <button>
          <img src={Bell} alt="ligar alerta" />
        </button>

        <div className="separator" />

        <button
          className={actualPage === 'home' ? 'active' : ''}
          onClick={() => handleChangeToContent('home')}
        >
          <img src={Home} alt="ir para o início" />
        </button>
        <button
          // className={actualPage === 'cycling' ? 'active' : ''}
          onClick={() => handleChangeToContent('cycling')}
        >
          <img src={Cycling} alt="ciclismo" />
        </button>
        <button
          // className={actualPage === 'running' ? 'active' : ''}
          onClick={() => handleChangeToContent('running')}
        >
          <img src={Running} alt="corrida" />
        </button>
        <button
          // className={actualPage === 'steps' ? 'active' : ''}
          onClick={() => handleChangeToContent('steps')}
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