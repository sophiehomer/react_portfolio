import React from 'react'
import './styles.css'
import Navigation from '../Navigation'

const Header = (props) => {
  return (
    <header className="header">
        <Navigation setPage = {props.setPage} />
    </header>
  )
}

export default Header