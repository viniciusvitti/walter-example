import React from 'react'
import styled from 'styled-components'
import * as Colors from '../constants/colors'

const Button = styled.button`
  background-color: ${Colors.Gold};
  color: ${Colors.White};
  font-size: 0.8rem;
  letter-spacing: 0.01em;
  font-weight: bold;
  border: none;
  border-radius: 0.4vw;
  white-space: nowrap;
  align-self: start;
  padding: 1.5vh 1vw;
  cursor: pointer;
  :focus {
    outline: none;
  }
`

function PrimaryButton(props) {
  return (
    <Button {...props}>
      {props.children}
    </Button>
  );
}

export default PrimaryButton
