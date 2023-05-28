import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { userRequest } from "../requestMethods"
import { Link } from 'react-router-dom';
//import { useDispatch } from "react-redux";
//import { deleteProduct } from "../redux/cartRedux";
import { mobile } from "../responsive";

const KEY = "pk_test_51KuctNAMwtO0BPl6iXhMSasVysa7gpoekWR5E5i0qXjnd8aDQXnvEZ1hQg8z7XXcQA7dTt1pFVFVgFHBLC2T2ycn00LOpDWkTt"

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 20px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" ? "none" : "2px solid black"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`
const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`
const TopText = styled.span`
    margin: 0px 10px;
    text-decoration: underline;
    cursor: pointer;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
    height: 220px;
    object-fit: cover;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span`

`
const ProductId = styled.span`

`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color}
`
const ProductSize = styled.span`

`
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ProductAmmountContainer = styled.div`
    display: flex;
    align-items: center;
`
const ProductAmmount = styled.div`
    margin: 5px;
    font-size: 24px;
    ${mobile({ margin: "5px 15px" })}
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 5px;
`
const Summary = styled.div`
    flex: 1;
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 45vh;
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-size: ${props => props.type === "total" && "24px"};
    font-weight: ${props => props.type === "total" && "600"};
`
const SummaryItemText = styled.div`
    
`
const SummaryItemPrice = styled.div`
    
`
// const Button = styled.button`
//     width: 100%;
//     padding: 15px;
//     background-color: black;
//     color: white;
//     font-weight: 600;
// `

const Cart = () => {

    const cart = useSelector(state => state.cart)
    const [stripeToken, setStripeToken] = React.useState(null)

    //const dispatch = useDispatch()


    const onToken = (token) => {
        setStripeToken(token)
    }

    // const handleDelete = (id) => {
    //     dispatch(deleteProduct(id))
    // }
    
    React.useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100
                })
            } catch (error) {
                console.log(error)
            }
        }
        stripeToken && makeRequest() && window.location.replace('http://localhost:3000/success')
    }, [stripeToken, cart.total])

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <Link to="/"> 
                    <TopButton>CONTINUE SHOPPING</TopButton>
                </Link>
                <TopTexts>
                    <TopText>Shopping Bag (2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    {cart.products.map(product =>
                            <Product>
                                <ProductDetail>
                                    <Image src={product.img} />
                                    <Details>
                                        <ProductName><b>Product:</b> {product.title}</ProductName>
                                        <ProductId><b>ID:</b> {product._id}</ProductId>
                                        <ProductColor color={product.color} />
                                        <ProductSize><b>Size:</b> {product.size}</ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmmountContainer>
                                        <Remove/>
                                        <ProductAmmount>{product.quantity}</ProductAmmount>
                                        <Add/>
                                    </ProductAmmountContainer>
                                    <ProductPrice>${product.price * product.quantity}</ProductPrice>
                                    {/* {<DeleteButton onClick={() => handleDelete(product._id)}>
                                        <DeleteForever/>
                                    </DeleteButton>} */}
                                </PriceDetail>
                            </Product>
                        )
                    }
                    <Hr/>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>${cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$20.99</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>- $5.99</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>${cart.total}</SummaryItemPrice>
                    </SummaryItem>
                    <StripeCheckout
                        name="AGFirass"
                        image=''
                        billingAddress
                        shippingAddress
                        description={`Your total is $${cart.total}`}
                        amount={cart.total*100}
                        token={onToken}
                        stripeKey={KEY}
                    />
                </Summary>
            </Bottom>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Cart