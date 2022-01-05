import React, { Fragment, useContext } from 'react'

import StepContext from '../context/step/StepContext';

import StatusBar from '../components/StatusBar';
import Form from '../components/Form';
import Review from '../components/Review';

const Home = () => {
  const stepContext = useContext(StepContext);
  const { step, nextStep } = stepContext;

  const onClick = () => nextStep();

  return (
    step === 0 ? 
      <div className='container'>
        Comece Sua jornada para realizar seus sonhos aqui.
        <button onClick={onClick}>Simule</button>
      </div>
    :
    <Fragment>
      <StatusBar />
      {(step === 1 || step ===2) && <Form />}
      {step === 3 && <Review />}
    </Fragment>
  )
}

export default Home
