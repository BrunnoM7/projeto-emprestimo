import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const UiShell = props => {
  return (
    <Fragment>
      <nav className='navbar bg-dark'>
        <div>
          
        </div>
        <div>
          <ul>
            <li>
              <Link to={'/'}>COMO FUNCIONA</Link>
            </li>
            <li>
              <Link to={'/'}>PRIVACIDADE</Link></li>
            <li>
              <Link to={'/'}>AJUDA</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        {props.children}
      </main>
    </Fragment>
  )
}

export default UiShell
