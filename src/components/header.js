import React  from "react"
import ButtonMenu from './ButtonMenu'
import './header.css'

const Header = () => (
  <header className='header-top'>
    <h1 className='logo-principal'>
      Morgana <span className="last-name">Souto Maior</span>
      <p className="visual-artist">Visual Artist</p>
    </h1>
    <ButtonMenu />
  </header>
  
)

export default Header
