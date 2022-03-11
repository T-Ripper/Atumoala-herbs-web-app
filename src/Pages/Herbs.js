import React from 'react'
import Navbar from '../Component/Navbar';
import Annoucement from '../Component/Annoucement';
import Newsletter from '../Component/Newsletter';
import Footer from '../Component/Footer';
import herbs4 from "../asset/herbs4.jpeg";
import styled from 'styled-components'
import { Remove , Add} from '@mui/icons-material';
import { mobile } from '../responsive';



const Container = styled.div `

`
const Wrapper = styled.div `
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column"})}

`;
const ImgContainer = styled.div `
    flex: 1;
`;
const Image = styled.img `
     width: 100%;
     height: 90vh;
     object-fit: cover;
     ${mobile({ height: "50vh"})}
`;
const InfoContainer = styled.div `
    flex:1 ; 
    padding: 0px 50px;
    ${mobile({ padding: "10px"})}
`;
const Title = styled.h1 `
     font-weight: 200;

`
const Disc = styled.p `
 margin: 20px 0px;
`
const Price = styled.span `
    Font-weight : 100;
    font-size: 40px;
`
const FilterContainer=  styled.div `
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
    
`;
const AddContainer = styled.div`
    width: 50%;
    display: flex ;
    align-items: center;
    justify-content:space-between
    ${mobile({ width: "100%" })}
`

const AmountContainer = styled.div`
     display : flex;
     align-items: center;
     font-weight: 700

`
const Amount = styled.span`
width: 30px;
height: 0px;
border-radius: 30px;
border: 1px solid teal;
display : flex;
align-items: center;
justify-content: center;
margin: 0px 10;


`
const Button= styled.button`
padding:15px;
border: 2px solid teal ;
cursor: pointer;
font-weight: 500; 

&:hover {
    background-color: 
    rgb(43, 71, 43);
}
`
const Filter = styled.div `
     { /* margin-top:25px; */}

    display:flex;
    align-items: center;
`
const FilterColor = styled.div `
     width:20px;
     height:20px;
     border-radius: 50%;
     background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterTitle = styled.span `
    font-size: 20px;
    font-weight: 200;
`
const FilterQuantity = styled.select `
 margin-left: 15px;
 padding: 5px;
`
const FilterQuantityOption = styled.option`

`

const Herbs = () => {
    return (
        <Container>
            <Navbar />
            <Annoucement />
            <Wrapper>
                <ImgContainer>
                    <Image src = {herbs4} />
                </ImgContainer>
                <InfoContainer>
                    <Title> Narun </Title>
                    <Disc>Narun : Take half tea spoon of the Narun powder, 
                    pour it in your mouth and use water to swallow it . 
                    Take this in the morning and night when you want to sleep . 
                    It works for skin rashes , 
                    boils, pimple and skin irritation .</Disc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                    <Filter>
                        <FilterTitle>Color </FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="darkblue" />
                        <FilterColor color="gray" />
                    </Filter> 
                    <Filter>        
                <FilterTitle>Size</FilterTitle>
                        <FilterQuantity>
                            <FilterQuantityOption>S</FilterQuantityOption>
                            <FilterQuantityOption>M</FilterQuantityOption>
                            <FilterQuantityOption>L</FilterQuantityOption>
                        </FilterQuantity>
                        </Filter>
                  
               
                    </FilterContainer>
                       <AddContainer>
                        <AmountContainer>
                            <Remove/>
                                <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>Add To Cart</Button>
                    </AddContainer> 
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer/>
        </Container>
    )
}

export default Herbs
