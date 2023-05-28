import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux"
import { register } from "../redux/apiCalls"
import { mobile } from "../responsive";


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("https://images.pexels.com/photos/1154861/pexels-photo-1154861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"), center;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    border-radius: 25px;
    background-color: white;
    border: 10px solid teal;
    ${mobile({ width: "75%" })}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    border-radius: 25px;
    border: 4px solid teal;
`
const Agreement = styled.span`
    font-size: 14px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    border-radius: 25px;
    background-color: teal;
    color: white;
    cursor: pointer;
`
const Error = styled.span`
    color: red
`

const Register = () => {


    const [username, setUsername] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")


    const dispatch = useDispatch()
    const { isFetching, error } = useSelector((state) => state.user)


    const handleClick = (e) => {
        e.preventDefault()
        register(dispatch, { username, email, password })
    }


  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder='username' onChange={(e) => setUsername(e.target.value)} />
                <Input placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                <Input placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>.</Agreement>
                <Button onClick={handleClick} disabled={isFetching} >CREATE</Button>
                {error && <Error>Something went wrong... try with another EMAIL</Error>}
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register