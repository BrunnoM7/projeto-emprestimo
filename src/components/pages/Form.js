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

  const { current, setCurrent, clearCurrent, updateInfo } = infoContext;
  const { step, nextStep, setStep } = stepContext;

  const [orgs, setOrgs] = useState([]);
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
    const path = id ? "../orgsSource.json" : "orgsSource.json";
    fetch(path)
      .then(res => res.json())
      .then(data => setOrgs(data.orgao_emissor));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (current !== null) {
      setSex(current.sexo);
      setInfo({ ...current});
      console.log('Sex aqui')
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

  const { nome, cpf, valor, parcelas, motivo, rg, emissao, orgEmissor } = info;

  const handleSexInfo = e => {
    if(e.target.checked){
      setSex([...sex, e.target.value]);
    } else {
      const index = sex.indexOf(e.target.value);
      setSex(sex.filter(i => i !== sex[index]));
    }
  }

  const validForm = () => {
    if(step === 1 || id) {
      if (valor === '') {
        console.log(info.valor);
        return false
      }
      if (parcelas === '') {
        return false
      }
      if (motivo === '') {
        return false
      }
      
    } 
    if(step === 2 || id) {
      if (nome === '') {
        return false
      }
      if (cpf === '') {
        return false
      }
    }
    if(step === 3 || id) {
      if (rg === '') {
        return false
      }
      if (emissao === '') {
        return false
      }
      if (orgEmissor === '') {
        return false;
      }
      if (sex.length < 1) {
        return false;
      }
    }
    return true
  }

  const nextForm = () => {
    if(!validForm()) return;

    setCurrent(info);
    nextStep();
    
  }

  const onChange = e => setInfo({ ...info, [e.target.name]: e.target.value});

  const onSubmit = e => {
    e.preventDefault();
    if(!validForm()) return;
    
    setInfo({ ...info, sexo: sex });
    setCurrent({ ...info, sexo: sex });

    if(!id) {
      nextStep();
      navigate('/review');
    } else {
      setStep(0);
      updateInfo(info);
      clearCurrent();
      navigate('/pedidos');
    }
  }

  return (
    <Fragment>
      <form className='container' onSubmit={onSubmit}>
        { (step === 1 || id) && 
          <Fragment>
            { !id ? 
              <Fragment>
                <h2>SIMULE</h2>
                <p>Fala pra gente o que você precisa e a gente te ajuda.</p>
              </Fragment>
              :
              <Fragment>
                <h2>Edite</h2>
                <p>Alguma coisa não estava correta? Sem problemas.</p>
              </Fragment>
            }
            

            <label>
              Preciso de
              <input 
                type="text" 
                name="valor" 
                onChange={onChange}
                value={valor}
              />
            </label>
      
            <label>
              Quero pagar em
              <input 
                type="text" 
                name="parcelas" 
                onChange={onChange}
                value={parcelas}
              />
            </label>
      
            <label>
              Para
              <input 
                type="text" 
                name="motivo" 
                onChange={onChange}
                value={motivo}
              />
            </label>
            { !id &&
              <Button className={'btn btn-primary'} type="button" value="Continuar" onClick={nextForm} />
            }
          </Fragment> 
        }
        { (step === 2 || id) && 
          <Fragment>
            { !id &&
              <h2>Agora precisamos de algumas informações suas, mas é coisa pouca e vai ser rapidinho</h2>
            }
            <label>
              Nome
              <input 
                type="text" 
                name="nome" 
                onChange={onChange}
                value={nome}
              />
            </label>
      
            <label>
              CPF
              <input 
                type="text" 
                name="cpf" 
                onChange={onChange}
                value={cpf}
              />
            </label>
            { !id &&
              <Button className={'btn btn-primary'} type="button" value="Continuar" onClick={nextForm} />
            }
          </Fragment> 
        }
        { (step === 3 || id) && 
          <Fragment>
            { !id &&
              <h2>Está quase acabando, só queremos saber mais umas coisinhas</h2>
            }
            <div>
              <label>
                NÚMERO DO RG
                <input 
                  type="text" 
                  name="rg" 
                  onChange={onChange}
                  value={rg}
                />
              </label>
      
              <label>
                DATA DE EMISSÃO
                <input 
                  type="text" 
                  name="emissao" 
                  onChange={onChange}
                  value={emissao}
                />
              </label>
            
              <Select
                name="orgEmissor" 
                onChange={onChange}
                orgs={orgs}
                orgEmissor={orgEmissor}
              />
            </div>
            <div>
              <label>
                Masculino
                <input 
                  type="checkbox" 
                  name="sexo" 
                  value="masculino" 
                  onChange={handleSexInfo} 
                  checked={sex.includes("masculino")}
                />
              </label>
              <label>
                Feminino
                <input 
                  type="checkbox" 
                  name="sexo" 
                  value="feminino" 
                  onChange={handleSexInfo} 
                  checked={sex.includes("feminino")}
                />
              </label>
            </div>
            <Button className={'btn btn-primary'} type="submit" value={ id ? "Finalizar" : "Continuar"} />
          </Fragment>
        }
      </form>
    </Fragment>
  )
}

export default Form
