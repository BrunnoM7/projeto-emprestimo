import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import StepContext from '../../context/step/StepContext';

import Button from '../layout/Button';

const Home = () => {
  let navigate = useNavigate();
  const stepContext = useContext(StepContext);
  const { nextStep, setStep } = stepContext;

  useEffect(() => {
    setStep(0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onClick = () => {
    nextStep();
    navigate('/form');
  };

  return (
    <div className='container container-flex initial'>
      <h2>Sua jornada para realizar seus sonhos se inicia aqui e agora</h2>
      <Button className={'btn btn-primary'} onClick={onClick} value="COMECE AQUI" />
    </div>
  )
}

export default Home
