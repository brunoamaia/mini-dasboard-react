import React from 'react';

import { Frame } from './Frame';
import { Home } from './Home';

import '../../styles/content.css';

export function Content() {

  let component = ''
  const aleatorio = Math.random()

  if (aleatorio < 0.25) component = 'home'
  else if (aleatorio < 0.5) component = 'cycling'
  else if (aleatorio < 0.75) component = 'running'
  else component = 'steps'

  return (
    <article>
      {(component === 'home') ? <Home /> : <Frame sportName={component} />}
    </article>
  )
}