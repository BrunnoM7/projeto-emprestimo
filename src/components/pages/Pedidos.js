import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import InfoContext from '../../context/info/InfoContext'
import Button from '../layout/Button';
import InfoCard from '../layout/InfoCard';
import Loading from '../layout/Loading';

const Pedidos = () => {
  let navigate = useNavigate();
  const infoContext = useContext(InfoContext);

  const { loading, infos, getInfos, getOrgs, clearCurrent } = infoContext;

  useEffect(() => {
    clearCurrent();
    getInfos();
    getOrgs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onInicio = () => {
    navigate('/');
  }

  return (
    <div className='my-2'>
      <h2>Todos os pedidos</h2>
      <div className={` container ${infos? 'grid-3' : ''}`}>
      { !loading ? 
      infos.map(
        info => (<InfoCard key={info.id} info={info}/>)
      )
      : <Loading />}
      </div>
      <div className='text-center'>
        <Button className={'btn btn-primary'} value={'INICIO'} onClick={onInicio}/>
      </div>
      
    </div>
  )
}

export default Pedidos
