import React, { useState } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background-color: #0074d9;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`

type Props = {
  value?: number
}
const MyCounter = ({ value = 0 }: Props) => {
  const [counter, setCounter] = useState(value)

  const onMinus = () => {
    setCounter((prev) => prev - 11)
  }

  const onPlus = () => {
    setCounter((prev) => prev + 11)
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <Button onClick={onMinus}>-</Button>
      <Button onClick={onPlus}>+</Button>
    </div>
  )
}

export default MyCounter
