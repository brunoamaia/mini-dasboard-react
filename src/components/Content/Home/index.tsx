import React from 'react';

import Graphic from '../../../img/graphic.png';

import '../../../styles/home.css'

export function Home() {
  return (
    <div className="home">
      <h1>Activity - Week</h1>
      <img src={Graphic} alt="" />
    </div >
  )
}