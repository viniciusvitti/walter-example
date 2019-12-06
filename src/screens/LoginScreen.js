import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import * as Colors from '../constants/colors'
import { LabeledInput, PrimaryButton } from '../components'

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

function LoginScreen(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token !== null) {
      props.history.push('/home')
    }
  })

  const login = () => {
    if (email.length > 0 && password.length > 0) {
      const encodedEmail = new Buffer(email).toString('base64')
      const encodedPass = new Buffer(password).toString('base64')
      const secret = Math.floor(Math.random() * 100000000).toString()
      const encodedSecret = new Buffer(secret).toString('base64')
      const jwt = `${encodedEmail}.${encodedPass}.${encodedSecret}`
      localStorage.setItem('token', jwt)
      props.history.push('/home')
    } else {
      alert('Please enter your login information.')
    }
  }

  return (
    <Container>
      <HeaderTitle>Log in</HeaderTitle>
      <LabeledInput
        label="Email address"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ marginBottom: '2vh' }}
      />
      <LabeledInput
        type="password"
        label="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ marginBottom: '4vh' }}
      />
      <PrimaryButton
        onClick={login}
      >
        Log in
      </PrimaryButton>
    </Container>
  )
}

export default LoginScreen
