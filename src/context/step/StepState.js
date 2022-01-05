import React, { useReducer } from "react";

import StepReducer from "./StepReducer";
import StepContext from "./StepContext";

import {
  SET_STEP,
  NEXT_STEP,
  PREVIOUS_STEP
} from '../types';

const StepState = props => {
  const initialState = {
    step: 0
  }

  const [state, dispatch] = useReducer(StepReducer, initialState);

  // Set the current step
  const setStep = step => {
    dispatch({
      type: SET_STEP,
      payload: step
    })
  }

  // next step
  const nextStep = () => {
    dispatch({ type: NEXT_STEP })
  }

  // previous step
  const previousStep = () => {
    dispatch({ type: PREVIOUS_STEP })
  }


  return <StepContext.Provider
      value={{
        step: state.step,
        setStep,
        nextStep,
        previousStep
      }}
    >
      {props.children}
    </StepContext.Provider>
}

export default StepState