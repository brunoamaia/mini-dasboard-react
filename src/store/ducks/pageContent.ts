import { AnyAction } from "redux"

export const Types = {
  toggleContent: "pageContent/toggleContent",
}

interface PageContentProps {
  page: string;
}

const initialState: PageContentProps = { page: 'home' }

// Reducers
export default function pageContent(state = initialState, action: AnyAction) {
  switch (action.type) {
    case Types.toggleContent:
      return {
        page: action.payload.text
      }
    default:
      return state
  }
}

// Creators / Action 
export const Creators = {
  toggleContent: (text: string) => ({
    type: Types.toggleContent,
    payload: {
      text
    }
  })
}
