import React, { FormEvent } from 'react';
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux'

import UpdateSportInfos from './UpdateSportInfos';

import { Creators as sportInfosActions } from '../../../store/ducks/sportInfos'


import Cycling from '../../../img/cycling.svg';
import Running from '../../../img/running.svg';
import Steps from '../../../img/steps.svg';


import '../../../styles/frame.css';

interface MyProps {
  sportName: string
  sportInfos: {
    label: string,
    target: number,
    unit: string,
    value: number,
  }
  updateValue: (value: number) => void
}
interface MyState {
  newValue: string,
}

class Frame extends React.Component<MyProps, MyState> {

  constructor(props: MyProps) {
    super(props)
    this.state = {
      newValue: '',
    }
    this.handleupdateSportValue = this.handleupdateSportValue.bind(this);
  }

  handleupdateSportValue(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nValue = parseFloat(this.state.newValue) | 0
    this.props.updateValue(nValue)
    
    this.setState((state) => ({
      newValue: '',
    }))
  }

  handleChangeValue(newValue: string) {
    this.setState({
      newValue: newValue,
    })
  }

  render() {
    const { sportInfos } = this.props
    let percent = Math.round(sportInfos.value / sportInfos.target * 100)

    return (
      <div className="frame">
        <UpdateSportInfos sport={this.props.sportName} />
        <div className="sport">
          {this.props.sportName === 'cycling' && <img src={Cycling} alt="" />}
          {this.props.sportName === 'running' && <img src={Running} alt="" />}
          {this.props.sportName === 'steps' && <img src={Steps} alt="" />}
        </div>
        <div className="data">
          <div>
            <h2>{sportInfos.label}</h2>

            <div className="value">
              <form onSubmit={this.handleupdateSportValue}>
                <label>Value:
                  <input
                    type="text"
                    name="value"
                    placeholder={String(sportInfos.value)}
                    value={!this.state.newValue ? '' : this.state.newValue }
                    onChange={event => { this.handleChangeValue(event.target.value) }}
                  />
                </label>
                <button type="submit">update</button>
              </form>
            </div>

            <div className="progress">
              <div className="progress-value">
                <p>Progress: </p>
                <p>{percent}%</p>
              </div>
              <div className="progress-bar">
                <div
                  className="progression"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
            <p>Target: {sportInfos.target} {sportInfos.unit}</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ((state: { sportInfos: any }) => ({
  sportInfos: state.sportInfos
}))

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => (
  bindActionCreators(sportInfosActions, dispatch)
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Frame)