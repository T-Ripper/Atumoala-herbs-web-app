import Navbar from '../Component/Navbar';
import Annoucement from '../Component/Annoucement';
import Products from '../Component/Products';
import Newsletter from '../Component/Newsletter';
import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div `

`;
const Title = styled.h1 `
    margin : 20px;
    font-size: 40px
`;

const FilterContainer = styled.div `
display: flex;
justify-content: space-between;

`;
const Filter = styled.div `
    margin:20px;
    ${mobile({ mwidth: "0px 20px", display:"flex", flexDirection: "column" })}
`;

const FilterText = styled.span `
    font-size : 20px;
    font-weight: 600;
    margin-right: 20px
    ${mobile({ marginRight: "0px"})}
`;

const Select = styled.select `
 padding : 10px; 
 margin-right: 20px
 ${mobile({ margin: "10px 0px"})}
`;

const Option = styled.option `

`;
const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Annoucement/>
            <Title> Herbs  </Title>
                <FilterContainer>
                    <Filter>
                    <FilterText>Filter Products: </FilterText>
                    <Select>
                        <Option>Black </Option>
                        <Option> White</Option>
                    </Select>
                    <Select>
                        <Option>Black </Option>
                        <Option> White</Option>
                    </Select>
                    </Filter>
                    <Filter>
                    <FilterText> Sort Products: 
                    <Select>
                        <Option>Black </Option>
                        <Option> White</Option>
                    </Select>
                    </FilterText>
                    </Filter>
                  
                </FilterContainer>
            <Products />
        <Newsletter />
           
        </Container>
    )
}

export default ProductList

