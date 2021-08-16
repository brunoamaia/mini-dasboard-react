import { AnyAction } from "redux"

export const Types = {
  toggleSport: "sportInfos/toggleSport",
  updateValue: "sportInfos/updateValue"
}

interface sportInfosProps {
  label: string,
  target: number,
  unit: string,
  value: number,
}
const initialState: sportInfosProps = {
  label: '',
  target: 0,
  unit: '',
  value: 0,
}

// Reducers
export default function sportInfos(state = initialState, action: AnyAction) {
  switch (action.type) {
    case Types.toggleSport:
      return action.payload
    case Types.updateValue:
      return {...state, value: action.payload.value}
    default:
      return state
  }
}

// Creators / Action 
export const Creators = {
  toggleSport: (content: sportInfosProps) => ({
    type: Types.toggleSport,
    payload: content
  }),
  updateValue: (value: number) => ({
    type: Types.updateValue,
    payload: {
      value
    }
  })
}
