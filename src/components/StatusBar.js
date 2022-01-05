import React, { useContext } from 'react'
import InfoContext from '../context/info/InfoContext';
import StepContext from '../context/step/StepContext';

const StatusBar = () => {
  const infoContext = useContext(InfoContext);
  const stepContext = useContext(StepContext);

  const { current } = infoContext;
  const { step } = stepContext;

  return (
    <div>
      { step === 2 &&
        <div className='bg-primary'>
          <div className='container container-flex'>
            <div>
              <p>ME CHAMO:</p>
              <p>{current.nome}</p>
              <p>CPF: {current.cpf}</p>
            </div>

            <div>
              <p>PRECISO DE:</p>
              <p>R$ {current.valor}</p>
            </div>
            <div>
              <p>QUERO PAGAR EM:</p>
              <p>{current.parcelas} VEZES</p>
            </div>
            <div>
              <p>PARA:</p>
              <p>{current.motivo}</p>
            </div>
          </div>
        </div>
      }
      
      <div className='bg-light'>
        <div className='container container-flex'>
          <div style={{ color: step === 1 ? "blue" : "black" }}>
            <p><span>1</span> SIMULE</p>
          </div>
          <div style={{ color: step === 2 ? "blue" : "black" }}>
            <p><span>2</span> PREENCHA O CADASTRO</p>
          </div>
          <div style={{ color: step === 3 ? "blue" : "black" }}>
            <p><span>3</span> REVISE SEU PEDIDO</p>
          </div>
          <div style={{ color: step === 4 ? "blue" : "black" }}>
            <p><span>4</span> FINALIZE O PEDIDO</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatusBar