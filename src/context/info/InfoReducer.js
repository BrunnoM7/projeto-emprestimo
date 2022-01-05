import {
  GET_INFOS,
  ADD_INFO,
  UPDATE_INFO,
  DELETE_INFO,
  SET_CURRENT,
  CLEAR_CURRENT,
  SET_LOADING
} from '../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch(action.type) {
    case GET_INFOS:
      return {
        ...state,
        infos: action.payload,
        loading: false
      }
    case ADD_INFO:
      return {
        ...state,
        loading: false
      }
    // case UPDATE_INFO:
    //   return
    // case DELETE_INFO:
    //   return
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      }
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}