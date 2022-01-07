
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import StepContext from '../../context/step/StepContext';

const PrivateRoute = props => {
  const stepContext = useContext(StepContext);
  const { step } = stepContext;

  return !props.routeSteps.includes(step) ? <Navigate to='/' /> : props.children
} 

export default PrivateRoute;