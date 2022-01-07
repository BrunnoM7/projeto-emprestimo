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
  const addInfo = async info => {
    const config = {
      headers: {
        'Content-Type' : 'application/json'
      }
    }

    try {
      const res = await axios.post(
        'https://61d4e2998df81200178a8e73.mockapi.io/infos', 
        info,
        config
      )

      dispatch({
        type: ADD_INFO,
        payload: res.data
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    
  }

  // update a info
  const updateInfo = async info => {
    const config = {
      headers: {
        'Content-Type' : 'application/json'
      }
    }

    console.log(info);
    try {
      const res = await axios.put(`https://61d4e2998df81200178a8e73.mockapi.io/infos/${info.id}`, info, config);

      console.log(res);
      dispatch({
        type: UPDATE_INFO,
        payload: res.data
      });
    } catch (error) {
      console.log(error);
    }
  }

  // delete a info
  const deleteInfo = async id => {
    try {
      await axios.delete(`https://61d4e2998df81200178a8e73.mockapi.io/infos/${id}`);
      
      dispatch({ type: DELETE_INFO, payload: id })
    } catch (error) {
      console.log(error);
    }
  }

  // set the current info
  const setCurrent = info => {
    dispatch({ type: SET_CURRENT, payload: info })
  }

  // clear the current info
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  }

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING })

  return <InfoContext.Provider
      value={{
        infos: state.infos,
        current: state.current,
        loading: state.loading,
        getInfos,
        addInfo,
        updateInfo,
        deleteInfo,
        setCurrent,
        clearCurrent
      }}
    >
      {props.children}
    </InfoContext.Provider>
}

export default InfoState;