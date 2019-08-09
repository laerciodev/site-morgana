import React, { Component } from "react"
import Logo from "../Logo";
import ButtonMenu from "../ButtonMenu"
import ContainerButtonsTranslate from "../ContainerButtonsTranslate"
import Menu from '../Menu';
import './styles.css'

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    }
  }

  showMenu() {

    this.setState({ 
      showMenu: !this.state.showMenu 
    });
    
  }

  render() {

   return (
    <header className='header'>        
      <div className='header-top'>
        <Logo />
        <ButtonMenu onClick={ () => this.showMenu() } />
      </div>
      <ContainerButtonsTranslate />
      { this.state.showMenu ? <Menu /> : null }  
    </header>
   )

  }

} 

export default Header