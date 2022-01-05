import React, { Fragment, useState, useEffect, useContext } from 'react'

import InfoContext from '../context/info/InfoContext'
import StepContext from '../context/step/StepContext'

const Form = () => {
  const infoContext = useContext(InfoContext);
  const stepContext = useContext(StepContext);

  const { current, setCurrent } = infoContext;
  const { step, nextStep, previousStep } = stepContext;

  const [orgs, setOrgs] = useState([]);
  const [sex, setSex] = useState([])
  const [user, setUser] = useState({
    nome: '',
    cpf: '',
    valor: '',
    parcelas: '',
    rg: '',
    emissao: '',
    orgEmissor: '',
    sexo: []
  })

  useEffect(() => {
    fetch("orgsSource.json")
      .then(res => res.json())
      .then(data => setOrgs(data.orgao_emissor));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (current !== null) {
      setUser(current)
    } else {
      setUser({
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
  }, [current, infoContext])

  const { nome, cpf, valor, parcelas, motivo, rg, emissao, orgEmissor, sexo } = user;

  const handleSexCheckbox = e => {
    if(e.target.checked) {
      setSex([...sex, e.target.value]);
    } else {
      setSex(sex.filter(item => item !== e.target.value));
    }
  }

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value});

  const onSubmit = e => {
    e.preventDefault();
    if(step === 1) {
      setCurrent(user);
      nextStep();
    } else if(step === 2) {
      setUser({ ...user, sexo: sex });
      setCurrent({ ...user, sexo: sex });
      nextStep();
      console.log('Fui enviado!!!')
    }
    
  }

  return (
    <Fragment>
      <form className='container' onSubmit={onSubmit}>
        { step === 1 && 
          <Fragment>
            <h2>SIMULE</h2>
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
          </Fragment> 
        }
        { step === 2 && 
          <Fragment>
            <h2>DADOS PESSOAIS</h2>
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
            
              <select 
                name="orgEmissor" 
                onChange={onChange}
              >
                {orgs.map((org,i) => 
                  (
                    <option 
                      key={i} 
                      value={org.value} 
                      selected={orgEmissor === org.value}
                    >
                      {org.label}
                    </option>
                    )
                  )
                }
              </select>
            </div>
            <div>
              <label>
                Masculino
                <input 
                  type="checkbox" 
                  name="sexo" 
                  value="masculino" 
                  onChange={handleSexCheckbox} 
                  
                />
              </label>
              <label>
                Feminino
                <input 
                  type="checkbox" 
                  name="sexo" 
                  value="feminino" 
                  onChange={handleSexCheckbox} 
                  
                />
              </label>
            </div>
          </Fragment>
        }
        <input type="submit" value="Continuar" />
      </form>
    </Fragment>
  )
}

export default Form
