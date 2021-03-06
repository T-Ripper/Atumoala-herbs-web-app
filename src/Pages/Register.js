import styled from "styled-components";
import background from "../asset/background.jpeg";
import { mobile } from "../responsive";


const Container = styled.div `
    width : 100vw;
    height: 100vh;
     background: 
    url(${background}); 
    ${'' /* background-color:   linear-gradient (
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5),
    ); */}
    background-repeat: no-repeat ;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({ backgroundRepeat: "repeat"})}
`
const Wrapper = styled.div `
    width: 40%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%"})}

`;
const Title = styled.h1 `
   font-size:25px;
   font-weight : 200;

    
 `;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input `
flex:1;
min-width: 40%;
margin:20px 10px 0 0;
padding: 10px
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;

`
const Button= styled.button `
width: 40%;
border: none;
padding: 15px ;
background-color:rgb(43, 71, 43) ;
color: white; 
cursor: pointer;
`

const Register  = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Create an account</Title>
                <Form>
                    <Input placeholder= "name" />
                    <Input placeholder= "last name" />
                    <Input placeholder= "username" />
                    <Input placeholder= "email" />
                    <Input placeholder= "password" />
                    <Input placeholder= "confirm password" />
                    <Agreement>By creating an account, 
                    I consent to the processing of my 
                    personal data
                    in accordance with the 
                    <b>PRIVACY POLICY</b>
                    
                    </Agreement>
                    <Button>Create</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register;