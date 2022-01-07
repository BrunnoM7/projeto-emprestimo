import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import StepContext from '../../context/step/StepContext';

import Button from '../layout/Button';

const Home = () => {
  let navigate = useNavigate();
  const stepContext = useContext(StepContext);
  const { nextStep } = stepContext;

  const onClick = () => {
    nextStep();
    navigate('/form');
  };

  return (
    <div className='container container-flex initial'>
      Sua jornada para realizar seus sonhos se inicia agora aqui.
      <Button className={'btn btn-primary'} onClick={onClick} value="Comece aqui" />
    </div>
  )
}

export default Home
