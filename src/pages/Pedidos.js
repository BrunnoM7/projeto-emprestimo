import React, { useContext, useEffect } from 'react'
import InfoContext from '../context/info/InfoContext'
import Loading from '../layout/Loading';

const Pedidos = () => {
  const infoContext = useContext(InfoContext);

  const { loading, infos, getInfos } = infoContext;

  useEffect(() => {
    getInfos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h2>Todos os pedidos</h2>
      { !loading ? 
      infos.map(
        info => (<div key={info.id}>
          <h3>{info.nome}</h3>
          <p>{info.cpf}</p>
          <p>{info.valor}</p>
          <p>{info.parcelas}</p>
          <p>{info.motivo}</p>
          <p>{info.rg}</p>
          <p>{info.emissao}</p>
          <p>{info.orgEmissor}</p>
          <p>{info.sexo}</p>
        </div>)
      )
      : <Loading />}
    </div>
  )
}

export default Pedidos
