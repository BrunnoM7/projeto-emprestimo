import React, { Fragment, useContext } from 'react'
import StepContext from '../../context/step/StepContext';


const StatusStep = () => {
  const stepContext = useContext(StepContext);
  const { step } = stepContext;

  return (
    <Fragment>
      {(step > 0 && step < 6) &&
        <div className='bg-light'>
          <div className='container container-flex status-step'>
            <div 
              className={`
                ${step === 1 ? "selected" : "" }
                ${step > 1 ? "visited" : "" }
              `}
            >
              <span className='number'>1</span> <span className='text hide-sm'>SIMULE</span>
            </div>
            <div 
              className={`
                ${step === 2 || step === 3 ? "selected" : "" }
                ${step > 3 ? "visited" : "" }
              `}
            >
              <span className='number'>2</span> <span className='text hide-sm'>PREENCHA O CADASTRO</span>
            </div>
            <div 
              className={`
                ${step === 4 ? "selected" : "" }
                ${step > 4 ? "visited" : "" }
              `}
            >
              <span className='number'>3</span> <span className='text hide-sm'>REVISE SEU PEDIDO</span>
            </div>
            <div 
              className={`
                ${step === 5 ? "selected" : "" }
                ${step > 5 ? "visited" : "" }
              `}
            >
              <span className='number'>4</span> <span className='text hide-sm'>FINALIZE O PEDIDO</span>
            </div>
          </div>
        </div>
      }
    </Fragment>
  )
}

export default StatusStep
