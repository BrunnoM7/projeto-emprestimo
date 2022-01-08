import React, { Fragment, useContext } from 'react'
import InfoContext from '../../context/info/InfoContext';
import StepContext from '../../context/step/StepContext';

const StatusBar = () => {
  const infoContext = useContext(InfoContext);
  const stepContext = useContext(StepContext);

  const { current, orgs } = infoContext;
  const { step } = stepContext;

  const formatSexo = () => {
    if(current.sexo.length > 1) {
      return "AMBOS";
    } else {
      return current.sexo[0].toUpperCase();
    }
  }

  const formatMotivo = () => {
    let end = current.motivo.length > 15 ? '...' : '';
    return current.motivo.split('').slice(0,15).join('').toUpperCase()+end;
  }

  const formatValor = () => {
    let valor = current.valor.split(",");
    valor[0] = valor[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return valor.join(",");
  }

  return (
    <div>
      <div className={
        `bg-dark 
        ${ step > 0 && step < 4 ? 'hide-sm' : '' }`
      }>
        <div className='container container-flex status-bar'>
          {(current !== null && (step !== 0 || current.id)) &&
            <Fragment>
              {(current.nome && current.cpf) &&
                <div className='status-name'>
                  <p className='label color-primary'>ME CHAMO:</p>
                  <p className='info'>{current.nome.toUpperCase()}</p>
                  <p className='label'>
                    <span className='color-primary'>CPF: </span> 
                    {current.cpf}
                  </p>
                </div>
              }

              {(current.valor && current.parcelas && current.motivo) && (
                <div className='container-flex status-money'>
                  <div>
                    <p className='label color-primary'>PRECISO DE:</p>
                    <p className='info'>R$ {formatValor()}</p>
                  </div>
                  <div>
                    <p className='label color-primary'>QUERO PAGAR EM:</p>
                    <p className='info'>{current.parcelas} VEZES</p>
                  </div>
                  <div>
                    <p className='label color-primary'>PARA:</p>
                    <p className='info'>{
                      `${formatMotivo()}`
                    }</p>
                  </div> 
                </div>
              )}
            </Fragment>
          }
        </div>

        {(current !== null && 
          ((step === 4 || step === 5) || current.id )) && 
          <Fragment>
            <div className='container container-flex status-bar docs'>
              {(current.valor && current.parcelas && current.motivo) && (
                <div className='container-flex status-docs'>
                  <div>
                    <p className='label color-primary'>NÚMERO DO RG:</p>
                    <p className='info'>{current.rg}</p>
                  </div>
                  <div>
                    <p className='label color-primary'>DATA DE EMISSÃO:</p>
                    <p className='info'>{current.emissao}</p>
                  </div>
                </div>
                
              )}

              {(current.sexo) &&
                <div className='container-flex status-sex'>
                  <div>
                    <p className='label color-primary'>SEXO DECLARADO:</p>
                    <p className='info'>{formatSexo()}</p>
                  </div>
                </div>
              }
            </div>
            <div className='container container-flex status-bar org'>
              <div>
                <p className='label color-primary'>ORGÃO EXPEDIDOR:</p>
                <p className='info'>{
                  `${
                    orgs
                      .filter(org => org.value === current.orgEmissor && org.label)[0]
                      .label
                      .toUpperCase()
                    }`
                }</p>
              </div> 
            </div>
          </Fragment>
        }

      </div>
      
      
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
    </div>
  )
}

export default StatusBar
