import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate('/'), 5000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    
    <div className='container container-flex center'>
      <h2>Esta página não existe</h2>
      <p>Você vai ser redirecionado para o início em poucos segundos</p>
    </div>
    
  )
}

export default NotFound
