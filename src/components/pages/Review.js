import React, { Fragment, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import InfoContext from '../../context/info/InfoContext';
import StepContext from '../../context/step/StepContext';
import Button from '../layout/Button';

const Review = () => {
  let navigate = useNavigate();
  const stepContext = useContext(StepContext);
  const infoContext = useContext(InfoContext);


  const { nextStep, setStep } = stepContext;
  const { current, deleteInfo, clearCurrent } = infoContext;

  const onConfirm = () => {
    nextStep();
    navigate('/final');
  };
  const onCorrect = () => {
    setStep(1);
    navigate('/form');
  };

  const onDelete = () => {
    deleteInfo(current.id);
    clearCurrent();
    navigate('/pedidos');
  }

  const onEdit = () => {
    navigate(`/pedidos/${current.id}/edit`);
  }

  const onBack = () => {
    navigate('/pedidos');
  }

  return (
    <div className='container container-flex center review'>
      <h2>Agora falta pouco. Por favor revise os seus dados acima.</h2>
      <div>
        { current.id ?
            <Fragment>
              <Button className={'btn btn-light my-1'} onClick={onBack} value="VOLTAR" />
              <Button className={'btn btn-danger my-1'} onClick={onDelete} value="DELETAR" />
              <Button className={'btn btn-primary my-1'} onClick={onEdit} value="EDITAR" />
            </Fragment>
          :
            <Fragment>
              <Button className={'btn btn-light my-1'} onClick={onCorrect} value="CORRIGIR" />
              <Button className={'btn btn-primary my-1'} onClick={onConfirm} value="CONFIRMAR" />
            </Fragment>
        } 
        
      </div>
    </div>
  )
}

export default Review
