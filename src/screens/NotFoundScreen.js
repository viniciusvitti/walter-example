import React from 'react'
import styled from 'styled-components'
import * as Colors from '../constants/colors'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(100deg, ${Colors.White} 49.9%, ${Colors.Black} 50%);
  box-sizing: border-box;
  padding: 0 10vw;
`

const HeaderTitle = styled.h1`
  color: ${Colors.DarkerGrey};
  letter-spacing: 0.01em;
`

function NotFoundScreen() {

  return (
    <Container>
      <HeaderTitle>Oops, page not found...</HeaderTitle>
    </Container>
  )
}

export default NotFoundScreen
