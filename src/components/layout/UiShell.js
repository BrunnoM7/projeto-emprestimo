import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import StatusBar from './StatusBar';

const UiShell = props => {
  return (
    <Fragment>
      <nav className='navbar bg-darker'>
        <div>
          
        </div>
        <div>
          <ul>
            <li>
              <Link to={'/'}>COMO FUNCIONA</Link>
            </li>
            <span className='navbar-spacing hide-sm'></span>
            <li>
              <Link to={'/'}>PRIVACIDADE</Link>
            </li>
            <span className='navbar-spacing hide-sm'></span>
            <li>
              <Link to={'/'}>AJUDA</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <StatusBar />
        {props.children}
      </main>
    </Fragment>
  )
}

export default UiShell
