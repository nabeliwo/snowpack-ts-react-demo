import React, { FC, useState } from 'react'
import styled from 'styled-components'

type Props = {
  message: string
}

const Title = styled.h1`
  color: blue;
`

export const App: FC<Props> = ({ message }) => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Title>{message} {count}</Title>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </>
  )
}
