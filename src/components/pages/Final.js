import React, { useState, useContext, Fragment } from 'react'
import { useNavigate } from 'react-router-dom';
import InfoContext from '../../context/info/InfoContext';
import StepContext from '../../context/step/StepContext';

import Button from '../layout/Button';

const Final = () => {
  let navigate = useNavigate();
  const infoContext = useContext(InfoContext);
  const stepContext = useContext(StepContext);

  const { current, addInfo, clearCurrent } = infoContext;
  const { setStep } = stepContext;

  const [finalizado, setFinalizado] = useState(false);

  const onFinalizar = () => {
    addInfo(current);
    setFinalizado(true);
  };

  const onInicio = () => {
    clearCurrent();
    setStep(0);
    navigate('/');
  }

  const onPedidos = () => {
    clearCurrent();
    setStep(0);
    navigate('/pedidos');
  }

  return (
    <div className='container container-flex center review'>
      <h2>
        {!finalizado ? 
          'Tudo certo! Agora é só finalizar o pedido. Não precisa ter pressa, a gente espera...' 
        : 
          'Maravilha! Seu pedido foi feito. Como não tem muito mais o que fazer por aqui, você pode dar uma olhada em todos os pedidos ou voltar ao início, você quem manda.' 
        }
        
      </h2>
      <div>
      {!finalizado ? 
        <Button className={'btn btn-primary my-1'} onClick={onFinalizar} value="FINALIZAR" />
      :
        <Fragment>
          <Button className={'btn btn-primary my-1'} onClick={onInicio} value="INICIO" />
          <Button className={'btn btn-primary my-1'} onClick={onPedidos} value="PEDIDOS" />
        </Fragment>
      }
      </div>
    </div>
  )
}

export default Final
