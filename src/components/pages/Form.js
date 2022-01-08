import React, { Fragment, useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import InfoContext from '../../context/info/InfoContext'
import StepContext from '../../context/step/StepContext'

import Button from '../layout/Button'
import Select from '../layout/Select';

const Form = props => {
  let navigate = useNavigate();
  let { id } = useParams();

  const infoContext = useContext(InfoContext);
  const stepContext = useContext(StepContext);

  const { current, setCurrent, clearCurrent, updateInfo, orgs } = infoContext;
  const { step, nextStep, setStep } = stepContext;

  const [orgList, setOrgList] = useState([]);
  const [sex, setSex] = useState([]);
  const [info, setInfo] = useState({
    nome: '',
    cpf: '',
    valor: '',
    parcelas: '',
    rg: '',
    emissao: '',
    orgEmissor: '',
    sexo: []
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    setOrgList(orgs);
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (current !== null) {
      setSex(current.sexo);
      setInfo({ ...current});
    } else {
      setInfo({
        nome: '',
        cpf: '',
        valor: '',
        parcelas: '',
        motivo: '',
        rg: '',
        emissao: '',
        orgEmissor: '',
        sexo: []
      })
    }

  }, [current])
  
  useEffect(() => {
    handleError();
  }, [info, sex])

  const { nome, cpf, valor, parcelas, motivo, rg, emissao, orgEmissor } = info;

  const masks = (name,value) => {
    let masked = value.replace(/\D/g, "");

    if(name === 'cpf') {
      return masked.replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
    }
    if(name === 'rg') {
      return masked.replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{1})\d+?$/, '$1');
    }
    if(name === 'emissao') {
      return masked.replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\/\d{4})\d+?$/, '$1');
    }
    return value;
  }

  const handleSexInfo = e => {
    handleError();
    if(e.target.checked){
      setSex([...sex, e.target.value]);
    } else {
      const index = sex.indexOf(e.target.value);
      setSex(sex.filter(i => i !== sex[index]));
    }
  }

  const handleError = () => {
    if(error) {
      validForm();
    }
  }

  const validForm = () => {
    if(step === 1 || id) {
      if(valor === '') {
        setError(true);
        return false;
      }
      if(parcelas === '') {
        setError(true);
        return false;
      }
      if (motivo === '') {
        setError(true);
        return false
      }
    } 
    if(step === 2 || id) {
      if (nome === '') {
        setError(true);
        return false
      }
      if (cpf.length !== 14 ) {
        setError(true);
        return false
      }
    }
    if(step === 3 || id) {
      if (rg.length !== 12) {
        setError(true);
        return false
      }
      if (emissao.length < 10) {
        setError(true);
        return false;
      }
      if (orgEmissor === '') {
        setError(true);
        return false;
      }
      if (sex.length < 1) {
        setError(true);
        return false;
      }
    }
    setError(false);
    return true
  }

  const nextForm = () => {
    if(!validForm()) {
      handleError();
      return;
    }

    setCurrent(info);
    nextStep();
    
  }

  const onChange = e => {
    setInfo({ ...info, [e.target.name]: masks(e.target.name,e.target.value)});    
    handleError();
  };

  const onSubmit = e => {
    e.preventDefault();
    if(!validForm()) {
      handleError();
      return;
    }
    
    setInfo({ ...info, sexo: sex });
    setCurrent({ ...info, sexo: sex });

    if(!id) {
      nextStep();
      navigate('/review');
    } else {
      setStep(0);
      updateInfo(info);
      navigate('/pedidos');
    }
  }

  return (
    <Fragment>
      <form className='container form-default py-1' onSubmit={onSubmit}>
        { (step === 1 || id) && 
          <Fragment>
            { !id ? 
              <div className='container'>
                <h2>SIMULE</h2>
                <p>Fala pra gente o que você precisa e a gente te ajuda.</p>
              </div>
              :
              <Fragment>
                <h2>Edite</h2>
                <p>Alguma coisa não estava correta? Sem problemas.</p>
              </Fragment>
            }
            
            <div className='container container-flex'>
              <div className='form-container'>
                <label 
                  className='form-text'
                  htmlFor='valor'
                >
                  PRECISO DE
                </label>
                <input 
                  type="text" 
                  name="valor" 
                  id='valor'
                  onChange={onChange}
                  value={valor}
                  className={`${error && valor === '' ? 'error' : ''}`}
                />
              </div>
              <span className='divisor hide-sm'>-</span>
              <div className='form-container'>
                <label 
                  className='form-text'
                  htmlFor='parcelas'
                >
                  QUERO PAGAR EM
                </label>
                <input 
                  type="text" 
                  name="parcelas" 
                  id='parcelas'
                  onChange={onChange}
                  value={parcelas}
                  className={`${error && parcelas === '' ? 'error' : ''}`}
                />
              </div>
            </div>
      
            <div className='container'>
              <label
                className='form-text'
                htmlFor='motivo'
              >
                PARA
              </label>
              <input 
                type="text" 
                name="motivo" 
                onChange={onChange}
                value={motivo}
                className={`${error && motivo === '' ? 'error' : ''}`}
              />
            </div>
            { !id &&
              <Button 
                className={'btn btn-primary'} 
                type="button" 
                value="CONTINUAR"
                onClick={nextForm} 
                disabled={error}
              />
            }
          </Fragment> 
        }
        { (step === 2 || id) && 
          <Fragment>
            { !id &&
              <h2>Agora precisamos de algumas informações suas, mas é coisa pouca e vai ser rapidinho</h2>
            }
            <div className='container container-flex form-sex'>
              <div>
                <label
                  className='form-text'
                  htmlFor='nome'
                >
                  Nome
                </label>
                <input 
                  type="text" 
                  name="nome" 
                  onChange={onChange}
                  value={nome}
                  className={`${error && nome === '' ? 'error' : ''}`}
                />
              </div>
              <span className='divisor hide-sm'>-</span>
              <div>
                <label
                  className='form-text'
                  htmlFor='nome'
                >
                  CPF
                </label>
                <input 
                  type="text" 
                  name="cpf" 
                  onChange={onChange}
                  value={cpf}
                  className={`${error && cpf === '' ? 'error' : ''}`}
                />
              </div>
            </div>
            { !id &&
              <Button 
                className={'btn btn-primary'} 
                type="button" 
                value="Continuar" 
                onClick={nextForm} 
                disabled={error}
              />
            }
          </Fragment> 
        }
        { (step === 3 || id) && 
          <Fragment>
            { !id &&
              <h2>Está quase acabando, só queremos saber mais umas coisinhas</h2>
            }
            <div
              className='container container-flex form-sex'
            >
              <div>
                <label 
                  className='form-text'
                  htmlFor='rg'
                >
                  NÚMERO DO RG
                </label>
                <input 
                  type="text" 
                  name="rg" 
                  onChange={onChange}
                  value={rg}
                  className={`${error && rg === '' ? 'error' : ''}`}
                />
              </div>
              <span className='divisor hide-sm'>-</span>
              <div>
                <label 
                  className='form-text'
                  htmlFor='emissao'
                >
                  DATA DE EMISSÃO
                </label>
                <input 
                  type="text" 
                  name="emissao" 
                  id='emissao'
                  onChange={onChange}
                  value={emissao}
                  className={`${error && emissao === '' ? 'error' : ''}`}
                />
              </div>
              <span className='divisor hide-sm'>-</span>
              <div>
                <label className='form-text'>ORGÃO EXPEDITOR</label>
                <Select
                  name="orgEmissor" 
                  onChange={onChange}
                  orgs={orgList}
                  orgEmissor={orgEmissor}
                  className={`${error && orgEmissor === '' ? 'error' : ''}`}
                />
              </div>
            </div>
            <div 
              className={`
                container container-flex form-sex
                ${error && sex.length < 1 ? 'error' : ''}
              `}>
              <label className='form-text'>SEXO</label>
              <label 
                className={
                  `input-checkbox text-center
                  ${sex.includes("masculino") ? 'checked' : ''}
                  `
                }
              >
                MASCULINO
                <input 
                  type="checkbox" 
                  name="sexo" 
                  value="masculino" 
                  onChange={handleSexInfo} 
                  checked={sex.includes("masculino")}
                />
              </label>
              <span className="divisor"><i className='hide-sm'>-</i></span>
              <label 
                className={
                  `input-checkbox text-center
                  ${sex.includes("feminino") ? 'checked' : ''}
                  `
                }
              >
                FEMININO
                <input 
                  type="checkbox" 
                  name="sexo" 
                  value="feminino" 
                  onChange={handleSexInfo} 
                  checked={sex.includes("feminino")}
                  className={`${error && sex === [] ? 'error' : ''}`}
                />
              </label>
            </div>
            <Button 
              className={'btn btn-primary'} 
              type="submit" 
              value={ id ? "FINALIZAR" : "CONTINUAR"} 
              disabled={error}
            />
          </Fragment>
        }
      </form>
    </Fragment>
  )
}

export default Form
