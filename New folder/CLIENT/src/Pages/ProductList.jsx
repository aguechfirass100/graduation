import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom';
import { mobile } from "../responsive";

const Container = styled.div`

`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    background-color: #F6EEE3;
    border: none;
    border-radius: 25%;
    cursor: pointer;
    ${mobile({ margin: "10px 0px" })}
`
const Option = styled.option`
    cursor: pointer;
`

const ProductList = () => {

    const location = useLocation()
    const cat = location.pathname.split("/")[2]

    const [filters, setFilters] = React.useState({})
    const [sort, setSort] = React.useState("newest")

    const handleFilters = (e) => {
        const value = e.target.value
        setFilters(
            { ...filters, [e.target.name]: value }
        )
    }

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>{cat}</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select name="color" onChange={handleFilters}>
                    <Option disabled >Color</Option>
                    <Option>white</Option>
                    <Option>black</Option>
                    <Option>red</Option>
                    <Option>blue</Option>
                    <Option>yellow</Option>
                    <Option>green</Option>
                </Select>
                <Select name="size" onChange={handleFilters}>
                    <Option disabled >Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                    <Option>XXXL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select onChange={(e) => setSort(e.target.value)}>
                    <Option value="newest">Newest</Option>
                    <Option value="asc">Price Ascending</Option>
                    <Option value="desc">Price Descending</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products
            cat = {cat}
            filters = {filters}
            sort = {sort}
        />
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList