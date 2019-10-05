import { ADD_MODEL } from './actions/index'

export default (state = [], action = {}) => {
    console.log('reducer', action.type, 'payload', action.payload)
  switch (action.type) {
    case ADD_MODEL:
      return [
        ...state, ...action.payload ]
    default:
      return state
  }
}