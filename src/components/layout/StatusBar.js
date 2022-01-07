import React, { Fragment, useContext } from 'react'
import InfoContext from '../../context/info/InfoContext';
import StepContext from '../../context/step/StepContext';

const StatusBar = () => {
  const infoContext = useContext(InfoContext);
  const stepContext = useContext(StepContext);

  const { current } = infoContext;
  const { step } = stepContext;

  const formatCPF = () => {
    let cpf = current.cpf.split('');
    return cpf.slice(0,3).join('') + '.' + cpf.slice(3,6).join('') + '.' + cpf.slice(6,9).join('') + '-' + cpf.slice(9,11).join('');
  }

  return (
    <div>
      { (step === 2 || step === 3) &&
        <div className='bg-dark'>
          <div className='container container-flex status-bar'>
            {(current.nome && current.cpf) &&
              <div className='status-name'>
                <p className='label color-primary'>ME CHAMO:</p>
                <p className='info'>{current.nome.toUpperCase()}</p>
                <p className='label'>
                  <span className='color-primary'>CPF: </span> 
                  {formatCPF()}
                </p>
              </div>
            }

            {(current.valor && current.parcelas && current.motivo) && (
              <div className='container-flex status-money'>
                <div>
                  <p className='label color-primary'>PRECISO DE:</p>
                  <p className='info'>R$ {current.valor}</p>
                </div>
                <div>
                  <p className='label color-primary'>QUERO PAGAR EM:</p>
                  <p className='info'>{current.parcelas} VEZES</p>
                </div>
                <div>
                  <p className='label color-primary'>PARA:</p>
                  <p className='info'>{
                    `${current.motivo.split('').slice(0,15).join('').toUpperCase()}${current.motivo.length > 15 ? '...' : ''}`
                  }</p>
                </div> 
              </div>
            )}
          </div>
        </div>
      }
      
      {(step > 0 && step < 6) &&
        <div className='bg-light'>
          <div className='container container-flex status-step'>
            <div style={{ color: step === 1 ? "blue" : "black" }}>
              <span className='number'>1</span> <span>SIMULE</span>
            </div>
            <div style={{ color: step === 2 || step === 3 ? "blue" : "black" }}>
              <span className='number'>2</span> <span>PREENCHA O CADASTRO</span>
            </div>
            <div style={{ color: step === 4 ? "blue" : "black" }}>
              <span className='number'>3</span> <span>REVISE SEU PEDIDO</span>
            </div>
            <div style={{ color: step === 5 ? "blue" : "black" }}>
              <span className='number'>4</span> <span>FINALIZE O PEDIDO</span>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default StatusBar
