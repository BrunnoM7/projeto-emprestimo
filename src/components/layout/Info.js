import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import InfoContext from '../../context/info/InfoContext'

const Info = ({ info }) => {
  let navigate = useNavigate();
  const infoContext = useContext(InfoContext);

  const { setCurrent, deleteInfo } = infoContext;

  const onEdit = () => {
    setCurrent(info);
    navigate(`/pedidos/${info.id}`);
  }

  const onDelete = () => {
    deleteInfo(info.id);
  }

  return (
    <div>
      <div key={info.id}>
          <h3>{info.nome}</h3>
          <p>{info.cpf}</p>
          <p>{info.valor}</p>
          <p>{info.parcelas}</p>
          <p>{info.motivo}</p>
          <p>{info.rg}</p>
          <p>{info.emissao}</p>
          <p>{info.orgEmissor}</p>
          <p>{info.sexo}</p>
          <button onClick={onEdit}>Editar</button>
          <button onClick={onDelete}>Deletar</button>
        </div>
    </div>
  )
}

export default Info
