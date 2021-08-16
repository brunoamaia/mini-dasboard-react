import React from 'react'
import { connect } from 'react-redux'
import { AnyAction, bindActionCreators, Dispatch } from 'redux'

import { Creators as sportInfosActions } from '../../../../store/ducks/sportInfos'

interface SportInfosActions {
  label: string,
  target: number,
  unit: string,
  value: number,
}

interface MyProps {
  sport: string
  toggleSport: (data: SportInfosActions) => void
}

class UpdateSportInfos2 extends React.Component<MyProps> {
  render() {
    if (this.props.sport === 'cycling') {
      const newData = {
        label: 'Cycling',
        target: 100,
        unit: 'km/week',
        value: 50,
      }
      this.props.toggleSport(newData)
    } else if (this.props.sport === 'running') {
      const newData = {
        label: 'Running',
        target: 30,
        unit: 'km/week',
        value: 8,
      }
      this.props.toggleSport(newData)
    } else if (this.props.sport === 'steps') {
      const newData = {
        label: 'Steps',
        target: 12000,
        unit: 'steps/day',
        value: 11400,
      }
      this.props.toggleSport(newData)
    }
    return (
      <div />
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => (
  bindActionCreators(sportInfosActions, dispatch)
)

export default connect(
  null,
  mapDispatchToProps
)(UpdateSportInfos2)
