import React, { FormEvent } from 'react';

import Cycling from '../../../img/cycling.svg';
import Running from '../../../img/running.svg';
import Steps from '../../../img/steps.svg';

import '../../../styles/frame.css';

interface MyProps {
  sportName: string;
}
interface MyState {
  values: {
    name: string,
    target: number,
    unit: string
  },
  newValue: string,
  percent: number,
  target: number,
  value: number,
}

export class Frame extends React.Component<MyProps, MyState> {

  constructor(props: MyProps) {
    super(props)
    this.state = {
      values: {
        name: '',
        target: 0,
        unit: ''
      },
      newValue: '0',
      percent: 0,
      target: 0,
      value: 0
    }
    this.handleupdateSportValue = this.handleupdateSportValue.bind(this);
  }

  componentDidMount() {
    if (this.props.sportName === 'cycling') {
      this.setState({
        values: {
          name: 'Cycling Hero',
          target: 50,
          unit: 'km/week'
        },
        newValue: '27.5',
        percent: Math.round(27.5 / 50 * 100),
        value: 55
      })
    } else if (this.props.sportName === 'running') {
      this.setState({
        values: {
          name: 'Daily Running',
          target: 7,
          unit: 'km/week'
        },
        newValue: '5.75',
        percent: Math.round(5.75 / 7 * 100),
        value: 5.75
      })
    } else if (this.props.sportName === 'steps') {
      this.setState({
        values: {
          name: 'Daily Steps',
          target: 12000,
          unit: 'steps/week'
        },
        newValue: '11400',
        percent: Math.round(11400 / 12000 * 100),
        value: 11400
      })
    }
  }

  handleupdateSportValue(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nValue = parseFloat(this.state.newValue) | 0
    const newPercent = Math.round(nValue / this.state.values.target * 100)

    this.setState((state) => ({
      percent: newPercent,
      value: parseFloat(state.newValue) | 0,
    }))
  }

  handleChangeValue(newValue: string) {
    this.setState({
      newValue: newValue,
    })
  }

  render() {
    return (
      <div className="frame">
        <div className="sport">
          {this.props.sportName === 'cycling' && <img src={Cycling} alt="" />}
          {this.props.sportName === 'running' && <img src={Running} alt="" />}
          {this.props.sportName === 'steps' && <img src={Steps} alt="" />}
        </div>
        <div className="data">
          <div>
            <h2>{this.state.values.name}</h2>

            <div className="value">
              <form onSubmit={this.handleupdateSportValue}>
                <label>Value:
                  <input
                    type="text"
                    name="value"
                    value={this.state.newValue}
                    onChange={event => { this.handleChangeValue(event.target.value) }}
                  />
                </label>
                <button type="submit">update</button>
              </form>
            </div>

            <div className="progress">
              <div className="progress-value">
                <p>Progress: </p>
                <p>{this.state.percent}%</p>
              </div>
              <div className="progress-bar">
                <div
                  className="progression"
                  style={{ width: `${this.state.percent}%` }}
                />
              </div>
            </div>
            <p>Target: {this.state.values.target} {this.state.values.unit}</p>
          </div>
        </div>
      </div>
    )
  }
}
