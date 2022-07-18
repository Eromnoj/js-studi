import React from 'react'
import {Link} from "react-router-dom"

function Footer() {
  return (
    <footer className='footer'> {/* Footer with links to the different elements */}
          <p><span ><Link aria-label='lien vers le jeu' to='/'>Jeu</Link></span>  <span ><Link aria-label='lien vers les mentions légales' to='/notices'>Mentions légales</Link></span></p>
        </footer>
  )
}

export default Footer