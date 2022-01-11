
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import InfoContext from '../../context/info/InfoContext';
import StepContext from '../../context/step/StepContext';

const PrivateRoute = props => {
  const infoContext = useContext(InfoContext);
  const stepContext = useContext(StepContext);
  const { current } = infoContext;
  const { step } = stepContext;

  if (props.routeSteps) {
    return !props.routeSteps.includes(step) ? <Navigate to='/' /> : props.children;
  } else {
    return current === null ? <Navigate to='/error' /> : props.children;
  }
} 

export default PrivateRoute;