import React  from "react"
import Logo from "../Logo";
import ButtonMenu from "../ButtonMenu"
import ContainerButtonsTranslate from "../ContainerButtonsTranslate"
import Menu from '../Menu';
import './styles.css'

const Header = () => (
  <header className='header'>        
    <div className='header-top'>
      <Logo />
      <ButtonMenu />
    </div>
    <ContainerButtonsTranslate />
    <Menu />
  </header>
  
)

export default Header