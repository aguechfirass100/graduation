import { Badge, Input } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from "react-redux"
import { Link } from 'react-router-dom'
import { logOut, clearUserState } from '../redux/userRedux'
import { mobile } from "../responsive";

const Container = styled.div`
    height: 60px;
    -moz-user-select: none;
    ${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    width: 200px;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const LogOutBtn = styled.div`
    cursor: pointer
`

const Navbar = () => {

    const dispatch = useDispatch()

    const quantity = useSelector(state => state.cart.quantity)
    const user = useSelector(state => state.user.currentUser)

    const handleLogOut = () => {
        localStorage.removeItem('persist:root');
        localStorage.removeItem("cart");
        dispatch(logOut())
        dispatch(clearUserState())
    }

  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                <Input style={{border: "none"}}/>
                    <Search style={{color:"gray", fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Link to="/">
                <Center><Logo>AGF.</Logo></Center> 
            </Link>
            <Right>
               { user ?
                        <LogOutBtn onClick={() => handleLogOut()}>
                            <Link to={"/login"}>
                                <MenuItem>Logout</MenuItem>
                            </Link>
                        </LogOutBtn>
                    :
                        <>
                            <Link to={"/register"}>
                                <MenuItem>REGISTER</MenuItem>
                            </Link>
                            <Link to={"/login"}>
                                <MenuItem>SIGN IN</MenuItem>
                            </Link>
                        </>
                }
                <Link to="/cart">
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlined color="action" />
                        </Badge>
                    </MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar