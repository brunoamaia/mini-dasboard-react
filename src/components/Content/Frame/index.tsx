import React, { FormEvent, useState } from 'react';

import Cycling from '../../../img/cycling.svg';
import Running from '../../../img/running.svg';
import Steps from '../../../img/steps.svg';

import '../../../styles/frame.css';

interface FrameProps {
  sportName: string
}

export function Frame({ sportName }: FrameProps) {
  const values = {
    logo: '',
    name: '',
    progress: 0,
    target: 0,
    unit: ''
  }
  if (sportName === 'cycling') {
    values.logo = Cycling;
    values.name = 'Cycling Hero';
    values.progress = 55
    values.target = 50
    values.unit = 'km/week'
  } else if (sportName === 'running') {
    values.logo = Running;
    values.name = 'Daily Running';
    values.progress = 75
    values.target = 7
    values.unit = 'km/week'
  } else if (sportName === 'steps') {
    values.logo = Steps;
    values.name = 'Daily Steps';
    values.progress = 95
    values.target = 12000
    values.unit = 'steps/week'
  }

  const [porcent, setPporcent] = useState(values.progress) 
  const [value, setValue] = useState('0')

  function handleupdateSportValue(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(parseFloat(value) | 0)
    setPporcent(parseFloat(value) | 0)
  }

  function handleChangeValue(newValue: string) {
    setValue(newValue)
  }

  return (
    <div className="frame">
      <div className="sport">
        <img src={values.logo} alt="" />
      </div>
      <div className="data">
        <div>
          <h2>{values.name}</h2>

          <div className="value">
            <form onSubmit={handleupdateSportValue}>
              <label>Value:
                <input
                  type="text"
                  name="value"
                  value={value}
                  onChange={event => { handleChangeValue(event.target.value) }}
                />
              </label>
              <button type="submit">update</button>
            </form>
          </div>

          <div className="progress">
            <div className="progress-value">
              <p>Progress: </p>
              <p>{porcent}%</p>
            </div>
            <div className="progress-bar">
              <div className="progression" style={{ width: `${porcent}%` }}></div>
            </div>
          </div>
          <p>Target: {values.target} {values.unit}</p>
        </div>
      </div>
    </div>
  )
}