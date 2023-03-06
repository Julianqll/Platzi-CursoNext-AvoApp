import Navbar from 'components/Navbar/Navbar'
import React from 'react'

const Layout= ({children}) => {
  return (
    <div>
        <Navbar></Navbar>
        {children}
        <footer>Este es el footer</footer>
    </div>
  )
}

export default Layout