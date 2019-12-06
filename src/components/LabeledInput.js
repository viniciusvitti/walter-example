import React, { Fragment } from 'react'
import styled from 'styled-components'
import * as Colors from '../constants/colors'

const Label = styled.p`
  color: ${Colors.DarkGrey};
  letter-spacing: 0.01em;
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 1vh;
`

const Input = styled.input`
  border: 0.1vw solid ${Colors.LightGrey};
  border-radius: 0.4vw;
  width: 25vw;
  height: 5vh;
  font-size: 1rem;
  padding: 0 1rem;
  color: ${Colors.Grey};
  :focus {
    outline: none;
  }
`

function LabeledInput(props) {
  return (
    <Fragment>
      <Label>{props.label}</Label>
      <Input {...props} />
    </Fragment>
  )
}

export default LabeledInput
