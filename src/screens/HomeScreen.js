import React, { useEffect } from 'react'
import styled from 'styled-components'
import * as Colors from '../constants/colors'

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: ${Colors.White};
  box-sizing: border-box;
  padding: 3vw;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`

const HeaderTitle = styled.h1`
  color: ${Colors.DarkerGrey};
  letter-spacing: 0.01em;
  margin: 0;
`

const Logout = styled.p`
  font-size: 1rem;
  color: ${Colors.Grey};
  cursor: pointer;
`

function LoginScreen(props) {

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token === null) {
      props.history.push('/')
    }
  })

  const logout = () => {
    localStorage.removeItem('token')
    props.history.push('/')
  }

  return (
    <Container>
      <HeaderTitle>Home Screen</HeaderTitle>
      <Logout onClick={logout}>Go to login</Logout>
    </Container>
  )
}

export default LoginScreen
