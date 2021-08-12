import React from 'react';

import Graphic from '../../../img/graphic.png';

import '../../../styles/home.css'

export class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>Activity - Week</h1>
        <img src={Graphic} alt="historico de atividades" />
      </div>
    )
  }
}
