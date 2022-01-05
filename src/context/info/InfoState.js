import React, { useReducer } from "react";
import axios from "axios";

import InfoReducer from "./InfoReducer";
import InfoContext from "./InfoContext";

import {
  GET_INFOS,
  ADD_INFO,
  UPDATE_INFO,
  DELETE_INFO,
  SET_CURRENT,
  CLEAR_CURRENT,
  SET_LOADING
} from '../types';



const InfoState = props => {
  const initialState = {
    infos: [],
    current: null,
    loading: false
  }

  const [state, dispatch] = useReducer(InfoReducer, initialState);

  // Get all info
  const getInfos = async () => {
    setLoading();
    try {
      const res = await axios.get('https://61d4e2998df81200178a8e73.mockapi.io/infos');

      dispatch({
        type: GET_INFOS,
        payload: res.data
      });
    } catch (error) {
      console.log(error);
    }
  }

  // Add a new info

  // update a info

  // delete a info

  // set the current info
  const setCurrent = info => {
    dispatch({ type: SET_CURRENT, payload: info })
  }

  // clear the current info

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING })

  return <InfoContext.Provider
      value={{
        infos: state.infos,
        current: state.current,
        loading: state.loading,
        getInfos,
        setCurrent
      }}
    >
      {props.children}
    </InfoContext.Provider>
}

export default InfoState;