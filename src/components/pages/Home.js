import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import StepContext from '../../context/step/StepContext';
import InfoContext from '../../context/info/InfoContext';

import Button from '../layout/Button';

const Home = () => {
  let navigate = useNavigate();
  const stepContext = useContext(StepContext);
  const infoContext = useContext(InfoContext);

  const { getOrgs } = infoContext;
  const { nextStep, setStep } = stepContext;

  useEffect(() => {
    getOrgs();
    setStep(0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onClick = () => {
    nextStep();
    navigate('/form');
  };

  return (
    <div className='container container-flex center'>
      <h2>Sua jornada para realizar seus sonhos se inicia aqui e agora</h2>
      <Button className={'btn btn-primary my-1'} onClick={onClick} value="COMECE AQUI" />
    </div>
  )
}

export default Home
