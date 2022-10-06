import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
// import { fallDown as Menu } from 'react-burger-menu'

const NavProject = (props) => {
  const handleClick = (e) => {
    console.log(e.target.innerText)
    props.setPage(e.target.innerText)
  }
  // const styles = {
  //   bmBurgerButton: {
  //     position: 'fixed',
  //     width: '36px',
  //     height: '30px',
  //     left: '36px',
  //     top: '36px',
  //     background: 'blue !important',
  //   },
  //   bmBurgerBars: {
  //     background: '#373a47'
  //   },
  //   bmBurgerBarsHover: {
  //     background: '#a90000'
  //   },
  //   bmCrossButton: {
  //     height: '24px',
  //     width: '24px'
  //   },
  //   bmCross: {
  //     background: '#bdc3c7'
  //   },
  //   bmMenuWrap: {
  //     position: 'fixed',
  //     height: '100%',
  //     backgroundColor: 'pink'
  //   },
  //   bmMenu: {
  //     background: '#373a47',
  //     padding: '2.5em 1.5em 0',
  //     fontSize: '1.15em'
  //   },
  //   bmMorphShape: {
  //     fill: '#373a47'
  //   },
  //   bmItemList: {
  //     color: '#b8b7ad',
  //     padding: '0.8em'
  //   },
  //   bmItem: {
  //     display: 'inline-block'
  //   },
  //   bmOverlay: {
  //     background: 'rgba(0, 0, 0, 0.3)'
  //   }
  // }

  return (
   
    <div className="nav-project">
     <Link to="/sophie_homer_portfolio" className="home">
        Sophie Homer
      </Link>
    <nav className="projectNav"> 
    {/* <Menu style={ styles } right={ true } pageWrapId={"page-wrap"} outerContainerId={"App"}> */}
      <a id="aboutExtended" className="menu-item">
      <Link to="/about_extended" className="aboutNav">
        About
      </Link>
      </a>
      <Link to="/Work" className="portfolioNav">
        Work
      </Link>
      <Link to="/resume" className="resumeNav">
        Resume 
      </Link>
      <a href='mailto:sophiehomer94@gmail.com' className='contactNav'>Reach out</a>
    {/* </Menu> */}
  </nav>
  </div>

  )
}

export default NavProject