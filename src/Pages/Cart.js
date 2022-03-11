import Navbar from "../Component/Navbar";
import Annoucement from "../Component/Annoucement";
import Footer from "../Component/Footer";
import herbs4 from "../asset/herbs4.jpeg";
import herbs7 from "../asset/herbs7.jpeg";
import { mobile } from "../responsive";
import styled from "styled-components";
import { Add, Remove } from "@mui/icons-material";



 
 const Container = styled.div `
 
 `
 const Wrapper = styled.div `
    padding:20px
    ${mobile({ padding: "10px" })}
 `
 const Title = styled.h1 `
 font-weight:300;
 text-align: center;

 `
 const Top = styled.div `
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
 `
 const TopButton = styled.button `
    padding:10px;
    font-weight: 400;
    cursor: pointer ;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) =>
     props.type === "filled" ? "black" : "transparent" };
    color : ${(props) => props.type === "filled" && "white"}
 
 
 `
 const TopTexts = styled.div `
     ${mobile({display: "none" })}
 `
const TopText = styled.span `
 text-decoration : underline;
 cursor: pointer;
 margin: 0 10px;

 `
const Bottom = styled.div `
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
 `
 const Info  = styled.div `
    flex:3;
 `
 const Product = styled.div `
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
 `
 const ProductDetail  = styled.div `
    flex: 2;
    display: flex
 `
 const Image  = styled.img `
    width:200;
    height: 25vh;
 `
 const  Details = styled.div `
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
 `
 const ProductName  = styled.span`
    
 `
 const ProductId = styled.span `
    
 `
 const ProductColor  = styled.div `
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: ${(props) =>props.color }
 `
 const ProductSize  = styled.span `
    
 `
 const PriceDetail  = styled.div `
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
 `
 const ProductAmountContainer= styled.div `
    display: flex;
    align-items: center;
    margin-bottom: px;

    
 `
 const ProductAmount = styled.div `
      font-size: 18px;
    margin: 5px;
    ${mobile({margin: "15px 15px"})}

    
 `
 const ProductPrice = styled.div `
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}

    
 `
const Hr = styled.hr `
    background-color: #eee;
    border: none;
    height: 1px;
`
 
 const Summary = styled.div `
    flex:1;
    border: 0.5px solid lightgray;
    border-radius:40px;
    padding:20px;
        height: 50vh;
    
 `
 const SummaryTitle = styled.h1 `
        font-weight: 200;

 `
 const SummaryItem = styled.div`
        margin: 20px 5px;
        display: flex;
        justify-content: space-between ;
        font-weight: ${(props) => props.type === "total " && "500"};
        font-size:  ${(props) => props.type === "total " && "24px"};


 `
 const SummaryItemtext = styled.span `
 
 `
 const SummaryItemPrice = styled.span `
 
 `
 const  Button = styled.button `
        width: 100%;
        padding: 10px;
        background-color: black;
        color: white;
        font-weight: 600;
 `
   

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Annoucement/>
            <Wrapper>
                <Title>YOUR HERBS</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Herbs (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type= "filled" > CHECKOUT NOW </TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src= {herbs4} />
                               <Details>
                                   <ProductName><b>Product : </b>Hypertension</ProductName>
                                   <ProductId><b>ID : </b>4959101 </ProductId>
                                   <ProductColor color= "black" />
                                   <ProductSize><b>Quantity : </b> 5</ProductSize>
                               </Details> 
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice> $30 </ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetail>
                                <Image src= {herbs7} />
                               <Details>
                                   <ProductName><b>Product : </b>Awoka</ProductName>
                                   <ProductId><b>ID : </b>564670 </ProductId>
                                   <ProductColor color= "black" />
                                   <ProductSize><b>Quantity : </b> 5</ProductSize>
                               </Details> 
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice> $50 </ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                        <SummaryItemtext>Estimated Shipping</SummaryItemtext>
                        <SummaryItemPrice> $30</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                        <SummaryItemtext>Shipping Discount</SummaryItemtext>
                        <SummaryItemPrice> $2</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type= "total">
                        <SummaryItemtext  >Total</SummaryItemtext>
                        <SummaryItemPrice> $90</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart;
