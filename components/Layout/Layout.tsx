import { FooterLinks } from '@components/Footer/Footer';
import { HeaderResponsive } from '@components/Header/Header'
import Navbar from '@components/Navbar/Navbar'
import React from 'react'

const Layout= ({children}) => {

  const links = [
      {
        "link": "/about",
        "label": "Canasta"
      }
  ];

  const data = [
      {
        "title": "Nosotros",
        "links": [
          {
            "label": "Conoce más",
            "link": "#"
          },
        ]
      },
      {
        "title": "Servicios",
        "links": [
          {
            "label": "Todos los productos",
            "link": "#"
          }
        ]
      },
      {
        "title": "Hecho para",
        "links": [
          {
            "label": "El curso de NextJS de Platzi",
            "link": "#"
          }
        ]
      }
  ]

  return (
    <div>
        {HeaderResponsive({links})}
        {children}
        {FooterLinks({data})}
    </div>
  )
}

export default Layout