import {
  SET_STEP,
  NEXT_STEP,
  PREVIOUS_STEP
} from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch(action.type) {
    case SET_STEP:
      return {
        ...state,
        step: action.payload
      }
    case NEXT_STEP:
      return {
        ...state,
        step: state.step+1
      }
    case PREVIOUS_STEP:
      return {
        ...state,
        step: state.step-1
      }
    default:
      return state;
  }
}