import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import InfoContext from '../../context/info/InfoContext';
import StepContext from '../../context/step/StepContext';

const Review = () => {
  let navigate = useNavigate();
  const infoContext = useContext(InfoContext);
  const stepContext = useContext(StepContext);

  const { current } = infoContext;
  const { nextStep, setStep } = stepContext;

  const { 
    nome,
    cpf,
    valor,
    parcelas,
    motivo,
    rg,
    emissao,
    orgEmissor,
    sexo
  } = current;

  const onConfirm = () => {
    nextStep();
    navigate('/final');
  };
  const onCorrect = () => {
    setStep(1);
    navigate('/form');
  };

  return (
    <div className='container'>
      <h3>Revisão dos dados</h3>
      <p>{nome}</p>
      <p>{cpf}</p>
      <p>{valor}</p>
      <p>{parcelas}</p>
      <p>{motivo}</p>
      <p>{rg}</p>
      <p>{emissao}</p>
      <p>{orgEmissor}</p>
      <p>{sexo}</p>

      <button onClick={onCorrect}>Corrigir</button>
      <button onClick={onConfirm}>Confirmar</button>

    </div>
  )
}

export default Review
