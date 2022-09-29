import React, { useEffect } from 'react'
import Portfolio from '../../components/Portfolio'
import NavProject from '../../components/Navigation_project';

const Work = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
      <div>
           <NavProject/>
           <Portfolio/>
    </div>
    )
  }

  export default Work





