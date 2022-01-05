import React, { Fragment, useContext } from 'react'

import StepContext from '../context/step/StepContext';

import StatusBar from '../components/StatusBar';
import Form from '../components/Form';
import Review from '../components/Review';
import Final from '../components/Final';

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
      {step === 4 && <Final />}
    </Fragment>
  )
}

export default Home
