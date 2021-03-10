import React from 'react'
import { Content, GlobalContainer, LogoPanel, SpanGrey } from '../assets/js/styled'
import Login from '../components/Login'

export default class Home extends React.Component {



  render() {
      return (
          <GlobalContainer>
              <Content>
                  <LogoPanel><SpanGrey>Painel</SpanGrey> ADMIN</LogoPanel>
                    <Login />
              </Content>
          </GlobalContainer>
      )
  }
}


