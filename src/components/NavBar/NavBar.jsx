import React from 'react'
import { CardWidget } from '../CardWidget/CardWidget'

function NavBar() {
    return (
      <>
          <nav>
              <ul>
                  <li><a href="#">Home</a></li>
                  <li>Pantalones</li>
                  <li>Camperas</li>

                  <CardWidget/>
              </ul>
          </nav>
          
      </>
    )
}

export default NavBar
