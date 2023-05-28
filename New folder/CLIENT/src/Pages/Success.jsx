import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  color: teal;
  font-size: 26px;
  font-weight: 900;
  letter-spacing: 0.5px;
`
const Message = styled.div`
  color: black;
  font-size: 20px;
  font-wheight: 600;
`

const Success = () => {

  const [time, setTime] = React.useState(3)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTime(time - 1)
    }, 1000)
    return () => clearTimeout(timer)
  }, [time])

  React.useEffect(() => {
    if (time === 0) {
      window.location.replace("http://localhost:3000/")
    }
  }, [time])

  return (
    <>
      <Wrapper>Your payment was successfull</Wrapper>
      <Message>Going back to Home page in 3 seconds...</Message>
    </>
  )
}

export default Success