import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import InfoContext from '../../context/info/InfoContext'
import Button from './Button';

const Info = ({ info }) => {
  let navigate = useNavigate();
  const infoContext = useContext(InfoContext);

  const { setCurrent } = infoContext;

  const onMais = () => {
    setCurrent(info);
    navigate(`/pedidos/${info.id}`);
  }

  return (
    <div className='my-1'>
      <div className='card bg-dark' key={info.id}>
          <h3>{info.nome}</h3>
          <div className='py-1'>
            <p className='text-bold'><span className='text-primary'>VALOR:</span> {info.valor}</p>
            <p className='text-bold'><span className='text-primary'>PARCELAS:</span> {info.parcelas}</p>
            <p className='text-bold'><span className='text-primary'>MOTIVO:</span> {info.motivo}</p>
          </div>
          <div className='text-center'>
            <Button className={'btn'} onClick={onMais} value={'DETALHES'} />
          </div>
        </div>
    </div>
  )
}

export default Info
