import React from "react"
import Header from "./Header"
import styled, { createGlobalStyle } from 'styled-components'
// import '../components/layout.css';
import '../components/reset.css';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap');

  html, body {
    font-family: 'Raleway', sans-serif;
  }

  li {
    list-style-type: none
  }
`

const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Header />
    <LayoutWrapper>
      { children }
    </LayoutWrapper>
  </>
)

export default Layout
