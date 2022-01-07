import React, { useContext, useEffect } from 'react'
import InfoContext from '../../context/info/InfoContext'
import Info from '../layout/Info';
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
        info => (<Info key={info.id} info={info}/>)
      )
      : <Loading />}
    </div>
  )
}

export default Pedidos
