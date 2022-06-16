import React from 'react'
import './styles.css'
import Navigation from '../Navigation'

const Header = (props) => {
  return (
    <header className="header">
        <Navigation setPage = {props.setPage} />
        <>
       {/* <h1 className="sophieHomer">SOPHIE HOMER</h1> */}
        </>
    </header>
  )
}

export default Header