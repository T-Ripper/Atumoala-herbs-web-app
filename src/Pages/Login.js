import styled from "styled-components";
import background2 from "../asset/background2.jpeg"
import { mobile } from "../responsive";

const Container = styled.div `
    width : 100vw;
    height:100vh;
     background-image: 
    url(${background2}); 
    
   background-size: 100% 100%;
    background-repeat: no-repeat ;
    background-color:    rgba(255,255,255,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div `
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%"})}

`;
const Title = styled.h1 `
   font-weight: 200;

    
 `;
const Form = styled.form`
    display: flex;
    flex-direction: column;
 `

const Input = styled.input `
flex:1;
min-width: 40%;
margin:10px 0px;
padding: 10px
`

const Button= styled.button `
width: 40%;
border: none;
padding: 15px ;
background-color:rgb(43, 71, 43) ;
color: white; 
cursor: pointer;
margin-bottom: 10px
`
const Link = styled.a `
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
    return (
        <Container>
              <Wrapper>
                <Title> SIGN IN </Title>
                <Form>
                    
                    
                    <Input placeholder= "username" />
                    <Input placeholder= "password" />
                   
                   <Button>Create</Button>  
                   <Link> DO YOU NOT REMEMBER YOUR PASSWORD </Link>
                   <Link>Create a new Account</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login;
